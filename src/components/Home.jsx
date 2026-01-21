import React from "react";
import Certificates from "./Certificates";
import Essays from "./Essays";
import Projects from "./Projects";
import Footer from "./Footer";
import MotivationLetter from "./MotivationLetter";
import { FileDown, Sparkles, ChevronRight, GraduationCap } from "lucide-react";

const Home = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-bounce-slow">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-blue-400 font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Available for Collaboration</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 leading-none">
            Robiul Hossen
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            "Aspiring <span className="text-white">International Relations Scholar</span> & Political Analyst, 
            dedicated to understanding global diplomacy and the evolving 
            geopolitics of the <span className="text-blue-500">Eurasian region</span>."
          </p>
          
          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-20">
            <a 
              href="#essays" 
              className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center gap-2"
            >
              Explore Research
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/robiul CV Template.pdf" 
              target="_blank"
              className="px-8 py-4 border border-gray-800 text-gray-300 font-bold rounded-2xl hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <FileDown size={18} />
              Download CV
            </a>
          </div>

          {/* Featured Essay Preview (Clean Glassmorphism Style) */}
          <div className="max-w-2xl mx-auto p-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-3xl">
            <div className="bg-[#0f0f0f]/50 backdrop-blur-xl p-6 md:p-8 rounded-[23px] border border-white/5 hover:border-blue-500/30 transition-all">
              <div className="flex items-center gap-2 mb-3 text-blue-500 justify-center">
                <GraduationCap size={20} />
                <span className="text-[10px] uppercase tracking-widest font-bold">Featured Publication</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-3">Strategic Diplomacy: Russia-Bangladesh...</h3>
              <p className="text-gray-500 italic text-sm mb-5 leading-relaxed">"A critical analysis of bilateral ties, energy security, and cooperation..."</p>
              <a 
                href="/Strategic_Diplomacy_Russia_Bangladesh_Abstract.pdf" 
                className="text-blue-400 font-bold hover:text-blue-300 flex items-center justify-center gap-1 group text-sm"
              >
                Read Abstract 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Research Section */}
        <section id="essays" className="scroll-mt-32 mb-32">
          <Essays />
        </section>

        {/* Motivation Letter Section */}
        <section id="motivation" className="scroll-mt-32 mb-32">
          <MotivationLetter />
        </section>

        {/* Certificates & Projects */}
        <div className="space-y-32">
          <section id="projects" className="scroll-mt-32">
            <Projects />
          </section>

          <section id="certificates" className="scroll-mt-32 relative">
             {/* Decorative Background for Certificates */}
             <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] blur-3xl -z-10"></div>
             <Certificates />
          </section>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Home;