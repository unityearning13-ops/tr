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
    <section id="vacancies" className="py-14 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-y border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold shadow-2xs mx-auto">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>অফিসিয়াল রিক্রুটমেন্ট গাইডলাইন</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            টিম ট্রেইনার সকল শর্তাবলী ও কার্যক্রম
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            সাব-এডমিন অ্যাকাউন্ট প্রোভাইড করা হবে। নিচে টিম ট্রেইনার পদের সমস্ত শর্তাবলী বক্স আকারে সাজানো হলো।
          </p>
        </motion.div>

        {/* Rules Card Container */}
        <div id="rules">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-200/90 space-y-8"
          >
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                  টিম ট্রেইনার সকল শর্তাবলী ও কার্যক্রম
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold self-start sm:self-auto shadow-2xs">
                <span>মোট ১৪টি শর্ত ও নির্দেশিকা</span>
              </div>
            </div>

            {/* Individual Professional Boxes for each Condition */}
            <div className="space-y-4">
              <div className="bg-blue-50/80 border border-blue-200/80 p-4 sm:p-5 rounded-2xl shadow-2xs flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="text-xs sm:text-sm font-bold text-blue-950">
                  নিচের প্রতিটি শর্ত পৃথক বক্সে প্রদান করা হলো। মনোযোগ সহকারে পড়ুন।
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                {trainerVacancy.sections?.daily?.items.map((item, idx) => {
                  const badge = getRuleBadge(item.id);
                  const Icon = badge.icon;
                  return (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.35, delay: idx * 0.02 }}
                      className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-50 via-white to-slate-50/50 border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all group relative overflow-hidden space-y-3"
                    >
                      {/* Top row of card box */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <span className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 font-mono shadow-sm">
                            {item.id}
                          </span>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            শর্ত নং {item.id}
                          </span>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${badge.bg}`}>
                          <Icon className="w-3.5 h-3.5" />
                          <span>{badge.label}</span>
                        </span>
                      </div>

                      {/* Rule Text in Bengali */}
                      <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed pl-10 sm:pl-11">
                        {item.textBn}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Checkbox Agreement Box */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 sm:p-6 rounded-2xl bg-blue-50/85 border border-blue-200 shadow-2xs"
            >
              <label className="flex items-start gap-3.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rulesAgreed}
                  onChange={(e) => onToggleRulesAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-sm sm:text-base font-bold text-slate-900 select-none leading-relaxed">
                  আমি সমস্ত নিয়ম ও শর্তাবলী পড়েছি এবং বুঝে সম্মতি প্রদান করছি। <span className="text-red-500">*</span>
                </span>
              </label>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
