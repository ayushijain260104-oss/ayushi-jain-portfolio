import React from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import Stack from './ui/Stack';

const assignments = [
  {
    title: "The Glow-Up Strategy: K-Beauty Market Entry",
    overview: "The Problem: Penetrating a saturated skincare market with zero brand awareness. \n\nThe Insight: Consumers trust peer recommendations over brand ads in K-Beauty. \n\nThe Idea: A multi-layered influencer ecosystem for authentic community trust. \n\nThe Execution: Micro-advocacy campaigns and viral adoption strategies. \n\nThe Outcome: Built community trust and drove viral brand adoption.",
    link1: "https://drive.google.com/file/d/163kFtXmP4k_np1_wcQTZ9tn35FNKN1HL/view",
    link2: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    image: "https://i.ibb.co/6RWMFMdh/image.png"
  },
  {
    title: "Brewing Innovation: The Kruti Coffee Revolution",
    overview: "The Problem: Rebranding coffee as a refreshing lifestyle beverage for Gen-Z. \n\nThe Insight: Gen-Z values sensory experiences and digital storytelling. \n\nThe Idea: An integrated 360° campaign leveraging sensory marketing. \n\nThe Execution: Digital storytelling to disrupt traditional caffeine habits. \n\nThe Outcome: Successfully disrupted traditional consumption habits.",
    link1: "https://drive.google.com/file/d/1bhRSyvNEJd2b2BD_zmMzvvxO4jtZcodN/view",
    link2: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    image: "https://i.ibb.co/kgYB9r4j/image.png"
  },
  {
    title: "Search Dominance: Technical SEO & Content Synergy",
    overview: "The Problem: Low organic visibility hindering customer acquisition. \n\nThe Insight: High-intent keywords are the key to sustainable brand authority. \n\nThe Idea: A comprehensive SEO framework focusing on technical synergy. \n\nThe Execution: Technical optimization and strategic keyword mapping. \n\nThe Outcome: Secured sustainable top-tier rankings and authority.",
    link1: "https://drive.google.com/file/d/1DAK1UQzygmgJOk1rHGxeUIFuaT_y2We_/view",
    link2: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy",
    image: "https://i.ibb.co/rfmvGh89/image.png"
  },
  {
    title: "Conversion Catalyst: E-commerce UX Optimization",
    overview: "The Problem: High cart abandonment rates and stagnant order values. \n\nThe Insight: Psychological triggers and optimized journeys drive conversion. \n\nThe Idea: A data-driven redesign of the digital storefront. \n\nThe Execution: Redesigning user journeys and implementing UX triggers. \n\nThe Outcome: Maximized ROI through optimized e-commerce UX.",
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
            <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40">Case Study 0{index + 1}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-serif italic text-ink mb-4 leading-tight">
            {item.title}
          </h3>
          <p className="text-sm text-ink/60 font-light max-w-xl leading-relaxed whitespace-pre-line">
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
        <span className="text-ink font-bold tracking-widest uppercase text-[10px] mb-4 block">03 / Selected Work</span>
        <ScrollReveal
          baseOpacity={0}
          baseRotation={0}
          blurStrength={0}
          containerClassName="!m-0"
          textClassName="text-6xl md:text-8xl font-display leading-none tracking-tighter text-ink mb-6 !font-normal"
        >
          Case Studies
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
