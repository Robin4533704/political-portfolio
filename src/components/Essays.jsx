import React from 'react';

const essays = [
  {
    title: "Strategic Diplomacy: Russia-Bangladesh Relations in the 21st Century",
    desc: "A critical analysis of bilateral ties, energy security, and geopolitical cooperation in the Eurasian context.",
    link: "/assets/essays/diplomacy-paper.pdf",
    tags: ["Geopolitics", "Diplomacy"]
  },
  {
    title: "Digital Governance and Public Policy Frameworks",
    desc: "Exploring how technology reshapes political participation, state administration, and democratic accountability.",
    link: "/assets/essays/digital-gov.pdf",
    tags: ["Public Policy", "Digital Tech"]
  }
];

const Essays = () => (
  <section id="essays" className="py-12 px-4 max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 whitespace-nowrap">
        Academic Essays & Research
      </h2>
      <div className="h-[2px] bg-blue-900 w-full rounded-full opacity-20"></div>
    </div>

    {/* Essays Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {essays.map((essay, index) => (
        <div 
          key={index} 
          className="group p-8 bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl border-t-4 border-t-blue-900"
        >
          {/* Tags */}
          <div className="flex gap-2 mb-4">
            {essay.tags.map((tag, i) => (
              <span key={i} className="text-[10px] uppercase tracking-widest bg-blue-50 text-blue-900 px-2 py-1 rounded font-bold">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-900 transition-colors">
            {essay.title}
          </h3>
          
          <p className="text-slate-600 mb-6 leading-relaxed italic border-l-2 border-slate-200 pl-4">
            "{essay.desc}"
          </p>

          <a 
            href={essay.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-900 font-bold hover:gap-3 transition-all underline decoration-2 underline-offset-4"
          >
            Read Abstract (PDF) 
            <span className="ml-2">→</span>
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Essays;