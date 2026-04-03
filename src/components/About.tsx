import React from 'react';
import { motion } from 'motion/react';
import ScrollReveal from './ui/ScrollReveal';
import FallingText from './ui/FallingText';

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <span className="text-accent font-bold tracking-widest uppercase text-[10px] mb-4 block">01 / About</span>
        <FallingText
          text="My Journey"
          className="text-4xl font-serif italic text-primary-text"
          stagger={0.1}
          duration={1}
        />
      </div>
      <div className="lg:col-span-8 space-y-8">
        <FallingText
          text='"Strategy is the bridge between vision and reality."'
          className="text-2xl font-serif leading-relaxed text-primary-text/90 font-normal italic"
          stagger={0.03}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-secondary-text font-light">
          <FallingText
            text="My journey began with a curiosity for how digital spaces influence human behavior. Currently pursuing my BBA in Digital Business, I've spent the last two years exploring the intersection of branding and consumer psychology."
            className="text-sm leading-relaxed text-secondary-text font-light"
            stagger={0.01}
            duration={0.6}
          />
          <FallingText
            text="I'm interested in understanding not just what people buy, but why they buy into a story. My strengths lie in my ability to balance rigorous research with creative execution, ensuring that every strategy is as imaginative as it is grounded in data."
            className="text-sm leading-relaxed text-secondary-text font-light"
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
            <motion.div 
              key={i} 
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(191,162,255,0.1)" }}
              className="p-8 bg-background rounded-2xl border border-white/5 shadow-sm transition-all duration-300"
            >
              <FallingText
                text={item.title}
                className="font-serif text-xl mb-3 italic text-accent"
                stagger={0.05}
                duration={0.8}
              />
              <FallingText
                text={item.desc}
                className="text-xs text-secondary-text leading-relaxed font-light"
                stagger={0.01}
                duration={0.6}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
