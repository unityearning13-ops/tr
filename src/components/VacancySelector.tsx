import React from 'react';
import { vacancies } from '../data/vacancies';
import { Sparkles, CheckCircle2, ShieldCheck, Clock, Award, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface VacancySelectorProps {
  rulesAgreed: boolean;
  onToggleRulesAgreed: (agreed: boolean) => void;
}

export const VacancySelector: React.FC<VacancySelectorProps> = ({
  rulesAgreed,
  onToggleRulesAgreed,
}) => {
  const trainerVacancy = vacancies.find(v => v.id === 'team-trainer') || vacancies[0];

  // Helper to assign a fitting professional icon & accent tone based on rule type / index
  const getRuleBadge = (id: number) => {
    if (id >= 1 && id <= 4) {
      return { icon: Clock, label: 'দৈনন্দিন মিটিং', bg: 'bg-blue-50 text-blue-700 border-blue-200' };
    } else if (id >= 5 && id <= 10) {
      return { icon: Award, label: 'পারফরম্যান্স', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
    } else {
      return { icon: ShieldCheck, label: 'শর্তাবলী ও নীতিমালা', bg: 'bg-amber-50 text-amber-700 border-amber-200' };
    }
  };

  return (
    <section id="vacancies" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}


        {/* Rules Card Container */}
        <div id="rules">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-14 shadow-2xl shadow-blue-900/5 border border-slate-100 space-y-10"
          >
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-50 pb-8">
              <div className="space-y-1.5">
                <div className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.25em]">
                  Transparency First
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tighter font-bengali">
                  নিয়োগ নির্দেশিকা ও নীতিমালা
                </h3>
              </div>
            </div>

            {/* Notification Box */}
            <div className="bg-blue-50/40 border border-blue-100/60 p-6 rounded-[2rem] flex items-start sm:items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 shrink-0 border border-blue-50">
                <AlertCircle className="w-6 h-6" />
              </div>
              <p className="text-sm sm:text-base font-bold text-slate-700 leading-snug font-bengali">
                নিয়োগ প্রক্রিয়ার স্বচ্ছতা নিশ্চিত করতে প্রতিটি শর্ত মনোযোগ সহকারে পড়ুন। আপনার কাজের গুণমানই আপনার সাফল্য নিশ্চিত করবে।
              </p>
            </div>

            {/* Individual Condition Boxes */}
            <div className="grid grid-cols-1 gap-5">
              {trainerVacancy.sections?.daily?.items.map((item, idx) => {
                const badge = getRuleBadge(item.id);
                const Icon = badge.icon;
                return (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="p-6 sm:p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_15px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(37,99,235,0.12)] hover:border-blue-200 hover:-translate-y-2 transition-all duration-700 group relative overflow-hidden flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                  >
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/30 transition-colors duration-700" />
                    
                    {/* Left: Indicator */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 rounded-3xl bg-slate-50 text-slate-400 flex items-center justify-center font-black text-2xl group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-blue-600/40 transition-all duration-700 relative border border-slate-100 group-hover:border-blue-600">
                        {item.id}
                      </div>
                    </div>

                    {/* Middle: Content */}
                    <div className="flex-grow space-y-3 relative z-10">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] border shadow-xs transition-colors duration-500 ${badge.bg}`}>
                          <Icon className="w-4 h-4" />
                          <span>{badge.label}</span>
                        </span>
                      </div>
                      <p className="text-[18px] sm:text-[22px] font-black text-slate-800 leading-[1.4] group-hover:text-slate-950 transition-colors duration-700 font-bengali tracking-tight">
                        {item.textBn}
                      </p>
                    </div>

                    {/* Right: Status Icon */}
                    <div className="hidden lg:flex shrink-0 opacity-0 group-hover:opacity-100 translate-x-8 group-hover:translate-x-0 transition-all duration-700 pr-2">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-700">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Checkbox Agreement Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-12 rounded-[3.5rem] bg-gradient-to-br from-blue-600 to-blue-900 text-white shadow-[0_20px_80px_rgba(37,99,235,0.3)] overflow-hidden relative group/agreement"
            >
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-[100px] group-hover/agreement:bg-white/20 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-blue-400/20 rounded-full blur-[80px]"></div>
              
              <label className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 cursor-pointer relative z-10 group/check">
                <div className="relative flex items-center justify-center shrink-0">
                  <input
                    type="checkbox"
                    checked={rulesAgreed}
                    onChange={(e) => onToggleRulesAgreed(e.target.checked)}
                    className="peer sr-only"
                  />
                  <div className="w-14 h-14 rounded-3xl border-2 border-white/40 bg-white/10 peer-checked:bg-white peer-checked:border-white transition-all duration-500 flex items-center justify-center shadow-2xl group-hover/check:scale-110 group-hover/check:rotate-3 border-dashed peer-checked:border-solid">
                    <CheckCircle2 className="w-9 h-9 text-blue-700 opacity-0 peer-checked:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <span className="text-xl sm:text-2xl font-black select-none leading-tight tracking-tight block font-bengali">
                    আমি সমস্ত নিয়ম ও শর্তাবলী পড়েছি এবং বুঝে সম্মতি প্রদান করছি
                  </span>
                  <span className="text-blue-200 text-sm font-bold uppercase tracking-[0.2em]">Mandatory Agreement</span>
                </div>
              </label>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
