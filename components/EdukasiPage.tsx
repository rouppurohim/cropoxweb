import React from 'react';

const EdukasiPage: React.FC = () => {
    const modules = [
        { title: "Pestisida & Formulasi", description: "Pahami jenis-jenis pestisida dan cara kerjanya.", icon: "🧪" },
        { title: "Kalibrasi Sprayer", description: "Pastikan dosis aplikasi Anda tepat dan efisien.", icon: "🎯" },
        { title: "Penggunaan Drone Pertanian", description: "Manfaatkan teknologi drone untuk pemupukan dan penyemprotan.", icon: "✈️" },
        { title: "Konsep 6 Tepat", description: "Tepat Sasaran, Jenis, Waktu, Dosis, Cara, dan Mutu.", icon: "✅" },
        { title: "Musuh Alami & Konservasi", description: "Kenali sahabat petani di lahan Anda.", icon: "🐞" },
        { title: "Praktik Pertanian Berkelanjutan", description: "Jaga kesehatan tanah dan lingkungan untuk masa depan.", icon: "🌍" },
    ];

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pusat Edukasi Cropox</h2>
            <p className="text-gray-600 mb-8">Tingkatkan pengetahuan Anda tentang perlindungan tanaman modern dan berkelanjutan melalui modul-modul di bawah ini. (Konten akan segera hadir).</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((mod, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-md hover:border-green-300 transition-all cursor-pointer">
                        <div className="text-4xl mb-3">{mod.icon}</div>
                        <h3 className="font-bold text-lg text-gray-800">{mod.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{mod.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center border-t border-gray-200 pt-8">
                <p className="text-gray-600 mb-4">
                    Klik link di bawah ini untuk terhubung ke pusat edukasi Cropox.
                </p>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition transform hover:scale-105"
                >
                    Kunjungi Pusat Edukasi
                </a>
            </div>
        </div>
    );
};

export default EdukasiPage;