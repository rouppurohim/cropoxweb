import { GoogleGenAI, Type } from "@google/genai";
import { UserData, DiagnosisResult } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        diagnosis: {
            type: Type.OBJECT,
            properties: {
                name: { type: Type.STRING, description: "Nama organisme pengganggu tanaman (OPT) yang teridentifikasi, misalnya 'Hawar Daun'." },
                confidence: { type: Type.NUMBER, description: "Tingkat kepercayaan diagnosa dalam persentase (0-100)." },
                description: { type: Type.STRING, description: "Deskripsi singkat tentang OPT tersebut." }
            },
            required: ["name", "confidence", "description"]
        },
        phtNonChemical: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING, description: "Judul untuk bagian ini, misalnya 'Rekomendasi PHT Non-Kimia'." },
                methods: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                    description: "Daftar metode pengendalian non-kimia (varietas tahan, musuh alami, sanitasi, dll)."
                }
            },
            required: ["title", "methods"]
        },
        pesticideRecommendation: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING, description: "Judul untuk bagian ini, misalnya 'Rekomendasi Pestisida Legal'." },
                activeIngredient: { type: Type.STRING, description: "Nama bahan aktif pestisida yang direkomendasikan." },
                moa: { type: Type.STRING, description: "Kode Mode of Action (FRAC/IRAC/HRAC)." },
                rotationInfo: { type: Type.STRING, description: "Informasi singkat tentang pentingnya rotasi MoA." },
                disclaimer: { type: Type.STRING, description: "Peringatan wajib: 'Gunakan sesuai label, verifikasi legalitas di pestisida.id.'" }
            },
            required: ["title", "activeIngredient", "moa", "rotationInfo", "disclaimer"]
        },
        seasonalPrediction: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING, description: "Judul untuk bagian ini, misalnya 'Prediksi OPT Musiman'." },
                riskLevel: { type: Type.STRING, enum: ["rendah", "sedang", "tinggi"], description: "Tingkat risiko OPT untuk musim ini." },
                trend: { type: Type.STRING, description: "Analisis tren singkat berdasarkan data iklim, DPI, dll." }
            },
            required: ["title", "riskLevel", "trend"]
        },
        education: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING, description: "Judul untuk bagian ini, misalnya 'Modul Edukasi Terkait'." },
                summary: { type: Type.STRING, description: "Ringkasan singkat dari modul edukasi yang relevan." },
                linkText: { type: Type.STRING, description: "Teks untuk tautan, misalnya 'Pelajari Lebih Lanjut tentang 6 Tepat'." }
            },
            required: ["title", "summary", "linkText"]
        }
    },
     required: ["diagnosis", "phtNonChemical", "pesticideRecommendation", "seasonalPrediction", "education"]
};


export const fetchDiagnosis = async (
  userData: UserData,
  description: string,
  base64Images: string[],
  mimeTypes: string[]
): Promise<DiagnosisResult> => {
    
    const imageParts = base64Images.map((img, index) => ({
        inlineData: {
            data: img,
            mimeType: mimeTypes[index] || 'image/jpeg',
        },
    }));

    const prompt = `
    Anda adalah CropoxGPT, seorang ahli agronomi digital untuk petani di Indonesia.
    Berdasarkan data berikut:
    - Tanaman: ${userData.crop}
    - Fase Tanam: ${userData.stage}
    - Lokasi: ${userData.location}
    - Deskripsi Gejala: "${description}"
    - Foto terlampir.

    Lakukan analisis dan berikan output dalam format JSON yang sesuai dengan skema yang diberikan.
    1.  **Identifikasi OPT**: Analisis foto dan deskripsi untuk mengidentifikasi gulma, hama, atau penyakit. Berikan nama OPT dan tingkat kepercayaan.
    2.  **Rekomendasi PHT Non-Kimia**: Berikan 3-4 poin rekomendasi PHT non-kimia yang praktis.
    3.  **Rekomendasi Pestisida**: Berikan satu bahan aktif yang legal dan efektif. Sertakan kode MoA dan pentingnya rotasi. Selalu sertakan disclaimer wajib.
    4.  **Prediksi Musiman**: Berdasarkan lokasi dan tanaman, berikan prediksi risiko OPT (rendah/sedang/tinggi) untuk musim tanam 2024/2025 dengan analisis singkat.
    5.  **Edukasi**: Berikan ringkasan satu modul edukasi yang paling relevan dengan kasus ini.

    Gunakan bahasa yang mudah dipahami oleh petani. Pastikan semua kolom dalam skema JSON terisi.
    `;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: {
            parts: [
                ...imageParts,
                { text: prompt }
            ]
        },
        config: {
            responseMimeType: 'application/json',
            responseSchema: responseSchema,
        },
    });

    try {
        const jsonText = response.text.trim();
        const result = JSON.parse(jsonText);
        return result as DiagnosisResult;
    } catch (e) {
        console.error("Failed to parse JSON response:", response.text);
        throw new Error("Invalid JSON response from model.");
    }
};