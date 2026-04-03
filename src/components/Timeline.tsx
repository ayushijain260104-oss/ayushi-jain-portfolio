import React from 'react';
import { motion } from 'motion/react';
import ScrollReveal from './ui/ScrollReveal';

const experience = [
  {
    role: "Social Media Strategist & Client Servicing Intern",
    company: "Vast Imagination",
    period: "July 2025 – September 2025",
    points: [
      "Created content including blogs, SEO elements, and social media creatives.",
      "Conducted keyword research and site audit; improved Google Business Profile visibility.",
      "Designed social media concepts and managed end-to-end posting for LinkedIn, Instagram, and Facebook."
    ]
  },
  {
    role: "SEO Intern",
    company: "Eggfirst Advertising",
    period: "July 2024 – September 2024",
    points: [
      "Performed keyword research, competitor analysis, and SEO audits using Semrush and GA.",
      "Optimized 25+ website pages and built 20+ high-quality backlinks.",
      "Enhanced website performance through on-page, off-page, and technical SEO."
    ]
  },
  {
    role: "Virtual Intern",
    company: "IIDE – The Digital School",
    period: "January 2024 – February 2024",
    points: [
      "Produced 10+ SEO-optimized blogs and Pinterest backlinks, increasing organic traffic.",
      "Enhanced LinkedIn presence through strategic content planning.",
      "Executed guest posting across Medium, LinkedIn Articles, and YouTube transcripts."
    ]
  }
];

export default function Timeline() {
  return (
    <div>
      <div className="mb-16">
        <span className="text-accent font-bold tracking-widest uppercase text-[10px] mb-4 block">01 / Experience</span>
        <ScrollReveal
          baseOpacity={0}
          baseRotation={0}
          blurStrength={0}
          containerClassName="!m-0"
          textClassName="text-6xl md:text-8xl font-display leading-none tracking-tighter text-primary-text !font-normal"
        >
          PROFESSIONAL Timeline
        </ScrollReveal>
      </div>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-3 md:left-6 top-4 bottom-4 w-px bg-white/10 hidden sm:block" />

        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="relative pl-0 sm:pl-16 md:pl-24 group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[0.375rem] md:left-[1.125rem] top-4 w-3 h-3 rounded-full border-2 border-accent bg-background z-10 hidden sm:block group-hover:bg-accent transition-colors duration-300" />
              
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 20px 40px -20px rgba(191,162,255,0.15)" }}
                className="p-8 md:p-10 bg-secondary-bg border border-white/5 rounded-3xl shadow-sm transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl md:text-3xl font-display text-primary-text uppercase tracking-tight group-hover:text-accent transition-colors">
                        {item.role}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="text-sm font-bold text-primary-text">{item.company}</span>
                      <span className="text-white/20 hidden sm:block">|</span>
                      <span className="text-sm italic font-serif text-secondary-text">{item.period}</span>
                    </div>
                    <ul className="space-y-4">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex gap-4 text-sm text-secondary-text font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden lg:block">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent font-display text-xl group-hover:bg-accent group-hover:text-background transition-all">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
