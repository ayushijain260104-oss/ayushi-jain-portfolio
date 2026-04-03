import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import TextTyping from './ui/TextTyping';

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
          <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-secondary-text mb-8 block">
            Portfolio 2026 / Digital Marketing
          </span>
          <div className="flex flex-col md:flex-row md:items-end gap-8 mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[18vw] md:text-[14vw] font-display leading-[0.8] tracking-tighter text-primary-text block"
            >
              AYUSHI <br /> JAIN
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-accent overflow-hidden mb-4 md:mb-8 shadow-[0_10px_30px_rgba(191,162,255,0.1)] relative group shrink-0"
            >
              <img 
                src="https://i.ibb.co/nsQ0YhQR/Untitled-design.png" 
                alt="Ayushi Jain Avatar" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="flex items-center gap-6 mt-12">
            <div className="h-px bg-accent w-16" />
            <p className="text-xl md:text-2xl font-serif italic text-secondary-text">
              Digital Marketer & Brand Strategist
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-4xl md:text-6xl font-serif leading-[1.1] tracking-tight text-primary-text font-normal">
              <TextTyping 
                text='I explore the "why" to build the how.' 
                typingSpeed={80}
                duration={3000}
                className="inline-block"
              />
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-4 justify-end">
            <motion.a
              href="#assignments"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(191,162,255,0.2)" }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center justify-center bg-accent text-black px-12 py-6 text-xs uppercase tracking-widest font-bold rounded-lg transition-all group"
            >
              View Work
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={14} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
