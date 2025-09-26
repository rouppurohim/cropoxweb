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

// --- Blog Section Components ---
const blogData = [
  {
    title: '5 Cara Rotasi Pestisida untuk Mencegah Resistensi Hama',
    category: 'Stewardship',
    excerpt: 'Resistensi hama menjadi tantangan serius. Pelajari strategi rotasi bahan aktif pestisida yang efektif berdasarkan Mode of Action (MoA) untuk menjaga efikasi produk dan keberlanjutan pertanian.',
  },
  {
    title: 'Mengenal Musuh Alami: Paederus fuscipes, Sahabat Petani Padi',
    category: 'Agroekologi',
    excerpt: 'Kumbang Rove (Paederus fuscipes) adalah predator alami wereng batang coklat yang sangat efektif. Ketahui cara mengkonservasi dan meningkatkan populasi musuh alami ini di lahan sawah Anda.',
  },
  {
    title: 'Kalibrasi Sprayer: Kunci Aplikasi Pestisida yang Tepat Dosis',
    category: 'Teknologi Pertanian',
    excerpt: 'Aplikasi pestisida yang tidak terkalibrasi dapat menyebabkan pemborosan, pencemaran, dan efikasi yang rendah. Ikuti panduan langkah demi langkah untuk melakukan kalibrasi sprayer Anda.',
  },
];


const BlogCard: React.FC<(typeof blogData[0])> = ({ title, category, excerpt }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <div className="p-6 flex-grow">
            <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-1 rounded-full">{category}</span>
            <h4 className="font-bold text-lg text-gray-800 mt-3">{title}</h4>
            <p className="text-sm text-gray-600 mt-2">{excerpt}</p>
        </div>
        <div className="p-6 bg-gray-50 border-t border-gray-200">
            <a href="#" className="font-semibold text-green-600 hover:text-green-800 transition-colors">
                Baca Selengkapnya &rarr;
            </a>
        </div>
    </div>
);


const LatestUpdates: React.FC = () => {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogData.map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>
        </section>
    );
};
// --- End Blog Section Components ---


// --- Testimonials Section Components ---
const testimonialsData = [
  {
    quote: "Cropox sangat membantu saya mengidentifikasi wereng batang coklat lebih cepat. Rekomendasi PHT-nya juga mudah diikuti dan efektif menekan populasi hama.",
    name: "Asep Sunandar",
    title: "Petani Padi, Subang",
    image: "https://i.ibb.co/6gZ2x0s/image.png",
  },
  {
    quote: "Sebagai PPL, aplikasi ini jadi alat bantu andalan di lapangan. Diagnosa cepat dan berbasis data membuat penyuluhan ke petani jadi lebih akurat dan terpercaya.",
    name: "Siti Aminah",
    title: "Penyuluh Pertanian, Karawang",
    image: "https://i.ibb.co/yQBWfHq/image.png",
  },
  {
    quote: "Fitur prediksi musimannya luar biasa. Saya bisa lebih waspada dan melakukan tindakan preventif sebelum serangan penyakit blas benar-benar meluas.",
    name: "I Wayan Sudarma",
    title: "Petani Cabai, Bali",
    image: "https://i.ibb.co/z5Z2VjJ/image.png",
  }
];

const Avatar: React.FC<{ name: string; image?: string }> = ({ name, image }) => {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-2 border-green-200"
      />
    );
  }

  return (
    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 border-2 border-green-200">
        <span className="text-2xl font-bold text-green-700">{name.charAt(0)}</span>
    </div>
  );
};


const TestimonialCard: React.FC<(typeof testimonialsData[0])> = ({ quote, name, title, image }) => (
    <figure className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300 h-full">
        <Avatar name={name} image={image} />
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
          Solusi cepat untuk mengidentifikasi gulma, hama & penyakit tanaman, Mendapatkan rekomendasi pengedalian dengan non-kimia dan pestisida legal, serta Meningkatkan pengetahuan pertanian Anda.
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

      <LatestUpdates />

      <Testimonials />

    </div>
  );
};

export default HomePage;