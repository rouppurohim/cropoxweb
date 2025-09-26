import React from 'react';

const LoadingSpinner: React.FC = () => {
  const messages = [
    "Menganalisis gambar dengan CropoxGPT...",
    "Membandingkan dengan database OPT...",
    "Menyusun rekomendasi PHT...",
    "Memverifikasi pestisida legal...",
    "Hampir selesai!",
  ];

  const [message, setMessage] = React.useState(messages[0]);

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setMessage(messages[index]);
    }, 2500);

    return () => clearInterval(interval);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200 animate-fade-in">
      <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
      <h2 className="text-xl font-semibold text-gray-700 mt-6">Mohon Tunggu</h2>
      <p className="text-gray-500 mt-2">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
