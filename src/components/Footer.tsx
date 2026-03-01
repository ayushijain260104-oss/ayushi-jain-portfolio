import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-ink/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-serif font-bold text-ink">
          AJ<span className="text-ink/40">.</span>
        </div>
        
        <div className="text-sm text-ink/40 font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} Ayushi Jain. All Rights Reserved.
        </div>
        
        <div className="flex space-x-6 text-sm font-medium uppercase tracking-widest text-ink/60">
          <a href="#" className="hover:text-ink transition-colors">Privacy</a>
          <a href="#" className="hover:text-ink transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
