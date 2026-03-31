import React from 'react';
import { motion } from 'motion/react';
import ScrollReveal from './ui/ScrollReveal';
import FallingText from './ui/FallingText';

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <span className="text-ink font-bold tracking-widest uppercase text-[10px] mb-4 block">01 / About</span>
        <h2 className="text-4xl font-serif italic text-ink">My Journey</h2>
      </div>
      <div className="lg:col-span-8 space-y-8">
        <FallingText
          text='"Strategy is the bridge between vision and reality."'
          className="text-2xl font-serif leading-relaxed text-ink/90 font-normal italic"
          stagger={0.03}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-ink/70 font-light">
          <FallingText
            text="My journey began with a curiosity for how digital spaces influence human behavior. Currently pursuing my BBA in Digital Business, I've spent the last two years exploring the intersection of branding and consumer psychology."
            className="text-sm leading-relaxed text-ink/70 font-light"
            stagger={0.01}
            duration={0.6}
          />
          <FallingText
            text="I'm interested in understanding not just what people buy, but why they buy into a story. My strengths lie in my ability to balance rigorous research with creative execution, ensuring that every strategy is as imaginative as it is grounded in data."
            className="text-sm leading-relaxed text-ink/70 font-light"
            stagger={0.01}
            duration={0.6}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {[
            { title: "Research", desc: "Diving deep into the 'why' before the 'how'." },
            { title: "Execution", desc: "Turning complex strategies into simple actions." },
            { title: "Creativity", desc: "Finding unique solutions for standard problems." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-ink/5 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-serif text-xl mb-3 italic text-ink">{item.title}</h4>
              <p className="text-xs text-ink/60 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
