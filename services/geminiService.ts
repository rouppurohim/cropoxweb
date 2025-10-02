// src/GeminiService.ts
import { GoogleAI, Type } from "@google/genai";
import type { UserData, DiagnosisResult } from "../types";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string;
if (!apiKey) {
  throw new Error("VITE_GEMINI_API_KEY not set");
}

// Inisialisasi klien
const ai = new GoogleAI({ apiKey });

// Skema respons (pakai snake_case jika perlu oleh SDK)
const responseSchema = {
  type: Type.OBJECT,
  properties: {
    diagnosis: {
      type: Type.OBJECT,
      properties: {
        name: { type: Type.STRING, description: "Nama OPT teridentifikasi, mis. 'Hawar Daun'." },
        confidence: { type: Type.NUMBER, description: "Tingkat kepercayaan (0-100)." },
        description: { type: Type.STRING, description: "Deskripsi singkat OPT." }
      },
      required: ["name", "confidence", "description"]
    },
    phtNonChemical: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING, description: "Judul bagian PHT non-kimia." },
        methods: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Daftar metode non-kimia." }
      },
      required: ["title", "methods"]
    },
    pesticideRecommendation: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        activeIngredient: { type: Type.STRING, description: "Bahan aktif yang direkomendasikan." },
        moa: { type: Type.STRING, description: "Kode Mode of Action (FRAC/IRAC/HRAC)." },
        rotationInfo: { type: Type.STRING, description: "Pentingnya rotasi MoA." },
        disclaimer: { type: Type.STRING, description: "Wajib: 'Gunakan sesuai label, verifikasi legalitas di pestisida.id'." }
      },
      required: ["title", "activeIngredient", "moa", "rotationInfo", "disclaimer"]
    },
    seasonalPrediction: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        riskLevel: { type: Type.STRING, enum: ["rendah", "sedang", "tinggi"] },
        trend: { type: Type.STRING }
      },
      required: ["title", "riskLevel", "trend"]
    },
    education: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        summary: { type: Type.STRING },
        linkText: { type: Type.STRING }
      },
      required: ["title", "summary", "linkText"]
    }
  },
  required: ["diagnosis", "phtNonChemical", "pesticideRecommendation", "seasonalPrediction", "education"]
} as const;

export async function fetchDiagnosis(
  userData: UserData,
  description: string,
  base64Images: string[],
  mimeTypes: string[]
): Promise<DiagnosisResult> {

  // Sesuaikan format image parts
  const imageParts = base64Images.map((img, index) => ({
    inlineData: {
      data: img, // base64 tanpa prefix data URI
      mimeType: mimeTypes[index] || "image/jpeg",
    },
  }));

  const prompt = `
Anda adalah CropoxGPT, ahli agronomi digital untuk petani Indonesia.
Berdasarkan data:
- Tanaman: ${userData.crop}
- Fase Tanam: ${userData.stage}
- Lokasi: ${userData.location}
- Gejala: "${description}"
- Foto terlampir.

Berikan output JSON sesuai skema:
1) Identifikasi OPT (nama, confidence, deskripsi)
2) Rekomendasi PHT Non-Kimia (3–4 poin)
3) Rekomendasi Pestisida (1 bahan aktif + MoA + info rotasi + disclaimer)
4) Prediksi Musiman (rendah/sedang/tinggi + analisis singkat)
5) Edukasi (judul, ringkasan, linkText)
Gunakan bahasa mudah dipahami petani.
  `.trim();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          ...imageParts,
          { text: prompt }
        ]
      }
    ],
    // Gunakan snake_case sesuai SDK
    config: {
      response_mime_type: "application/json",
      response_schema: responseSchema as any,
    },
  });

  // Akses teks dari response
  const text = response?.response?.text?.() ?? "";
  try {
    const result = JSON.parse(text);
    return result as DiagnosisResult;
  } catch (err) {
    console.error("Failed to parse JSON:", text);
    throw new Error("Invalid JSON response from model.");
  }
}
