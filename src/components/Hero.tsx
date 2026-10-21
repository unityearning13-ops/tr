import React from 'react';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onExploreClick: () => void;
  onRulesClick: () => void;
  onApplyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onRulesClick, onApplyClick }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50/30 to-white py-12 sm:py-20 lg:py-24">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-5"
        >
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-2xs mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Unity Earning Official Portal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
            ইউনিটি আর্নিং লার্নিং প্ল্যাটফর্ম <span className="text-blue-600">সাব-এডমিন রেজিস্ট্রেশন</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onApplyClick}
              className="w-full sm:w-auto px-7.5 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Sub-Admin Registration</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onRulesClick}
              className="w-full sm:w-auto px-7.5 py-3.5 text-sm sm:text-base font-bold text-slate-700 bg-white border border-slate-300 rounded-2xl hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-slate-500" />
              <span>নিয়মাবলী পর্যালোচনা করুন</span>
            </button>
          </div>

        </motion.div>

        {/* Feature Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/70 max-w-md mx-auto"
        >
          <div className="space-y-0.5">
            <div className="text-lg sm:text-xl font-extrabold text-slate-950 font-mono">১০০%</div>
            <div className="text-[11px] text-slate-500 font-semibold">অফিসিয়াল</div>
          </div>
          <div className="space-y-0.5 border-x border-slate-200 px-3">
            <div className="text-lg sm:text-xl font-extrabold text-slate-950 font-mono">নিরাপদ</div>
            <div className="text-[11px] text-slate-500 font-semibold">ভেরিফাইড</div>
          </div>
          <div className="space-y-0.5">
            <div className="text-lg sm:text-xl font-extrabold text-slate-950 font-mono">২৪/৭</div>
            <div className="text-[11px] text-slate-500 font-semibold">সাপোর্ট</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
