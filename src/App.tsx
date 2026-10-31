/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VacancySelector } from './components/VacancySelector';
import { Footer } from './components/Footer';

export default function App() {
  const [rulesAgreed, setRulesAgreed] = useState<boolean>(false);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenApplication = () => {
    window.open("https://forms.gle/xSAQbktYUobc4ZSw6", '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white relative">
      {/* Header */}
      <Header 
        onNavigate={handleNavigate}
        onApplyClick={handleOpenApplication}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onExploreClick={() => handleNavigate('vacancies')}
          onRulesClick={() => handleNavigate('rules')}
          onApplyClick={handleOpenApplication}
        />

        {/* Trainer & Team Trainer Conditions */}
        <VacancySelector 
          rulesAgreed={rulesAgreed}
          onToggleRulesAgreed={setRulesAgreed}
        />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onApplyClick={handleOpenApplication}
      />

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button
          onClick={handleOpenApplication}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 active:scale-95 transition-all"
        >
          <span className="sr-only">Apply Now</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );
}
