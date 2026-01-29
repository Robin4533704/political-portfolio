import React from 'react';
import { FileText, Download, Quote, GraduationCap } from 'lucide-react';

const MotivationLetter = () => {
  const pdfPath = "/Frame 1 (4).pdf";

  return (
    <section
      id="motivation"
      className="py-16 sm:py-10 px-2 sm:px-3 bg-[#050505] text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-5">
            <GraduationCap size={16} className="text-blue-400" />
            <span className="text-blue-400 font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold">
              Statement of Purpose
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-5 tracking-tight">
            My <span className="text-blue-500">Motivation</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium">
            Understanding my drive for International Relations and my commitment to global development.
          </p>
        </div>

        {/* Card */}
        <div className="relative group">
          {/* Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-[2.2rem] blur-2xl opacity-40 group-hover:opacity-80 transition duration-1000"></div>

          <div className="relative bg-[#0f0f0f] border border-gray-800 rounded-[2.2rem] p-6 sm:p-10 md:p-16 shadow-2xl">

            {/* Quote Icon (desktop only) */}
            <div className="hidden md:block absolute top-10 left-10 text-blue-500/10 group-hover:text-blue-500/20 transition-colors">
              <Quote size={110} strokeWidth={3} />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-blue-500/10 rounded-3xl border border-blue-500/20 shadow-inner">
                <FileText size={36} className="text-blue-500 sm:hidden" />
                <FileText size={48} className="text-blue-500 hidden sm:block" />
              </div>

              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-gray-100 italic font-serif leading-snug">
                "Bridging Global Diplomacy with Local Grassroots Experience."
              </h3>

              <div className="max-w-3xl space-y-5 sm:space-y-6 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed text-justify md:text-center mb-10 sm:mb-12">
                <p>
                  As a professional currently working at{" "}
                  <span className="text-blue-400 font-bold">
                    Laksam Nobarun Business NGO
                  </span>
                  , my goal is to transition my practical experience into high-level
                  global policy and international cooperation. I believe Russia offers
                  the perfect academic environment to study{" "}
                  <strong>International Relations</strong>.
                </p>

                <p className="hidden md:block">
                  Through this letter, I outline my vision for integrating technology,
                  digital marketing, and global economics into the evolving landscape
                  of 21st-century diplomacy.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center">
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full sm:w-auto items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] active:scale-95 group/btn"
                >
                  <Download size={18} className="group-hover/btn:animate-bounce" />
                  <span className="text-sm sm:text-base">
                    Download Full Statement (PDF)
                  </span>
                </a>

                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full sm:w-auto items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-transparent border border-gray-700 hover:border-blue-500 hover:bg-blue-500/5 text-gray-300 hover:text-white rounded-2xl font-bold transition-all duration-300"
                >
                  <FileText size={18} />
                  <span className="text-sm sm:text-base">Read Online</span>
                </a>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1/2 md:w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-30"></div>
          </div>
        </div>

        {/* Note */}
        <p className="mt-8 sm:mt-10 text-center text-gray-600 text-xs sm:text-sm font-medium">
          Note: This document provides detailed insights into my academic background and career goals.
        </p>
      </div>
    </section>
  );
};

export default MotivationLetter;
