import React from 'react';

const projectList = [
  {
    title: "UN Resolutions Implementation in South Asia",
    category: "International Law",
    status: "Case Study",
    description: "A comprehensive analysis of how UN security resolutions are adopted and implemented within the South Asian geopolitical framework, focusing on regional sovereignty.",
    outcomes: ["Policy Analysis", "Legal Framework Research", "Regional Security Assessment"]
  },
  {
    title: "Analysis of International Trade Agreements",
    category: "Political Economy",
    status: "Research Project",
    description: "Evaluating the impact of multi-lateral trade agreements on developing economies, with a specific focus on the strategic economic partnerships in the Eurasian region.",
    outcomes: ["Economic Diplomacy", "Data Interpretation", "Strategic Reporting"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-slate-50 rounded-3xl my-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 border-b border-slate-200 pb-6">
        <div>
          <h2 className="text-4xl font-serif font-bold text-slate-900">Projects & Case Studies</h2>
          <p className="text-slate-600 mt-2">Strategic analysis and research on global political affairs.</p>
        </div>
        <div className="text-blue-900 font-semibold text-sm tracking-widest uppercase">
          Total Projects: {projectList.length}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid gap-8">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mt-3 mb-4 group-hover:text-blue-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Outcomes/Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.outcomes.map((outcome, i) => (
                    <span key={i} className="text-[11px] font-medium text-slate-500 border border-slate-200 px-3 py-1 rounded-md bg-slate-50">
                      • {outcome}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:text-right">
                <span className="inline-block px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-inner">
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;