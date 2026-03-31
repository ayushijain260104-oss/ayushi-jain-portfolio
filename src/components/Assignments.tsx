import React from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack';

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
          blurStrength={15}
          containerClassName="!m-0"
          textClassName="text-6xl md:text-8xl font-display leading-none tracking-tighter text-ink mb-6 !font-normal"
        >
          MARKETING Blueprints
        </ScrollReveal>
        <p className="text-lg text-ink/60 font-light max-w-2xl">
          A collection of high-impact marketing strategies and analytical frameworks designed to solve real-world business challenges.
        </p>
      </div>

      <ScrollStack
        useWindowScroll={true}
        itemDistance={100}
        itemScale={0.05}
        itemStackDistance={20}
        stackPosition="15%"
        scaleEndPosition="5%"
        baseScale={0.9}
        rotationAmount={1}
        blurAmount={2}
      >
        {assignments.map((item, index) => (
          <ScrollStackItem key={index}>
            <div className="group h-full p-8 md:p-12 bg-white rounded-3xl border border-ink/10 shadow-xl flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-ink/5 rounded-2xl text-ink group-hover:bg-ink group-hover:text-white transition-colors">
                    <FileText size={28} />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif italic text-ink mb-4 group-hover:text-ink/70 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] uppercase tracking-widest font-bold text-ink/30 mb-6">
                  Problem: {item.problem}
                </p>
                <p className="text-base md:text-lg text-ink/60 leading-relaxed font-light mb-10">
                  {item.overview}
                </p>
              </div>
              
              <div className="flex flex-col gap-4 w-full md:w-72 shrink-0">
                <a 
                  href={item.link1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-5 bg-ink text-beige text-[10px] font-bold uppercase tracking-widest hover:bg-ink/80 transition-all"
                >
                  View Full Case Study 
                  <ArrowUpRight size={14} />
                </a>
                <a 
                  href={item.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-5 border border-ink/10 text-ink text-[10px] font-bold uppercase tracking-widest hover:bg-ink/5 transition-all"
                >
                  See Detailed Strategy 
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>

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
