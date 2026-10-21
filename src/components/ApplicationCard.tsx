import React from 'react';
import { Vacancy } from '../types';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ApplicationCardProps {
  selectedVacancy: Vacancy | null;
  rulesAgreed: boolean;
  onSelectVacancyClick: () => void;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({
  selectedVacancy,
  rulesAgreed,
  onSelectVacancyClick,
}) => {
  const googleFormUrl = "https://forms.gle/xSAQbktYUobc4ZSw6";

  const handleRegisterClick = () => {
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="application" className="py-20 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden"
        >
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/10 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/40">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    অফিসিয়াল পোর্টাল
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-0.5">
                    সাব-এডমিন অ্যাকাউন্ট প্রোভাইড করা হবে
                  </h3>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>আবেদন চলছে</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 backdrop-blur-sm">
              <div className="text-xs font-bold text-blue-300 uppercase tracking-wide">
                অফিসিয়াল ঘোষণা
              </div>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                ইউনিটি আর্নিং লার্নিং প্ল্যাটফর্ম সাব-এডমিন রেজিস্ট্রেশন। সাব-এডমিন অ্যাকাউন্ট প্রোভাইড করা হবে। নিয়মাবলী অনুসরণ করে আবেদন সম্পন্ন করুন।
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10">
              <div className="text-sm sm:text-base text-slate-300 font-semibold text-center sm:text-left">
                নিচের বাটনে ক্লিক করে সরাসরি গুগল ফর্ম পূরণ করুন।
              </div>

              <button
                onClick={handleRegisterClick}
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold rounded-2xl shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-3 cursor-pointer shrink-0 text-base"
              >
                <span>Sub-Admin Registration</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
