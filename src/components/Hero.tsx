import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-ink/40 mb-8 block">
            Portfolio 2026 / Digital Marketing
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18vw] md:text-[14vw] font-display leading-[0.8] tracking-tighter mb-12 text-ink block"
          >
            AYUSHI <br /> JAIN
          </motion.h1>
          <div className="flex items-center gap-6 mt-12">
            <div className="h-px bg-ink w-16" />
            <p className="text-xl md:text-2xl font-serif italic text-ink/60">
              Digital Marketer & Brand Strategist
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <ScrollReveal
              baseOpacity={0}
              baseRotation={0}
              blurStrength={0}
              containerClassName="!m-0"
              textClassName="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-ink/90 !font-normal"
            >
              I explore the "why" to build the how.
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-4 justify-end">
            <a
              href="#assignments"
              className="inline-flex items-center justify-center bg-ink text-beige px-12 py-6 text-xs uppercase tracking-widest font-bold hover:bg-ink/90 transition-all group"
            >
              View Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
