import React from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import Folder from './ui/Folder';

const assignments = [
  {
    title: "The Glow-Up Strategy: K-Beauty Market Entry",
    problem: "How to penetrate a saturated skincare market with zero brand awareness.",
    overview: "A multi-layered influencer ecosystem designed to build authentic community trust and drive viral adoption through micro-advocacy.",
    link1: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    link2: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy"
  },
  {
    title: "Brewing Innovation: The Fruity Coffee Revolution",
    problem: "Rebranding coffee as a refreshing, fruit-forward lifestyle beverage for Gen-Z.",
    overview: "An integrated 360° campaign leveraging sensory marketing and digital storytelling to disrupt traditional caffeine consumption habits.",
    link1: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    link2: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy"
  },
  {
    title: "Search Dominance: Technical SEO & Content Synergy",
    problem: "Low organic visibility hindering customer acquisition and brand authority.",
    overview: "A comprehensive SEO framework focusing on technical optimization and high-intent keyword mapping to secure sustainable top-tier rankings.",
    link1: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    link2: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy"
  },
  {
    title: "Conversion Catalyst: E-commerce UX Optimization",
    problem: "High cart abandonment rates and stagnant average order values.",
    overview: "A data-driven redesign of the digital storefront, optimizing user journeys and implementing psychological triggers to maximize ROI.",
    link1: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    link2: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy"
  }
];

export default function Assignments() {
  return (
    <div>
      <div className="mb-16">
        <span className="text-ink font-bold tracking-widest uppercase text-[10px] mb-4 block">03 / Strategic Archive</span>
        <ScrollReveal
          baseOpacity={0}
          baseRotation={0}
          blurStrength={0}
          containerClassName="!m-0"
          textClassName="text-6xl md:text-8xl font-display leading-none tracking-tighter text-ink mb-6 !font-normal"
        >
          MARKETING Blueprints
        </ScrollReveal>
        <p className="text-lg text-ink/60 font-light max-w-2xl">
          A collection of high-impact marketing strategies and analytical frameworks designed to solve real-world business challenges.
        </p>
      </div>

      <div className="flex justify-center py-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Folder 
            color="#5227FF"
            items={[
              <div className="w-full">
                <h4 className="text-xs font-bold uppercase mb-6 text-ink/40 border-b border-ink/5 pb-2">Projects 01 - 02</h4>
                <div className="space-y-8">
                  {assignments.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="group/item">
                      <h3 className="text-xl font-serif italic text-ink mb-2 group-hover/item:text-indigo-600 transition-colors">{item.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-ink/30 mb-2">Problem: {item.problem}</p>
                      <p className="text-xs leading-relaxed text-ink/60 mb-4">{item.overview}</p>
                      <div className="flex gap-4">
                        <a href={item.link1} target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-tighter text-ink border border-ink/10 py-1.5 px-3 hover:bg-ink hover:text-beige transition-all">Case Study</a>
                        <a href={item.link2} target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-tighter text-ink border border-ink/10 py-1.5 px-3 hover:bg-ink hover:text-beige transition-all">Strategy</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>,
              <div className="w-full">
                <h4 className="text-xs font-bold uppercase mb-6 text-ink/40 border-b border-ink/5 pb-2">Projects 03 - 04</h4>
                <div className="space-y-8">
                  {assignments.slice(2, 4).map((item, idx) => (
                    <div key={idx} className="group/item">
                      <h3 className="text-xl font-serif italic text-ink mb-2 group-hover/item:text-indigo-600 transition-colors">{item.title}</h3>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-ink/30 mb-2">Problem: {item.problem}</p>
                      <p className="text-xs leading-relaxed text-ink/60 mb-4">{item.overview}</p>
                      <div className="flex gap-4">
                        <a href={item.link1} target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-tighter text-ink border border-ink/10 py-1.5 px-3 hover:bg-ink hover:text-beige transition-all">Case Study</a>
                        <a href={item.link2} target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-tighter text-ink border border-ink/10 py-1.5 px-3 hover:bg-ink hover:text-beige transition-all">Strategy</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>,
              <div className="w-full flex flex-col h-full">
                <h4 className="text-xs font-bold uppercase mb-6 text-ink/40 border-b border-ink/5 pb-2">Strategic Resources</h4>
                <div className="flex-1 flex flex-col justify-center items-center text-center space-y-6">
                  <div className="p-6 bg-ink/5 rounded-full">
                    <FileText size={40} className="text-ink/20" />
                  </div>
                  <p className="text-sm text-ink/60 max-w-xs italic font-light">
                    "Strategy is about making choices, trade-offs; it's about deliberately choosing to be different."
                  </p>
                  <a
                    href="https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-beige text-[10px] font-bold uppercase tracking-widest hover:bg-ink/80 transition-all"
                  >
                    Access Full Archive <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ]}
          />
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center w-full">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-ink/20">Click to expand the archive</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-ink/60 text-sm mb-6 font-light italic">Ready to see more? Dive into the complete archive of my strategic work.</p>
        <a
          href="https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border border-ink/10 text-ink text-xs uppercase tracking-widest font-bold hover:bg-ink hover:text-beige transition-all"
        >
          View Complete Portfolio <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}
