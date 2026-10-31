import React, { useState } from 'react';
import { GraduationCap, Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onApplyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        
        {/* Brand */}
        <div 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center gap-2.5 cursor-pointer shrink-0 group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-base font-bold tracking-tight text-slate-900 block leading-tight">
              Unity Earning
            </span>
            <span className="text-[10px] font-semibold text-blue-600 tracking-wider uppercase">
              E-Learning Platform
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <button 
            onClick={() => handleNavClick('hero')}
            className="hover:text-blue-600 transition-colors py-1 cursor-pointer"
          >
            হোম
          </button>
          <button 
            onClick={() => handleNavClick('vacancies')}
            className="hover:text-blue-600 transition-colors py-1 cursor-pointer"
          >
            খালি পদসমূহ
          </button>
          <button 
            onClick={() => handleNavClick('rules')}
            className="hover:text-blue-600 transition-colors py-1 cursor-pointer"
          >
            নিয়মাবলী
          </button>
        </nav>

        {/* Right Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onApplyClick}
            className="px-5 py-2 text-xs sm:text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md shadow-blue-600/20 flex items-center gap-2 cursor-pointer"
          >
            <span>Sub-Admin Registration</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="মেনু খুলুন"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl px-6 py-5 space-y-3"
        >
          <button
            onClick={() => handleNavClick('hero')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
          >
            হোম
          </button>
          <button
            onClick={() => handleNavClick('vacancies')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
          >
            খালি পদসমূহ
          </button>
          <button
            onClick={() => handleNavClick('rules')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
          >
            নিয়মাবলী
          </button>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
              className="w-full py-2.5 text-xs font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md flex items-center justify-center gap-2"
            >
              <span>Sub-Admin Registration</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
