import React from 'react';

const AboutUsPage: React.FC = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Tentang Cropox</h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                Platform cerdas untuk identifikasi OPT, rekomendasi PHT, dan edukasi pertanian modern.
            </p>

            <div className="space-y-10">
                <div className="text-center">
                    <h3 className="text-2xl font-semibold text-green-700 mb-3">Misi Kami</h3>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
                        Misi kami adalah memberdayakan petani, agronomis, dan seluruh stakeholder pertanian di Indonesia dengan teknologi AI terdepan untuk perlindungan tanaman yang efektif, efisien, dan berkelanjutan.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-green-700 mb-5 text-center">Apa yang Kami Tawarkan?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <FeatureItem
                            icon="🔬"
                            title="Diagnosa Cepat & Akurat"
                            description="Menggunakan AI untuk menganalisis foto dan gejala tanaman, memberikan identifikasi OPT dengan cepat."
                        />
                        <FeatureItem
                            icon="🌿"
                            title="Rekomendasi Terpadu"
                            description="Menyediakan panduan Pengendalian Hama Terpadu (PHT) non-kimia dan rekomendasi pestisida legal."
                        />
                        <FeatureItem
                            icon="🎓"
                            title="Pusat Edukasi Digital"
                            description="Menjadi sumber pengetahuan melalui modul-modul interaktif tentang stewardship dan praktik pertanian terbaik."
                        />
                        <FeatureItem
                            icon="📈"
                            title="Wawasan Berbasis Data"
                            description="Memberikan prediksi musiman berbasis data iklim, DPI, dan tren produksi untuk perencanaan yang lebih matang."
                        />
                    </div>
                </div>

                <div className="text-center bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-green-700 mb-3">Visi untuk Masa Depan</h3>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
                        Visi kami adalah menjadi platform digital terpercaya yang menjembatani inovasi teknologi dengan kearifan lokal untuk mewujudkan ketahanan pangan nasional.
                    </p>
                </div>
            </div>
        </div>
    );
};

const FeatureItem: React.FC<{ icon: string; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="text-3xl mt-1">{icon}</div>
        <div>
            <h4 className="font-bold text-gray-800">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    </div>
);


export default AboutUsPage;