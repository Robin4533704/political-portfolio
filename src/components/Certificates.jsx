import React from 'react';
import { Award, ExternalLink, FileText, Medal, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  const certificateList = [
    { title: "Laksam Nobarun Business & NGO", path: "/Frame 1 (2).pdf", category: "Social Work", issuer: "Community Development" },
    { title: "International Relations", path: "/international relation.pdf", category: "Academic", issuer: "Global Affairs" },
    { title: "Global Economics", path: "/Global Political Intelligence in AI.pdf", category: "Economics", issuer: "Financial Intelligence" },
    { title: "Web Development", path: "/programing hero certificate.pdf", category: "Tech & Dev", issuer: "Software Engineering" },
    { title: "Digital Marketing", path: "/degital marketing.pdf", category: "Marketing", issuer: "Strategic Growth" },
    { title: "MS Word Specialist", path: "/ms word.pdf", category: "Professional Skills", issuer: "Office Management" },
    { title: "Swimming Achievement", path: "/Frame 1 (1).pdf", category: "Sports", issuer: "Physical Excellence" },
  ];

  return (
    <section id="certificates" className="py-12 sm:py-12 px-4 sm:px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center md:items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3 sm:mb-4">
            <ShieldCheck size={14} className="text-blue-400" />
            <span className="text-blue-400 font-mono text-[9px] sm:text-xs tracking-widest uppercase">Verified Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Honors & Recognition
          </h2>

          <div className="h-1 w-32 sm:w-40 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)]"></div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificateList.map((cert, index) => (
            <div key={index} className="group relative p-6 sm:p-8 bg-[#111111] border border-gray-800/50 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:border-blue-500/50">
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-500"></div>

              <div className="relative flex flex-col justify-between h-full">
                {/* Header */}
                <div className="flex justify-between items-center mb-6 sm:mb-8">
                  <div className="p-3 sm:p-4 bg-gray-900 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition duration-500 shadow-inner">
                    {cert.category === "Sports" ? <Medal size={24} /> : <Award size={24} />}
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-gray-500 border border-gray-800 px-2 sm:px-3 py-1 rounded-xl group-hover:border-blue-500/30 transition-colors">
                    {cert.category}
                  </span>
                </div>

                {/* Title & issuer */}
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-gray-500 text-sm sm:text-base font-medium mb-6 sm:mb-8">
                  {cert.issuer}
                </p>

                {/* Action Button */}
                <a
                  href={cert.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 font-bold text-sm sm:text-base tracking-wide text-white bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 group/btn overflow-hidden shadow-md"
                >
                  <FileText size={16} />
                  <span>Verify Credential</span>
                  <ExternalLink size={12} className="opacity-40 group-hover/btn:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 text-xs sm:text-sm font-medium">
            All documents are verified and issued by recognized authorities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
