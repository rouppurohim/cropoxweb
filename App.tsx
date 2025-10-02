import React, { useState } from 'react';
import { AppStep, UserData, DiagnosisResult, AppPage } from './types';
import GateInputStep from './components/GateInputStep';
import DiagnosisStep from './components/DiagnosisStep';
import ResultsDisplay from './components/ResultsDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import Footer from './components/Footer';
import EdukasiPage from './components/EdukasiPage';
import PrediksiPage from './components/PrediksiPage';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import DisclaimerPage from './components/DisclaimerPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import ContactUsPage from './components/ContactUsPage';
import BlogsPage from './components/BlogsPage';


function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [currentStep, setCurrentStep] = useState<AppStep>('input');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStartDiagnosis = (data: UserData) => {
    setUserData(data);
    setCurrentStep('diagnosis');
  };

  const handleReset = () => {
    setCurrentStep('input');
    setUserData(null);
    setDiagnosisResult(null);
    setError(null);
  };
  
  const handleNavigate = (page: AppPage) => {
    if (page === 'diagnosis') {
      handleReset();
    }
    setCurrentPage(page);
    setError(null);
  };

  const handleDiagnosisComplete = (result: DiagnosisResult) => {
    setDiagnosisResult(result);
    setCurrentStep('results');
  };

  const handleLoading = () => {
    setCurrentStep('loading');
  };
  
  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setCurrentStep('diagnosis'); // Return to diagnosis step on error
  };


  const renderDiagnosisFlow = () => {
    switch (currentStep) {
      case 'input':
        return <GateInputStep onNext={handleStartDiagnosis} />;
      case 'diagnosis':
        return (
          <DiagnosisStep 
            userData={userData!} 
            onComplete={handleDiagnosisComplete} 
            onLoading={handleLoading}
            onError={handleError}
          />
        );
      case 'loading':
        return <LoadingSpinner />;
      case 'results':
        return <ResultsDisplay result={diagnosisResult!} onReset={handleReset} />;
      default:
        return <GateInputStep onNext={handleStartDiagnosis} />;
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'diagnosis':
        return renderDiagnosisFlow();
      case 'edukasi':
        return <EdukasiPage />;
      case 'prediksi':
        return <PrediksiPage />;
      case 'about':
        return <AboutUsPage />;
      case 'disclaimer':
        return <DisclaimerPage />;
      case 'privacy-policy':
        return <PrivacyPolicyPage />;
      case 'contact-us':
        return <ContactUsPage />;
      case 'blogs':
        return <BlogsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onNavigate={handleNavigate} activePage={currentPage} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {error && currentPage === 'diagnosis' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6" role="alert">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          {renderPage()}
        </div>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;