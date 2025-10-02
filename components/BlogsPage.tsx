import React, { useState } from 'react';

// Extended blog data with more articles and additional fields
const blogsData = [
  {
    id: 1,
    title: '5 Cara Rotasi Pestisida untuk Mencegah Resistensi Hama',
    category: 'Stewardship',
    excerpt: 'Resistensi hama menjadi tantangan serius. Pelajari strategi rotasi bahan aktif pestisida yang efektif berdasarkan Mode of Action (MoA) untuk menjaga efikasi produk dan keberlanjutan pertanian.',
    content: 'Resistensi hama terhadap pestisida merupakan salah satu tantangan terbesar dalam pertanian modern. Ketika hama mengembangkan resistensi, efektivitas pestisida menurun drastis, memaksa petani menggunakan dosis yang lebih tinggi atau beralih ke produk yang lebih mahal...',
    author: 'Dr. Agus Santoso',
    date: '15 Januari 2024',
    readTime: '8 menit',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop'
  },
  {
    id: 2,
    title: 'Mengenal Musuh Alami: Paederus fuscipes, Sahabat Petani Padi',
    category: 'Agroekologi',
    excerpt: 'Kumbang Rove (Paederus fuscipes) adalah predator alami wereng batang coklat yang sangat efektif. Ketahui cara mengkonservasi dan meningkatkan populasi musuh alami ini di lahan sawah Anda.',
    content: 'Paederus fuscipes atau yang dikenal sebagai kumbang rove merupakan salah satu musuh alami paling efektif untuk mengendalikan wereng batang coklat. Kumbang kecil ini memiliki kemampuan luar biasa dalam memangsa telur dan nimfa wereng...',
    author: 'Prof. Siti Nurlaela',
    date: '12 Januari 2024',
    readTime: '6 menit',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop'
  },
  {
    id: 3,
    title: 'Kalibrasi Sprayer: Kunci Aplikasi Pestisida yang Tepat Dosis',
    category: 'Teknologi Pertanian',
    excerpt: 'Aplikasi pestisida yang tidak terkalibrasi dapat menyebabkan pemborosan, pencemaran, dan efikasi yang rendah. Ikuti panduan langkah demi langkah untuk melakukan kalibrasi sprayer Anda.',
    content: 'Kalibrasi sprayer adalah proses penting yang sering diabaikan petani. Sprayer yang tidak terkalibrasi dapat menyebabkan aplikasi pestisida yang tidak merata, overdosis, atau underdosis yang berdampak pada efikasi dan lingkungan...',
    author: 'Ir. Bambang Wijaya',
    date: '10 Januari 2024',
    readTime: '10 menit',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop'
  },
  {
    id: 4,
    title: 'Integrated Pest Management (IPM): Strategi Holistik Pengendalian Hama',
    category: 'Stewardship',
    excerpt: 'IPM menggabungkan berbagai metode pengendalian hama untuk menciptakan sistem yang berkelanjutan dan ramah lingkungan. Pelajari prinsip-prinsip dasar dan implementasinya.',
    content: 'Integrated Pest Management (IPM) atau Pengendalian Hama Terpadu (PHT) adalah pendekatan holistik yang menggabungkan berbagai strategi pengendalian hama. Metode ini tidak hanya fokus pada eradikasi hama, tetapi juga mempertimbangkan aspek ekonomi, ekologi, dan sosial...',
    author: 'Dr. Maya Sari',
    date: '8 Januari 2024',
    readTime: '12 menit',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=250&fit=crop'
  },
  {
    id: 5,
    title: 'Teknologi Drone untuk Monitoring Kesehatan Tanaman',
    category: 'Teknologi Pertanian',
    excerpt: 'Drone dengan sensor multispektral dapat mendeteksi stres tanaman, serangan hama, dan penyakit lebih awal. Revolusi teknologi untuk pertanian presisi.',
    content: 'Teknologi drone telah merevolusi cara petani memantau kesehatan tanaman. Dengan sensor multispektral dan thermal imaging, drone dapat mendeteksi masalah pada tanaman bahkan sebelum gejala terlihat secara kasat mata...',
    author: 'Ir. Andi Pratama',
    date: '5 Januari 2024',
    readTime: '9 menit',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=250&fit=crop'
  },
  {
    id: 6,
    title: 'Mikroorganisme Tanah: Kunci Kesuburan dan Kesehatan Lahan',
    category: 'Agroekologi',
    excerpt: 'Mikroorganisme tanah berperan vital dalam siklus nutrisi dan kesehatan tanaman. Pahami cara meningkatkan biodiversitas mikroba untuk produktivitas optimal.',
    content: 'Tanah yang sehat adalah fondasi pertanian berkelanjutan. Di dalam setiap gram tanah, terdapat miliaran mikroorganisme yang bekerja tanpa lelah untuk menjaga keseimbangan ekosistem tanah...',
    author: 'Prof. Indira Sari',
    date: '3 Januari 2024',
    readTime: '11 menit',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop'
  }
];

const categories = ['Semua', 'Stewardship', 'Agroekologi', 'Teknologi Pertanian'];

const BlogCard: React.FC<{
  blog: typeof blogsData[0];
  onReadMore: (blog: typeof blogsData[0]) => void;
}> = ({ blog, onReadMore }) => (
  <article className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <div className="h-48 bg-gray-200 overflow-hidden">
      <img 
        src={blog.image} 
        alt={blog.title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-1 rounded-full">
          {blog.category}
        </span>
        <span className="text-xs text-gray-500">{blog.readTime}</span>
      </div>
      <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2">{blog.title}</h3>
      <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">{blog.excerpt}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500">
          <span className="font-medium">{blog.author}</span>
          <span className="mx-1">•</span>
          <span>{blog.date}</span>
        </div>
        <button
          onClick={() => onReadMore(blog)}
          className="font-semibold text-green-600 hover:text-green-800 transition-colors text-sm"
        >
          Baca Selengkapnya →
        </button>
      </div>
    </div>
  </article>
);

const BlogModal: React.FC<{
  blog: typeof blogsData[0] | null;
  onClose: () => void;
}> = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-green-600 bg-green-100 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <span className="text-sm text-gray-500">{blog.readTime}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <span className="font-medium">{blog.author}</span>
            <span className="mx-2">•</span>
            <span>{blog.date}</span>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg mb-6">{blog.excerpt}</p>
            <p className="text-gray-700 leading-relaxed">{blog.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedBlog, setSelectedBlog] = useState<typeof blogsData[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = blogsData.filter(blog => {
    const matchesCategory = selectedCategory === 'Semua' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Blog Cropox</h1>
          <p className="text-xl text-center text-green-100 max-w-3xl mx-auto">
            Temukan artikel terbaru tentang teknologi pertanian, pengendalian hama terpadu, 
            dan praktik pertanian berkelanjutan untuk meningkatkan produktivitas lahan Anda.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Menampilkan {filteredBlogs.length} artikel
            {selectedCategory !== 'Semua' && ` dalam kategori "${selectedCategory}"`}
            {searchTerm && ` untuk pencarian "${searchTerm}"`}
          </p>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onReadMore={setSelectedBlog}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada artikel ditemukan</h3>
            <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian Anda.</p>
          </div>
        )}
      </div>

      {/* Blog Modal */}
      <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
    </div>
  );
};

export default BlogsPage;