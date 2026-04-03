import React from 'react';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-black/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-6">
        <div className="text-2xl font-serif font-bold text-primary-text">
          AJ<span className="text-accent">.</span>
        </div>
        
        <div className="text-[10px] text-secondary-text font-bold tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Ayushi Jain. Crafted for impact.
        </div>
        
        <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-secondary-text">
          <a href="#home" className="hover:text-accent transition-colors">Back to Top</a>
        </div>
      </div>
    </footer>
  );
}
