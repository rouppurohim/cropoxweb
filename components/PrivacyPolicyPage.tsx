import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Kebijakan Privasi</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <p className="text-sm text-gray-600 mb-6">
              <strong>Terakhir diperbarui:</strong> {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            
            <p>
              Cropox ("kami", "kita", atau "milik kita") berkomitmen untuk melindungi privasi Anda. 
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan 
              melindungi informasi Anda ketika Anda menggunakan aplikasi Cropox.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Informasi yang Kami Kumpulkan</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mb-3">Informasi yang Anda Berikan</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Data tanaman (jenis tanaman, fase pertumbuhan)</li>
              <li>Lokasi geografis (untuk rekomendasi yang lebih akurat)</li>
              <li>Foto tanaman yang Anda unggah untuk diagnosis</li>
              <li>Informasi kontak jika Anda menghubungi kami</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3 mt-6">Informasi yang Dikumpulkan Secara Otomatis</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Data penggunaan aplikasi (fitur yang digunakan, waktu penggunaan)</li>
              <li>Informasi perangkat (jenis perangkat, sistem operasi, browser)</li>
              <li>Alamat IP dan data lokasi umum</li>
              <li>Cookie dan teknologi pelacakan serupa</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Bagaimana Kami Menggunakan Informasi Anda</h2>
            <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Memberikan diagnosis hama dan penyakit tanaman</li>
              <li>Menyediakan rekomendasi pestisida dan perlindungan tanaman</li>
              <li>Meningkatkan akurasi prediksi musiman</li>
              <li>Mengembangkan dan meningkatkan layanan kami</li>
              <li>Memberikan dukungan teknis</li>
              <li>Mengirim pembaruan dan informasi penting tentang layanan</li>
              <li>Melakukan analisis untuk meningkatkan pengalaman pengguna</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Berbagi Informasi</h2>
            <p>Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda kepada pihak ketiga, kecuali:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Dengan persetujuan eksplisit Anda</li>
              <li>Untuk mematuhi kewajiban hukum</li>
              <li>Untuk melindungi hak, properti, atau keamanan kami atau pengguna lain</li>
              <li>Dengan penyedia layanan tepercaya yang membantu mengoperasikan aplikasi kami</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Penyimpanan Data</h2>
            <p>
              Kami menyimpan informasi Anda selama diperlukan untuk memberikan layanan dan 
              memenuhi tujuan yang dijelaskan dalam kebijakan ini. Data akan dihapus ketika 
              tidak lagi diperlukan, kecuali jika diwajibkan oleh hukum untuk menyimpannya lebih lama.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Keamanan Data</h2>
            <p>
              Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi 
              pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Namun, 
              tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang 
              100% aman.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hak Anda</h2>
            <p>Anda memiliki hak untuk:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
              <li>Meminta koreksi data yang tidak akurat</li>
              <li>Meminta penghapusan data pribadi Anda</li>
              <li>Membatasi pemrosesan data pribadi Anda</li>
              <li>Memindahkan data Anda ke layanan lain</li>
              <li>Menolak pemrosesan data pribadi untuk tujuan tertentu</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookie dan Teknologi Pelacakan</h2>
            <p>
              Kami menggunakan cookie dan teknologi serupa untuk meningkatkan pengalaman Anda, 
              menganalisis penggunaan aplikasi, dan menyediakan konten yang dipersonalisasi. 
              Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Layanan Pihak Ketiga</h2>
            <p>
              Aplikasi kami dapat berisi tautan ke situs web atau layanan pihak ketiga. 
              Kami tidak bertanggung jawab atas praktik privasi atau konten situs web tersebut. 
              Kami mendorong Anda untuk membaca kebijakan privasi setiap situs web yang Anda kunjungi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Perubahan Kebijakan Privasi</h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan 
              memberi tahu Anda tentang perubahan dengan memposting kebijakan privasi baru 
              di halaman ini dan memperbarui tanggal "Terakhir diperbarui" di bagian atas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan 
              hak-hak Anda, silakan hubungi kami melalui halaman Contact Us atau email ke 
              privacy@cropox.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;