import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-ink/40 font-bold tracking-[0.3em] uppercase text-[10px] mb-8 block">Contact</span>
        <h2 className="text-5xl md:text-7xl font-display mb-12 leading-none text-ink">
          LET'S BUILD <br /> <span className="italic font-serif text-ink/40 text-4xl md:text-6xl lowercase">something meaningful</span>
        </h2>
        <p className="text-xl text-ink/60 font-light mb-16 max-w-xl mx-auto leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
          <a href="mailto:ayushijain1783@gmail.com" className="group flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink group-hover:text-beige transition-all">
              <Mail size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-ink">Email Me</span>
          </a>
          <a href="https://linkedin.com/in/ayushi-jain" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink group-hover:text-beige transition-all">
              <Linkedin size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-ink">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
