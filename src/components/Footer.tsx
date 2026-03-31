import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-ink/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-serif font-bold text-ink">
          AJ<span className="text-ink/40">.</span>
        </div>
        
        <div className="text-[10px] text-ink/40 font-bold tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Ayushi Jain. Crafted for impact.
        </div>
        
        <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-ink/60">
          <a href="#home" className="hover:text-ink transition-colors">Back to Top</a>
        </div>
      </div>
    </footer>
  );
}
