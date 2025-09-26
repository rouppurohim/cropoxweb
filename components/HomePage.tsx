import React from 'react';
import { AppPage } from '../types';

interface HomePageProps {
  onNavigate: (page: AppPage) => void;
}

const FeatureCard: React.FC<{
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}> = ({ icon, title, description, buttonText, onClick }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col text-center items-center transform hover:scale-105 transition-transform duration-300">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
    <button
      onClick={onClick}
      className="mt-auto w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
    >
      {buttonText}
    </button>
  </div>
);

// --- Testimonials Section Components ---
const testimonialsData = [
  {
    quote: "Cropox sangat membantu saya mengidentifikasi wereng batang coklat lebih cepat. Rekomendasi PHT-nya juga mudah diikuti dan efektif menekan populasi hama.",
    name: "Asep Sunandar",
    title: "Petani Padi, Subang",
  },
  {
    quote: "Sebagai PPL, aplikasi ini jadi alat bantu andalan di lapangan. Diagnosa cepat dan berbasis data membuat penyuluhan ke petani jadi lebih akurat dan terpercaya.",
    name: "Siti Aminah",
    title: "Penyuluh Pertanian, Karawang",
  },
  {
    quote: "Fitur prediksi musimannya luar biasa. Saya bisa lebih waspada dan melakukan tindakan preventif sebelum serangan penyakit blas benar-benar meluas.",
    name: "I Wayan Sudarma",
    title: "Petani Cabai, Bali",
  }
];

const Avatar: React.FC<{ name: string }> = ({ name }) => (
    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 border-2 border-green-200">
        <span className="text-2xl font-bold text-green-700">{name.charAt(0)}</span>
    </div>
);

const TestimonialCard: React.FC<(typeof testimonialsData[0])> = ({ quote, name, title }) => (
    <figure className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 h-full">
        <Avatar name={name} />
        <blockquote className="flex-grow">
            <p className="text-gray-600 italic">“{quote}”</p>
        </blockquote>
        <figcaption className="mt-4">
            <div className="font-bold text-gray-800">{name}</div>
            <div className="text-sm text-gray-500">{title}</div>
        </figcaption>
    </figure>
);


const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 rounded-xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Ini Kata Mereka</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
// --- End Testimonials Section Components ---


const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8 text-center">
        <h2 className="text-4xl font-extrabold text-green-800 tracking-tight">
          Diagnosa Cepat dengan Cropox 
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Solusi cerdas untuk mengidentifikasi Gulma, Hama & Penyakit Tanaman, mendapatkan rekomendasi PHT, dan meningkatkan pengetahuan pertanian Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon="📸"
          title="Diagnosa Tanaman"
          description="Unggah foto tanaman Anda untuk mendapatkan diagnosa akurat dan solusi pengendalian dari AI agronomis kami."
          buttonText="Mulai Diagnosa"
          onClick={() => onNavigate('diagnosis')}
        />
        <FeatureCard
          icon="📚"
          title="Pusat Edukasi"
          description="Jelajahi modul pembelajaran tentang pestisida, praktik pertanian berkelanjutan, dan teknologi terbaru."
          buttonText="Lihat Modul"
          onClick={() => onNavigate('edukasi')}
        />
        <FeatureCard
          icon="🌦️"
          title="Prediksi Musiman"
          description="Dapatkan wawasan berbasis data mengenai potensi risiko OPT di wilayah Anda untuk perencanaan yang lebih baik."
          buttonText="Cek Prediksi"
          onClick={() => onNavigate('prediksi')}
        />
      </div>

      <Testimonials />

    </div>
  );
};

export default HomePage;