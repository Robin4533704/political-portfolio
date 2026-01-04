import React from "react";

const Footer = () => {
  return (
    <footer className="mt-24 bg-slate-950 text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Identity */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">
            Robiul Hossen
          </h3>
          <p className="text-slate-400 leading-relaxed">
            Political Science Graduate & Aspiring International Relations Scholar,
            focused on global diplomacy and Eurasian geopolitics.
          </p>
        </div>

        {/* Academic Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Academic Work
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="#essays" className="hover:text-white transition">
                Research Papers
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white transition">
                Strategic Projects
              </a>
            </li>
            <li>
              <a href="/cv.pdf" className="hover:text-white transition">
                Download CV
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>Email: 
              <a 
                href="mailto:robiul@email.com" 
                className="ml-2 hover:text-white transition"
              >
                robiul@email.com
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="hover:text-white transition">
                LinkedIn Profile
              </a>
            </li>
            <li>
              <a href="https://github.com" className="hover:text-white transition">
                GitHub / Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Robiul Hossen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
