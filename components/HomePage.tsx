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
    id: 4, // ID yang sesuai dengan artikel di BlogsPage
    title: 'Integrated Pest Management (IPM): Strategi Holistik Pengendalian Hama',
    category: 'Stewardship',
    excerpt: 'IPM menggabungkan berbagai metode pengendalian hama untuk menciptakan sistem yang berkelanjutan dan ramah lingkungan. Pelajari prinsip-prinsip dasar dan implementasinya.',
    author: 'Dr. Maya Sari',
    date: '8 Januari 2024',
    readTime: '12 menit'
  },
  {
    id: 5, // ID yang sesuai dengan artikel di BlogsPage
    title: 'Teknologi Drone untuk Monitoring Kesehatan Tanaman',
    category: 'Teknologi Pertanian',
    excerpt: 'Drone dengan sensor multispektral dapat mendeteksi stres tanaman, serangan hama, dan penyakit lebih awal. Revolusi teknologi untuk pertanian presisi.',
    author: 'Ir. Andi Pratama',
    date: '5 Januari 2024',
    readTime: '9 menit'
  },
  {
    id: 6, // ID yang sesuai dengan artikel di BlogsPage
    title: 'Mikroorganisme Tanah: Kunci Kesuburan dan Kesehatan Lahan',
    category: 'Agroekologi',
    excerpt: 'Mikroorganisme tanah berperan vital dalam siklus nutrisi dan kesehatan tanaman. Pahami cara meningkatkan biodiversitas mikroba untuk produktivitas optimal.',
    author: 'Prof. Indira Sari',
    date: '3 Januari 2024',
    readTime: '11 menit'
  },
];


const BlogCard: React.FC<(typeof blogData[0]) & { onNavigate: (page: AppPage) => void }> = ({ 
  id, title, category, excerpt, author, date, readTime, onNavigate 
}) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <div className="p-6 flex-grow">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-1 rounded-full">{category}</span>
                <span className="text-xs text-gray-500">{readTime}</span>
            </div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">{title}</h4>
            <p className="text-sm text-gray-600 mb-4">{excerpt}</p>
        </div>
        <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                    <span className="font-medium">{author}</span>
                    <span className="mx-1">•</span>
                    <span>{date}</span>
                </div>
                <button 
                  onClick={() => onNavigate('blogs')}
                  className="font-semibold text-green-600 hover:text-green-800 transition-colors text-sm"
                >
                    Baca Selengkapnya &rarr;
                </button>
            </div>
        </div>
    </div>
);


const LatestUpdates: React.FC<{ onNavigate: (page: AppPage) => void }> = ({ onNavigate }) => {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Latest Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogData.map((post, index) => (
                    <BlogCard key={index} {...post} onNavigate={onNavigate} />
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
    image: "./testimoni/Asep Sunandar.jpg",
  },
  {
    quote: "Sebagai PPL, aplikasi ini jadi alat bantu andalan di lapangan. Diagnosa cepat dan berbasis data membuat penyuluhan ke petani jadi lebih akurat dan terpercaya.",
    name: "Siti Aminah",
    title: "Penyuluh Pertanian, Karawang",
    image: "./testimoni/siti aminah.jpg",
  },
  {
    quote: "Fitur prediksi musimannya luar biasa. Saya bisa lebih waspada dan melakukan tindakan preventif sebelum serangan penyakit blas benar-benar meluas.",
    name: "I Wayan Sudarma",
    title: "Petani Cabai, Bali",
    image: "./testimoni/I Wayan Sudarma.jpg",

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
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-16 text-center">
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
          buttonText="Kunjungi Pusat Edukasi"
          onClick={() => onNavigate('edukasi')}
        />
        <FeatureCard
          icon="🌦️"
          title="Prediksi Musiman"
          description="Dapatkan wawasan berbasis data mengenai potensi risiko OPT di wilayah Anda untuk perencanaan yang lebih baik."
          buttonText="Kunjungi Pusat Prediksi"
          onClick={() => onNavigate('prediksi')}
        />
      </div>

      <LatestUpdates onNavigate={onNavigate} />

      <Testimonials />

    </div>
  );
};

export default HomePage;