import React from 'react';
import { MousePointerClick, BookOpen, CheckSquare, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const HowToApply: React.FC = () => {
  const steps = [
    {
      number: '০১',
      title: 'পদ নির্বাচন',
      description: 'ট্রেইনার বা টিম ট্রেইনার পদটি নির্বাচন করুন।',
      icon: MousePointerClick,
    },
    {
      number: '০২',
      title: 'নিয়মাবলী পড়ুন',
      description: 'নিচে প্রদর্শিত সমস্ত শর্তাবলী মনোযোগ সহকারে পড়ুন।',
      icon: BookOpen,
    },
    {
      number: '০৩',
      title: 'সম্মতি দিন',
      description: 'চেক বক্সে টিক মার্ক দিয়ে সম্মতি প্রদান করুন।',
      icon: CheckSquare,
    },
    {
      number: '০৪',
      title: 'ফর্ম পূরণ',
      description: 'Sub-Admin Registration বাটনে ক্লিক করে ফর্ম পূরণ করুন।',
      icon: ExternalLink,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full shadow-xs">
            আবেদনের নির্দেশিকা
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            কীভাবে আবেদন করবেন
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-200/80 relative space-y-6 hover:border-blue-300 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-300 font-mono">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
