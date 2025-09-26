import React, { useState } from 'react';
import { UserData, DiagnosisResult } from '../types';
import { fetchDiagnosis } from '../services/geminiService';

interface DiagnosisStepProps {
  userData: UserData;
  onComplete: (result: DiagnosisResult) => void;
  onLoading: () => void;
  onError: (error: string) => void;
}

const DiagnosisStep: React.FC<DiagnosisStepProps> = ({ userData, onComplete, onLoading, onError }) => {
  const [images, setImages] = useState<(string | null)[]>([null, null, null]);
  const [imageFiles, setImageFiles] = useState<(File | null)[]>([null, null, null]);
  const [description, setDescription] = useState('');

  const handleImageChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result as string;
        setImages(newImages);
        const newImageFiles = [...imageFiles];
        newImageFiles[index] = file;
        setImageFiles(newImageFiles);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const uploadedImages = images.filter(img => img !== null) as string[];
    if (uploadedImages.length === 0) {
      onError('Mohon unggah minimal satu foto tanaman.');
      return;
    }
    if (!description) {
        onError('Mohon berikan deskripsi singkat mengenai gejala tanaman.');
        return;
    }
    
    onLoading();
    onError('');

    try {
      const base64Images = uploadedImages.map(img => img.split(',')[1]);
      const mimeTypes = imageFiles.filter(f => f !== null).map(f => f!.type);
      const result = await fetchDiagnosis(userData, description, base64Images, mimeTypes);
      onComplete(result);
    } catch (err) {
      console.error(err);
      onError('Gagal mendapatkan diagnosa dari AI. Silakan coba lagi.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Langkah 2: Diagnosa OPT</h2>
      <p className="text-gray-600 mb-6">Unggah foto tanaman dari 3 sudut berbeda dan jelaskan gejalanya.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[0, 1, 2].map(index => (
          <div key={index} className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center flex flex-col items-center justify-center h-48 relative">
            {images[index] ? (
              <img src={images[index]!} alt={`Preview ${index + 1}`} className="w-full h-full object-cover rounded-md" />
            ) : (
              <div className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <p className="text-sm mt-2">Foto Sudut {index + 1}</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(index, e)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Jelaskan Gejala Tanaman</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition"
          placeholder="Contoh: Ada bercak kuning pada daun, batang terlihat layu..."
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition transform hover:scale-105"
      >
        Dapatkan Diagnosa
      </button>
    </div>
  );
};

export default DiagnosisStep;