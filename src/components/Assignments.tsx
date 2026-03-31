import React from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import Stack from './ui/Stack';

const assignments = [
  {
    title: "The Glow-Up Strategy: K-Beauty Market Entry",
    problem: "How to penetrate a saturated skincare market with zero brand awareness.",
    overview: "A multi-layered influencer ecosystem designed to build authentic community trust and drive viral adoption through micro-advocacy.",
    link1: "https://drive.google.com/file/d/163kFtXmP4k_np1_wcQTZ9tn35FNKN1HL/view",
    link2: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    image: "https://i.ibb.co/6RWMFMdh/image.png"
  },
  {
    title: "Brewing Innovation: The Fruity Coffee Revolution",
    problem: "Rebranding coffee as a refreshing, fruit-forward lifestyle beverage for Gen-Z.",
    overview: "An integrated 360° campaign leveraging sensory marketing and digital storytelling to disrupt traditional caffeine consumption habits.",
    link1: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    link2: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    image: "https://i.ibb.co/mVxJqcKx/image.png"
  },
  {
    title: "Search Dominance: Technical SEO & Content Synergy",
    problem: "Low organic visibility hindering customer acquisition and brand authority.",
    overview: "A comprehensive SEO framework focusing on technical optimization and high-intent keyword mapping to secure sustainable top-tier rankings.",
    link1: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    link2: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    image: "https://picsum.photos/seed/seo/1200/800"
  },
  {
    title: "Conversion Catalyst: E-commerce UX Optimization",
    problem: "High cart abandonment rates and stagnant average order values.",
    overview: "A data-driven redesign of the digital storefront, optimizing user journeys and implementing psychological triggers to maximize ROI.",
    link1: "https://drive.google.com/file/d/18oZpzE1_1XbcYJ0W2__BHiSq5sk10KUT/view",
    link2: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    image: "https://i.ibb.co/mVxJqcKx/image.png"
  }
];

export default function Assignments() {
  const cards = assignments.map((item, index) => (
    <div key={index} className="w-full h-full bg-white flex flex-col overflow-hidden group/card">
      <div className="relative h-[60%] overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-ink/5 group-hover/card:bg-transparent transition-colors duration-500" />
      </div>
      
      <div className="flex-1 p-8 md:p-12 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-ink/20" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Project 0{index + 1}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif italic text-ink mb-4 leading-tight">
            {item.title}
          </h3>
          <p className="text-base text-ink/60 font-light max-w-xl leading-relaxed">
            {item.overview}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 mt-8">
          <a 
            href={item.link1} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-ink text-beige text-[10px] font-bold uppercase tracking-widest hover:bg-ink/80 transition-all"
          >
            View Case Study 
            <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </a>
          <a 
            href="https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-3 px-8 py-4 border border-ink/10 text-ink text-[10px] font-bold uppercase tracking-widest hover:bg-ink/5 transition-all"
          >
            View More Work
            <ChevronRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="py-24">
      <div className="mb-20">
        <span className="text-ink font-bold tracking-widest uppercase text-[10px] mb-4 block">03 / Featured Work</span>
        <ScrollReveal
          baseOpacity={0}
          baseRotation={0}
          blurStrength={0}
          containerClassName="!m-0"
          textClassName="text-6xl md:text-8xl font-display leading-none tracking-tighter text-ink mb-6 !font-normal"
        >
          STRATEGIC Archive
        </ScrollReveal>
        <p className="text-lg text-ink/60 font-light max-w-2xl">
          A curated selection of high-impact marketing blueprints and analytical frameworks.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto h-[700px] md:h-[800px]">
        <Stack 
          cards={cards}
          randomRotation={true}
          sensitivity={150}
          sendToBackOnClick={true}
          animationConfig={{ stiffness: 200, damping: 25 }}
        />
        
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-12">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-ink/20">
            <ChevronLeft size={16} />
            <span>Swipe or Click to Cycle</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}
