import React from 'react';
import { motion } from 'motion/react';
import ScrollReveal from './ui/ScrollReveal';
import CountUp from './ui/CountUp';

const achievements = [
  {
    number: "25",
    suffix: "+",
    label: "Pages Optimized",
    description: "Website pages enhanced for better search performance"
  },
  {
    number: "20",
    suffix: "+",
    label: "Quality Backlinks",
    description: "High-authority links built to boost domain rankings"
  },
  {
    number: "10",
    suffix: "+",
    label: "SEO Blogs",
    description: "Optimized content pieces driving organic traffic"
  },
  {
    number: "3",
    suffix: "",
    label: "Platforms Managed",
    description: "LinkedIn, Instagram, and Facebook content strategy"
  }
];

export default function Achievements() {
  return (
    <div>
      <div className="mb-16">
        <span className="text-accent font-bold tracking-widest uppercase text-[10px] mb-4 block">02 / Key Achievements</span>
        <ScrollReveal
          baseOpacity={0}
          baseRotation={0}
          blurStrength={0}
          containerClassName="!m-0"
          textClassName="text-6xl md:text-8xl font-display leading-none tracking-tighter text-primary-text !font-normal"
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
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(191,162,255,0.1)" }}
            className="p-8 bg-background border border-black/5 rounded-2xl shadow-sm transition-all flex flex-col items-center text-center group"
          >
            <div className="text-4xl md:text-5xl font-display text-accent mb-3 leading-none group-hover:scale-110 transition-transform flex items-baseline">
              <CountUp
                to={Number(item.number)}
                duration={2}
                className="font-display"
              />
              {item.suffix && <span className="text-2xl ml-0.5">{item.suffix}</span>}
            </div>
            <h3 className="text-[10px] uppercase tracking-widest font-bold text-primary-text mb-3">
              {item.label}
            </h3>
            <p className="text-[11px] text-secondary-text leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
