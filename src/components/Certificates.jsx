import React from 'react';
import { Award, ExternalLink, FileText, Medal, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  const certificateList = [
    { 
      title: "Nobarun Business & NGO", 
      path: "/Frame 1 (2).pdf",
      category: "Social Work",
      issuer: "Community Development"
    },
    { 
      title: "International Relations", 
      path: "/international_relation.pdf",
      category: "Academic",
      issuer: "Global Affairs"
    },
    { 
      title: "Global Economics", 
      path: "/global_economics.pdf",
      category: "Economics",
      issuer: "Financial Intelligence"
    },
    { 
      title: "Web Development", 
      path: "/web_development.pdf",
      category: "Tech & Dev",
      issuer: "Software Engineering"
    },
    { 
      title: "Digital Marketing", 
      path: "/digital_marketing.pdf",
      category: "Marketing",
      issuer: "Strategic Growth"
    },
    { 
      title: "MS Word Specialist", 
      path: "/ms_word.pdf",
      category: "Professional Skills",
      issuer: "Office Management"
    },
    { 
      title: "Swimming Achievement", 
      path: "/Frame 1 (1).pdf", 
      category: "Sports",
      issuer: "Physical Excellence"
    },
  ];

  return (
    <section id="certificates" className="py-24 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 items-center md:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <ShieldCheck size={16} className="text-blue-400" />
            <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">Verified Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Honors & Recognition
          </h2>
          <div className="h-1.5 w-40 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)]"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificateList.map((cert, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-[#111111] border border-gray-800/50 rounded-[2rem] transition-all duration-500 hover:border-blue-500/50 flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              {/* Animated Glow Effect on Hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-0 group-hover:opacity-10 transition duration-500"></div>

              <div className="relative">
                <div className="flex justify-between items-center mb-8">
                  <div className="p-4 bg-gray-900 rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    {cert.category === "Sports" ? <Medal size={28} /> : <Award size={28} />}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 border border-gray-800 px-3 py-1.5 rounded-xl group-hover:border-blue-500/30 transition-colors">
                    {cert.category}
                  </span>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-gray-500 text-sm mb-10 font-medium tracking-wide">
                  {cert.issuer}
                </p>
              </div>

              {/* View Button */}
              <a 
                href={cert.path} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-3 px-6 py-4 font-bold text-sm tracking-wide text-white transition-all duration-300 bg-gray-900 border border-gray-800 rounded-2xl hover:bg-blue-600 hover:border-blue-600 group/btn overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                <FileText size={18} />
                <span>Verify Credential</span>
                <ExternalLink size={14} className="opacity-40 group-hover/btn:opacity-100 transition-opacity" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-sm font-medium">
            All documents are verified and issued by recognized authorities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;