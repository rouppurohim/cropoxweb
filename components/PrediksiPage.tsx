import React from 'react';

const PrediksiPage: React.FC = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Prediksi OPT Musiman</h2>
            <p className="text-gray-600 mb-8">Dapatkan wawasan tentang potensi serangan OPT di lokasi Anda untuk musim tanam 2024/2025. Halaman ini akan segera tersedia dengan analisis mendalam.</p>
            
            <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                    <h3 className="font-bold text-lg text-blue-800">Analisis Berbasis Data</h3>
                    <p className="text-sm text-blue-700 mt-1">
                        Model kami menganalisis berbagai sumber data untuk memberikan prediksi yang akurat, termasuk:
                    </p>
                    <ul className="list-disc list-inside text-sm text-blue-700 mt-2 space-y-1">
                        <li><strong>Statistik Iklim:</strong> Pola curah hujan, suhu, dan kelembaban.</li>
                        <li><strong>Data OPT Historis:</strong> Tren serangan dari tahun-tahun sebelumnya (DPI & BBPOPT).</li>
                        <li><strong>Statistik Pertanian:</strong> Luas tanam dan tren produksi nasional.</li>
                        <li><strong>Data Harga:</strong> Dampak potensi serangan terhadap harga komoditas dan Nilai Tukar Petani (NTP).</li>
                    </ul>
                </div>
                
                <div className="text-center p-6 bg-gray-100 rounded-lg">
                    <h3 className="font-semibold text-gray-700">Fitur ini sedang dalam pengembangan.</h3>
                    <p className="text-sm text-gray-500 mt-1">Nantikan pembaruan untuk visualisasi data interaktif dan rekomendasi preventif berdasarkan prediksi.</p>
                </div>
            </div>

            <div className="mt-12 text-center border-t border-gray-200 pt-8">
                <p className="text-gray-600 mb-4">
                    Untuk analisis lebih mendalam dan data interaktif, kunjungi pusat prediksi kami.
                </p>
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition transform hover:scale-105"
                >
                    Kunjungi Pusat Prediksi
                </a>
            </div>
        </div>
    );
};

export default PrediksiPage;