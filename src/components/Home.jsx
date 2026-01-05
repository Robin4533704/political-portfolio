import React from "react";
import Certificates from "./Certificates";
import Essays from "./Essays";
import Projects from "./Projects";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="space-y-20 animate-fadeIn">
      {/* Hero Section / Profile Introduction */}
      <section className="text-center py-16 bg-white rounded-2xl shadow-sm border border-slate-100">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Robiul Hossen
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed italic">
          "Aspiring International Relations Scholar & Political Analyst, 
          dedicated to understanding global diplomacy and the evolving 
          geopolitics of the Eurasian region."
        </p>
        
        {/* Buttons Section */}
<div className="flex justify-center gap-6 my-8">
  <a href="#essays" className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition">
    View Research
  </a>
  <a href="/robiul CV Template.pdf" className="px-8 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition">
    Download CV
  </a>
</div>

{/* Essay Card Style */}
<div className="max-w-3xl mx-auto p-8 bg-white border border-gray-100 shadow-sm rounded-xl mb-6">
  <h3 className="text-2xl font-bold text-gray-800 mb-2">Strategic Diplomacy: Russia-Bangladesh...</h3>
  <p className="text-gray-600 italic mb-4">A critical analysis of bilateral ties...</p>
  <a href="/Strategic_Diplomacy_Russia_Bangladesh_Abstract.pdf" className="text-blue-600 font-bold hover:underline">Read Abstract (PDF) →</a>
</div>
      </section>

      {/* Main Content Sections */}
      <div className="space-y-24">
        {/* Research & Essays Section */}
        <section id="essays" className="scroll-mt-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl  font-bold text-slate-800">Academic Essays</h2>
            <div className="h-[2px] bg-slate-200 flex-grow"></div>
          </div>
          <Essays />
        </section>
      

        {/* Certifications Section */}
        <section id="certificates" className="scroll-mt-20 px-4 py-12 bg-slate-900 rounded-3xl text-white">
          
          <Certificates />
          <Footer/>
        </section>
      </div>
    </div>
  );
};


export default Home;