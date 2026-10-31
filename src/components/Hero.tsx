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

          {/* YouTube Video Embed with Instruction */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 sm:mt-12 max-w-3xl mx-auto w-full group"
          >
            <div className="mb-6 space-y-2">
              <div className="flex items-center justify-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
                <span className="w-8 h-[2px] bg-blue-600 rounded-full hidden sm:block"></span>
                <span>নির্দেশনামূলক ভিডিও</span>
                <span className="w-8 h-[2px] bg-blue-600 rounded-full hidden sm:block"></span>
              </div>
              <p className="text-slate-800 font-extrabold text-sm sm:text-lg">
                রেজিস্ট্রেশন করার আগে সম্পূর্ণ ভিডিওটি অবশ্যই মনোযোগ সহকারে দেখে নিন
              </p>
            </div>
            
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl shadow-blue-900/15 group-hover:shadow-blue-900/25 transition-all duration-500 transform group-hover:scale-[1.01]">
              <iframe
                src="https://www.youtube.com/embed/eXVo50dtI9c"
                title="Unity Earning Platform Sub-Admin Registration Guide"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

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
