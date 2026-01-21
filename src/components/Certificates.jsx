import React from 'react';
import { Award, ExternalLink, FileText } from 'lucide-react'; // lucide-react ব্যবহার করলে আরও ক্লিন দেখায়

const Certificates = () => {
  const certificateList = [
    { 
      title: "International Relations", 
      path: "/international relation.pdf",
      category: "Academic"
    },
    { 
      title: "Global Economics", 
      path: "/Global Political Intelligence in AI.pdf",
      category: "Intelligence & AI"
    },
    { 
      title: "Web Development", 
      path: "/programing hero certificate.pdf",
      category: "Tech & Dev"
    },
    { 
      title: "Digital Marketing", 
      path: "/degital marketing.pdf",
      category: "Marketing"
    },
    { 
      title: "MS Word Specialist", 
      path: "/ms word.pdf",
      category: "Professional Skills"
    },
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">My Achievements</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Honors & Professional Recognition
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateList.map((cert, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-gray-900/40 border border-gray-800 rounded-2xl hover:bg-gray-800/60 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Decorative Background Blur */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-500"></div>

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Award size={32} />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    {cert.category}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-100 mb-6 group-hover:text-blue-400 transition-colors duration-300 min-h-[56px]">
                  {cert.title}
                </h4>
              </div>

              {/* Action Button */}
              <a 
                href={cert.path} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 bg-transparent border border-blue-500/30 rounded-xl hover:bg-blue-600 hover:border-blue-600 active:scale-95 group/btn"
              >
                <FileText size={18} className="group-hover/btn:rotate-12 transition-transform" />
                <span>Verify Document</span>
                <ExternalLink size={14} className="opacity-50" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;