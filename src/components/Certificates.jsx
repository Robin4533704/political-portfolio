

import React from 'react';

const certificateList = [
  {
    title: "Model UN Participation 2024",
    issuer: "International MUN Conference",
    image: "/assets/mun-cert.jpg",
  },
  {
    title: "International Relations Foundations",
    issuer: "Coursera / HSE University",
    image: "/assets/hse-cert.jpg", // স্যাম্পল নাম, আপনার ফাইল নাম দিন
  },
  {
    title: "Global Security Workshop",
    issuer: "Strategic Studies Center",
    image: "/assets/security-cert.jpg",
  },
  {
    title: "Basic Russian Language Course",
    issuer: "Language Institute",
    image: "/assets/russian-cert.jpg",
  }
];

const Certificates = () => (
  <section id="certificates" className="py-16 px-4">
    {/* Section Header with Gradient Underline */}
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Honors & Professional Recognition</h2>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-blue-500 rounded-full"></div>
    </div>

    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {certificateList.map((cert, index) => (
        <div 
          key={index} 
          className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-semibold border border-white px-4 py-2 rounded-full">
                View Certificate
              </span>
            </div>
          </div>

          {/* Certificate Info */}
          <div className="p-4 text-center">
            <h3 className="text-sm font-bold text-slate-800 leading-tight mb-1">
              {cert.title}
            </h3>
            <p className="text-[11px] text-slate-500 uppercase tracking-wider font-medium">
              {cert.issuer}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Certificates;


