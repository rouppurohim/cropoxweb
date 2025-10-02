import React from 'react';

const DisclaimerPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Penyangkalan Umum</h2>
            <p>
              Informasi yang disediakan oleh Cropox ("kami", "kita", atau "milik kita") di aplikasi ini 
              hanya untuk tujuan informasi umum. Semua informasi di aplikasi disediakan dengan itikad baik, 
              namun kami tidak membuat pernyataan atau jaminan apa pun, tersurat maupun tersirat, 
              mengenai keakuratan, kecukupan, validitas, keandalan, ketersediaan, atau kelengkapan 
              informasi apa pun di aplikasi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Penggunaan Informasi Pertanian</h2>
            <p>
              Rekomendasi diagnosis hama dan penyakit tanaman, serta saran penggunaan pestisida yang 
              diberikan oleh aplikasi ini bersifat umum dan tidak menggantikan konsultasi dengan 
              ahli pertanian profesional. Setiap keputusan yang Anda buat berdasarkan informasi 
              yang ditemukan di aplikasi ini sepenuhnya merupakan risiko Anda sendiri.
            </p>
            <p>
              Kami sangat menyarankan untuk selalu berkonsultasi dengan penyuluh pertanian setempat, 
              agronomis bersertifikat, atau ahli perlindungan tanaman sebelum menerapkan rekomendasi 
              apa pun yang diberikan oleh aplikasi ini.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Penggunaan Pestisida</h2>
            <p>
              Rekomendasi pestisida yang diberikan harus selalu disesuaikan dengan kondisi lokal 
              dan peraturan yang berlaku di wilayah Anda. Selalu baca dan ikuti label produk pestisida 
              dengan cermat. Penggunaan pestisida yang tidak tepat dapat membahayakan kesehatan manusia, 
              hewan, dan lingkungan.
            </p>
            <p>
              Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari penggunaan 
              pestisida berdasarkan rekomendasi aplikasi ini.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Keterbatasan Teknologi</h2>
            <p>
              Aplikasi ini menggunakan teknologi kecerdasan buatan untuk memberikan diagnosis dan 
              rekomendasi. Meskipun kami berusaha memberikan informasi yang akurat, teknologi AI 
              memiliki keterbatasan dan dapat menghasilkan kesalahan diagnosis atau rekomendasi 
              yang tidak tepat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pembatasan Tanggung Jawab</h2>
            <p>
              Dalam keadaan apa pun, kami tidak akan bertanggung jawab atas kerugian atau kerusakan 
              khusus, insidental, tidak langsung, konsekuensial, atau punitif apa pun, termasuk 
              namun tidak terbatas pada kehilangan keuntungan, data, penggunaan, goodwill, atau 
              kerugian tidak berwujud lainnya, yang diakibatkan oleh:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Penggunaan atau ketidakmampuan menggunakan aplikasi</li>
              <li>Akses tidak sah atau perubahan transmisi atau data Anda</li>
              <li>Pernyataan atau perilaku pihak ketiga mana pun di aplikasi</li>
              <li>Masalah lain apa pun yang berkaitan dengan aplikasi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Perubahan Disclaimer</h2>
            <p>
              Kami berhak untuk mengubah atau mengganti disclaimer ini kapan saja tanpa pemberitahuan 
              sebelumnya. Penggunaan berkelanjutan aplikasi ini setelah perubahan tersebut akan 
              dianggap sebagai penerimaan Anda terhadap disclaimer yang telah direvisi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontak</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang disclaimer ini, silakan hubungi kami melalui 
              halaman Contact Us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPage;