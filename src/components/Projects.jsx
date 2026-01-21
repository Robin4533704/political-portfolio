import React from 'react';
import { Briefcase, ChevronRight, PieChart, Globe2, Scale, Target } from 'lucide-react';

const projectList = [
  {
    title: "UN Resolutions Implementation in South Asia",
    category: "International Law",
    status: "Case Study",
    description: "A comprehensive analysis of how UN security resolutions are adopted and implemented within the South Asian geopolitical framework, focusing on regional sovereignty.",
    outcomes: ["Policy Analysis", "Legal Framework Research", "Regional Security Assessment"],
    icon: <Scale className="text-blue-500" size={24} />
  },
  {
    title: "Analysis of International Trade Agreements",
    category: "Political Economy",
    status: "Research Project",
    description: "Evaluating the impact of multi-lateral trade agreements on developing economies, with a specific focus on the strategic economic partnerships in the Eurasian region.",
    outcomes: ["Economic Diplomacy", "Data Interpretation", "Strategic Reporting"],
    icon: <PieChart className="text-cyan-500" size={24} />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-gray-800 pb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="text-blue-500" size={20} />
              <span className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase font-bold">Research Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Projects & <span className="text-gray-500 font-medium">Case Studies</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl text-lg leading-relaxed italic">
              "Strategic analysis and scholarly research on global political affairs and regional cooperation."
            </p>
          </div>
          <div className="hidden md:block">
            <div className="px-6 py-3 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
               <span className="text-blue-400 font-mono text-sm font-bold tracking-widest">
                ACTIVE ANALYTICS: {projectList.length}
               </span>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-10">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0f0f0f] p-8 md:p-12 rounded-[2.5rem] border border-gray-800 transition-all duration-500 hover:border-blue-500/30 overflow-hidden shadow-2xl"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px] -z-10 group-hover:bg-blue-600/10 transition-colors"></div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gray-900 rounded-xl">
                      {project.icon}
                    </div>
                    <span className="text-[10px] font-black text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full uppercase tracking-widest border border-blue-500/20">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6 group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">
                    {project.description}
                  </p>
                  
                  {/* Outcomes Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-300 bg-[#151515] border border-gray-800 px-4 py-2 rounded-xl group-hover:bg-gray-800 transition-colors">
                        <Target size={12} className="text-blue-500" />
                        {outcome}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:text-right flex flex-col items-start md:items-end gap-4">
                  <div className="px-5 py-2 bg-white text-black text-[10px] font-black uppercase tracking-tighter rounded-full shadow-xl">
                    {project.status}
                  </div>
                  <button className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm font-bold group/btn">
                    Read Methodology 
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;