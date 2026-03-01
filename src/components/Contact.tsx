import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-ink/5">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-ink font-medium tracking-widest uppercase text-xs mb-6 block">Contact</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-ink">
          Let's build something <span className="italic">meaningful</span> together.
        </h2>
        <p className="text-lg text-ink/70 font-light mb-12">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          <a href="mailto:ayushijain1783@gmail.com" className="flex items-center gap-2 text-lg font-medium text-ink hover:text-ink/70 transition-colors group">
            <Mail size={20} className="text-ink/40 group-hover:text-ink transition-colors" />
            ayushijain1783@gmail.com
          </a>
          <a href="https://linkedin.com/in/ayushi-jain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-medium text-ink hover:text-ink/70 transition-colors group">
            <Linkedin size={20} className="text-ink/40 group-hover:text-ink transition-colors" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
