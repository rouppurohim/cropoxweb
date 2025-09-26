import React, { useState } from 'react';
import { UserData } from '../types';

interface GateInputStepProps {
  onNext: (data: UserData) => void;
}

const GateInputStep: React.FC<GateInputStepProps> = ({ onNext }) => {
  const [formData, setFormData] = useState<UserData>({
    crop: '',
    stage: 'Vegetatif',
    location: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.crop || !formData.stage || !formData.location) {
      setError('Semua kolom wajib diisi.');
      return;
    }
    setError('');
    onNext(formData);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Identifikasi Cepat Gulma, Hama dan Penyakit Tanaman</h2>
      <p className="text-gray-600 mb-6">Silakan masukkan data awal untuk memulai diagnosa tanaman Anda.</p>
      
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="crop" className="block text-sm font-medium text-gray-700 mb-1">Tanaman</label>
          <input
            type="text"
            id="crop"
            name="crop"
            value={formData.crop}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition"
            placeholder="Contoh: Padi, Kedelai, Kentang"
          />
        </div>
        <div>
          <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-1">Fase Pertumbuhan</label>
          <select
            id="stage"
            name="stage"
            value={formData.stage}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition bg-white"
          >
            <option>Persemaian</option>
            <option>Vegetatif</option>
            <option>Generatif</option>
            <option>Panen</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Lokasi (Kabupaten/Kota)</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition"
            placeholder="Contoh: Indramayu"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition transform hover:scale-105"
        >
          Mulai Diagnosa
        </button>
      </form>
    </div>
  );
};

export default GateInputStep;