import React from 'react';
import { GraduationCap, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onApplyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onApplyClick }) => {
  const officialWebsite = "https://www.unityearning.com/";

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight block leading-tight text-white">
                  Unity Earning
                </span>
                <span className="text-[10px] font-semibold text-blue-400 tracking-wider uppercase">
                  E-Learning Platform
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              ইউনিটি আর্নিং লার্নিং প্ল্যাটফর্ম সাব-এডমিন রেজিস্ট্রেশন। সাব-এডমিন অ্যাকাউন্ট প্রোভাইড করা হবে।
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors cursor-pointer">
                  হোম
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vacancies')} className="hover:text-white transition-colors cursor-pointer">
                  খালি পদসমূহ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rules')} className="hover:text-white transition-colors cursor-pointer">
                  নিয়মাবলী
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              অফিসিয়াল লিংক
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li>
                <a 
                  href={officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>UnityEarning.com</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Unity Earning E-Learning Platform. সর্বস্বত্ব সংরক্ষিত।</p>
        </div>

      </div>
    </footer>
  );
};
