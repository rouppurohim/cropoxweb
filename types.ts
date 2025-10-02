export interface UserData {
  crop: string;
  stage: string;
  location: string;
}

export interface DiagnosisResult {
  diagnosis: {
    name: string;
    confidence: number;
    description: string;
  };
  phtNonChemical: {
    title: string;
    methods: string[];
  };
  pesticideRecommendation: {
    title: string;
    activeIngredient: string;
    moa: string;
    rotationInfo: string;
    disclaimer: string;
  };
  seasonalPrediction: {
    title: string;
    riskLevel: 'rendah' | 'sedang' | 'tinggi';
    trend: string;
  };
  education: {
    title: string;
    summary: string;
    linkText: string;
  };
}

export type AppStep = 'input' | 'diagnosis' | 'loading' | 'results';

export type ViewMode = 'default' | 'whatsapp' | 'poster';

export type AppPage = 'home' | 'diagnosis' | 'edukasi' | 'prediksi' | 'about' | 'disclaimer' | 'privacy-policy' | 'contact-us' | 'blogs';