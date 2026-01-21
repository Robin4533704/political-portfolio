import React from 'react';
import { BookOpen, ArrowRight, Bookmark, ScrollText } from 'lucide-react';

const essays = [
  {
    title: "Strategic Diplomacy: Russia-Bangladesh Relations in the 21st Century",
    desc: "A critical analysis of bilateral ties, energy security, and geopolitical cooperation in the Eurasian context.",
    link: "/Strategic_Diplomacy_Russia_Bangladesh_Abstract.pdf",
    tags: ["Geopolitics", "Diplomacy"],
    date: "2025"
  },
  {
    title: "Digital Governance and Public Policy Frameworks",
    desc: "Exploring how technology reshapes political participation, state administration, and democratic accountability.",
    link: "/Digital Governance and Public Policy Frameworks.pdf",
    tags: ["Public Policy", "Digital Tech"],
    date: "2024"
  }
];

const Essays = () => (
  <section id="essays" className="py-24 px-6 bg-[#0a0a0a] text-white">
    <div className="max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-blue-500" size={20} />
            <span className="text-blue-500 font-mono text-xs tracking-widest uppercase font-bold">Publications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Academic Essays & Research
          </h2>
        </div>
        <div className="h-1 md:w-1/3 w-full bg-gradient-to-r from-blue-600 to-transparent rounded-full opacity-50"></div>
      </div>

      {/* Essays Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {essays.map((essay, index) => (
          <div 
            key={index} 
            className="group relative p-1 bg-gradient-to-b from-gray-800 to-transparent rounded-[2rem] transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="bg-[#0f0f0f] p-8 md:p-10 rounded-[1.9rem] h-full flex flex-col justify-between">
              
              <div>
                {/* Meta Info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-2">
                    {essay.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-tighter bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600 font-mono text-xs font-bold">{essay.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                  {essay.title}
                </h3>
                
                {/* Description */}
                <div className="relative mb-8">
                  <ScrollText className="absolute -left-2 -top-2 text-gray-800 opacity-50" size={40} />
                  <p className="text-gray-400 leading-relaxed italic relative z-10 pl-6 border-l border-gray-800">
                    "{essay.desc}"
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <a 
                href={essay.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 font-extrabold hover:text-blue-300 transition-all group/link"
              >
                <span className="text-sm tracking-widest uppercase">Read Full Abstract</span>
                <div className="p-2 bg-blue-500/10 rounded-full group-hover/link:bg-blue-500 group-hover/link:text-white transition-all">
                  <ArrowRight size={18} />
                </div>
              </a>
            </div>

            {/* Background Decorative Element */}
            <Bookmark className="absolute top-10 right-10 text-blue-500/5 group-hover:text-blue-500/10 transition-colors" size={80} />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 p-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent rounded-full">
        <div className="bg-[#0a0a0a] py-4 text-center text-gray-500 text-sm font-medium tracking-wide">
          Available for academic collaboration and research discussions.
        </div>
      </div>
    </div>
  </section>
);

export default Essays;