import React from 'react';
import { motion } from 'motion/react';
import ScrollReveal from './ui/ScrollReveal';

const achievements = [
  {
    number: "25+",
    label: "Pages Optimized",
    description: "Website pages enhanced for better search performance"
  },
  {
    number: "20+",
    label: "Quality Backlinks",
    description: "High-authority links built to boost domain rankings"
  },
  {
    number: "10+",
    label: "SEO Blogs",
    description: "Optimized content pieces driving organic traffic"
  },
  {
    number: "3",
    label: "Platforms Managed",
    description: "LinkedIn, Instagram, and Facebook content strategy"
  }
];

export default function Achievements() {
  return (
    <div>
      <div className="mb-16">
        <span className="text-ink font-bold tracking-widest uppercase text-[10px] mb-4 block">02 / Key Achievements</span>
        <ScrollReveal
          baseOpacity={0}
          baseRotation={0}
          blurStrength={15}
          containerClassName="!m-0"
          textClassName="text-6xl md:text-8xl font-display leading-none tracking-tighter text-ink !font-normal"
        >
          IMPACT & Results
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-8 bg-white border border-ink/5 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group"
          >
            <div className="text-4xl md:text-5xl font-display text-ink mb-3 leading-none group-hover:scale-110 transition-transform">
              {item.number}
            </div>
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-ink mb-3">
              {item.label}
            </h3>
            <p className="text-[11px] text-ink/60 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
