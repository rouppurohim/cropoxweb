import React, { useState } from 'react';
import { DiagnosisResult, ViewMode } from '../types';

interface ResultsDisplayProps {
  result: DiagnosisResult;
  onReset: () => void;
}

const ShareLink: React.FC<{
  href?: string;
  onClick?: () => void;
  label: string;
  children: React.ReactNode;
}> = ({ href, onClick, label, children }) => {
  const commonClasses = "flex items-center space-x-2 text-gray-600 hover:text-green-700 transition-colors duration-200 text-sm font-medium";
  const content = (
    <>
      {children}
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={commonClasses}>
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={commonClasses}>
      {content}
    </button>
  );
};


const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, onReset }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('default');
  const [isCopied, setIsCopied] = useState(false);
  const [isUrlCopied, setIsUrlCopied] = useState(false);

  const handleCopy = () => {
    const { diagnosis, phtNonChemical, pesticideRecommendation, seasonalPrediction, education } = result;

    const textToCopy = `
📋 *--- HASIL DIAGNOSA CROPOX ---* 📋
✅ *Identifikasi OPT:* ${diagnosis.name} (${diagnosis.confidence}% yakin)
📝 *Deskripsi:* ${diagnosis.description}
---
🌱 *PHT Non-Kimia:*
${phtNonChemical.methods.map(method => `- ${method}`).join('\n')}
---
🧪 *Rekomendasi Pestisida:*
- *Bahan Aktif:* ${pesticideRecommendation.activeIngredient}
- *MoA:* ${pesticideRecommendation.moa}
- *Rotasi:* ${pesticideRecommendation.rotationInfo}
⚠️ _${pesticideRecommendation.disclaimer}_
---
🌦️ *Prediksi Musiman:* Risiko ${seasonalPrediction.riskLevel}. ${seasonalPrediction.trend}
---
📚 *Edukasi:* ${education.summary}.
    `.trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      console.error('Gagal menyalin teks: ', err);
    });
  };

  const handleCopyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setIsUrlCopied(true);
      setTimeout(() => setIsUrlCopied(false), 2000);
    }).catch(err => {
      console.error('Gagal menyalin tautan: ', err);
    });
  };

  const shareText = `Hasil diagnosa Cropox untuk tanaman saya: ${result.diagnosis.name} (${result.diagnosis.confidence}% yakin). Dapatkan diagnosa dan rekomendasi PHT untuk tanaman Anda di Cropox!`;
  const shareUrl = window.location.href;
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(shareUrl);


  const renderContent = () => {
    const { diagnosis, phtNonChemical, pesticideRecommendation, seasonalPrediction, education } = result;

    if (viewMode === 'whatsapp') {
      return (
        <div className="relative space-y-4 text-gray-800 bg-green-50 p-6 rounded-lg font-mono text-sm leading-relaxed">
           <button
            onClick={handleCopy}
            className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-3 rounded-md text-xs transition-all flex items-center space-x-1 z-10"
          >
            {isCopied ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Salin</span>
              </>
            )}
          </button>
          
          <p>📋 *--- HASIL DIAGNOSA CROPOX ---* 📋</p>
          <p>✅ *Identifikasi OPT:* {diagnosis.name} ({diagnosis.confidence}% yakin)</p>
          <p>📝 *Deskripsi:* {diagnosis.description}</p>
          <p>---</p>
          <p>🌱 *PHT Non-Kimia:*</p>
          <ul className="list-none pl-4">
            {phtNonChemical.methods.map((method, i) => <li key={i}>- {method}</li>)}
          </ul>
          <p>---</p>
          <p>🧪 *Rekomendasi Pestisida:*</p>
          <p>- *Bahan Aktif:* {pesticideRecommendation.activeIngredient}</p>
          <p>- *MoA:* {pesticideRecommendation.moa}</p>
          <p>- *Rotasi:* {pesticideRecommendation.rotationInfo}</p>
          <p>⚠️ _{pesticideRecommendation.disclaimer}_</p>
          <p>---</p>
          <p>🌦️ *Prediksi Musiman:* Risiko {seasonalPrediction.riskLevel}. {seasonalPrediction.trend}</p>
          <p>---</p>
          <p>📚 *Edukasi:* {education.summary}.</p>
        </div>
      );
    }
    
    if (viewMode === 'poster') {
        return (
            <div className="bg-gradient-to-br from-green-600 to-teal-700 text-white p-8 rounded-xl shadow-2xl space-y-6">
                <div className="text-center border-b-2 border-white/50 pb-4">
                    <h3 className="text-3xl font-black tracking-wider">LAPORAN DIAGNOSA CROPOX</h3>
                </div>
                
                <div className="bg-white/20 p-4 rounded-lg">
                    <h4 className="font-bold text-lg">🔍 DIAGNOSA UTAMA</h4>
                    <p className="text-2xl font-bold">{diagnosis.name}</p>
                    <div className="w-full bg-white/30 rounded-full h-2.5 mt-2">
                        <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${diagnosis.confidence}%` }}></div>
                    </div>
                    <p className="text-right text-xs mt-1">{diagnosis.confidence}% Tingkat Keyakinan</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/20 p-4 rounded-lg">
                        <h4 className="font-bold text-lg">🌿 PHT Non-Kimia</h4>
                        <ul className="list-disc list-inside mt-2 text-sm">
                            {phtNonChemical.methods.slice(0, 3).map((method, i) => <li key={i}>{method}</li>)}
                        </ul>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg">
                        <h4 className="font-bold text-lg">🧪 Pestisida Legal</h4>
                        <p className="text-sm mt-2"><strong>Bahan Aktif:</strong> {pesticideRecommendation.activeIngredient} ({pesticideRecommendation.moa})</p>
                        <p className="text-sm mt-1"><strong>Rotasi:</strong> {pesticideRecommendation.rotationInfo}</p>
                    </div>
                </div>

                <div className="bg-white/20 p-4 rounded-lg text-center">
                    <h4 className="font-bold text-lg">☔ PREDIKSI MUSIMAN</h4>
                    <p className="text-xl capitalize font-semibold">{seasonalPrediction.riskLevel}</p>
                    <p className="text-sm">{seasonalPrediction.trend}</p>
                </div>
            </div>
        );
    }

    return (
      <div className="space-y-6">
        <ResultCard title={`✔️ Diagnosa: ${diagnosis.name}`} confidence={diagnosis.confidence}>
            <p>{diagnosis.description}</p>
        </ResultCard>
        <ResultCard title={phtNonChemical.title}>
            <ul className="list-disc list-inside space-y-1">
                {phtNonChemical.methods.map((method, i) => <li key={i}>{method}</li>)}
            </ul>
        </ResultCard>
        <ResultCard title={pesticideRecommendation.title}>
            <p><strong>Bahan Aktif:</strong> {pesticideRecommendation.activeIngredient}</p>
            <p><strong>MoA (Mode of Action):</strong> {pesticideRecommendation.moa}</p>
            <p><strong>Rotasi:</strong> {pesticideRecommendation.rotationInfo}</p>
            <p className="mt-3 text-sm text-amber-800 bg-amber-100 p-2 rounded-md"><em><strong>Catatan:</strong> {pesticideRecommendation.disclaimer}</em></p>
        </ResultCard>
        <ResultCard title={seasonalPrediction.title}>
            <p><strong>Tingkat Risiko:</strong> <span className={`font-bold capitalize px-2 py-1 rounded-full text-sm ${
                seasonalPrediction.riskLevel === 'tinggi' ? 'bg-red-100 text-red-800' :
                seasonalPrediction.riskLevel === 'sedang' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
            }`}>{seasonalPrediction.riskLevel}</span></p>
            <p className="mt-2">{seasonalPrediction.trend}</p>
        </ResultCard>
        <ResultCard title={education.title}>
            <p>{education.summary}</p>
            <a href="#" className="text-green-600 hover:underline font-semibold mt-2 inline-block">{education.linkText}</a>
        </ResultCard>
      </div>
    );
  };
  
  const TabButton = ({ mode, label, icon }: { mode: ViewMode; label: string; icon: React.ReactNode }) => (
     <button
        onClick={() => setViewMode(mode)}
        className={`flex items-center justify-center space-x-2 w-full sm:w-auto text-sm font-medium px-4 py-2 rounded-lg transition ${
          viewMode === mode
            ? 'bg-green-600 text-white shadow'
            : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
      >
        {icon}
        <span>{label}</span>
      </button>
  );

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-6 p-1.5 bg-gray-200 rounded-lg">
        <TabButton mode="default" label="Teknis" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>} />
        <TabButton mode="whatsapp" label="WhatsApp Ringkas" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>} />
        <TabButton mode="poster" label="Poster Infografis" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} />
      </div>

      {renderContent()}

      <div className="mt-10 pt-6 border-t border-gray-200 text-center">
        <h4 className="text-base font-semibold text-gray-800 mb-5">
          Share this link
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-4">
          <ShareLink onClick={handleCopyUrl} label={isUrlCopied ? 'Copied!' : 'Copy link'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </ShareLink>
          <ShareLink href={`mailto:?subject=Hasil Diagnosa Cropox&body=${encodedText}%0A%0A${encodedUrl}`} label="Email">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
          </ShareLink>
          <ShareLink href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`} label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
            </svg>
          </ShareLink>
          <ShareLink href={`https://api.whatsapp.com/send?text=${encodedText}%0A%0A${encodedUrl}`} label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16" style={{color: '#25D366'}}>
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </ShareLink>
          <ShareLink href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`} label="Telegram">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16" style={{color: '#0088cc'}}>
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.42 1.42 0 0 0-.161-.986.75.75 0 0 0-.755-.36c-1.135.234-2.31.65-4.22 1.39z"/>
            </svg>
          </ShareLink>
          <ShareLink href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16" style={{color: '#1877F2'}}>
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H11.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
          </ShareLink>
        </div>
      </div>

      <button
        onClick={onReset}
        className="mt-8 w-full bg-gray-700 text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition"
      >
        Mulai Diagnosa Baru
      </button>
    </div>
  );
};


const ResultCard: React.FC<{title: string; confidence?: number; children: React.ReactNode}> = ({ title, confidence, children }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                {confidence && (
                     <div className="relative">
                        <div className="text-green-600 font-bold text-lg">{confidence}%</div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-16 h-16">
                            <svg className="transform -rotate-90" viewBox="0 0 36 36">
                                <path className="text-gray-200" strokeWidth="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                                <path className="text-green-500" strokeWidth="3" fill="none" strokeDasharray={`${confidence}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                            </svg>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-4 text-gray-700 leading-relaxed">
                {children}
            </div>
        </div>
    )
}


export default ResultsDisplay;