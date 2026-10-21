import React from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ImportantInfo: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-50/70 border border-blue-200/80 rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm"
        >
          
          <div className="flex items-center gap-4 border-b border-blue-200/60 pb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                জরুরি তথ্য
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mt-0.5">
                সাব-এডমিন অ্যাকাউন্ট প্রোভাইড করা হবে
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-blue-950 font-bold">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>নিয়মাবলী অনুসরণ</span>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                সমস্ত নিয়মাবলী ও শর্ত মেনে সাব-এডমিন পদের জন্য আবেদন করুন।
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-blue-950 font-bold">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>অফিসিয়াল ফর্ম</span>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Sub-Admin Registration বাটনের মাধ্যমে সরাসরি গুগল ফর্ম পূরণ করুন।
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
