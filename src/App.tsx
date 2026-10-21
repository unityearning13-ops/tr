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
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header 
        onNavigate={handleNavigate}
        onApplyClick={handleOpenApplication}
      />

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

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onApplyClick={handleOpenApplication}
      />
    </div>
  );
}
