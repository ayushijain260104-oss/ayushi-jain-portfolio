import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-20 -right-20 text-[25rem] font-display text-ink/[0.03] leading-none select-none pointer-events-none">
        STRATEGY
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="flex items-start gap-8 mb-12">
          <div className="hidden md:block vertical-text text-[10px] uppercase tracking-[0.5em] font-bold text-ink border-l border-ink/20 pl-2">
            Portfolio 2026 / Digital Marketing
          </div>
          
          <div>
            <h1 className="text-[15vw] md:text-[12vw] font-display leading-[0.85] tracking-tighter mb-4 text-ink">
              AYUSHI <br /> JAIN
            </h1>
            <div className="flex items-center gap-4">
              <div className="h-px bg-ink w-12" />
              <p className="text-sm md:text-lg font-serif italic text-ink/80">
                Digital Marketer & Brand Strategist
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mt-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.2] tracking-tight text-ink/90">
              I explore the <span className="italic text-ink">"why"</span> to build the <span className="italic underline decoration-ink/20 underline-offset-8">how</span>.
            </h2>
          </div>
          
          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-4 justify-end">
            <a
              href="#work"
              className="inline-flex items-center justify-center bg-ink text-beige px-10 py-5 rounded-none text-xs uppercase tracking-widest font-bold hover:bg-ink/90 transition-all group"
            >
              View Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center border border-ink text-ink px-10 py-5 rounded-none text-xs uppercase tracking-widest font-bold hover:bg-ink hover:text-beige transition-all"
            >
              Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
