import React from 'react';
import { motion } from 'motion/react';

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
    <section id="experience" className="py-24">
      <div className="mb-16">
        <span className="text-ink font-bold tracking-widest uppercase text-[10px] mb-4 block">01 / Experience</span>
        <h2 className="text-6xl md:text-8xl font-display leading-none tracking-tighter text-ink">
          PROFESSIONAL <span className="italic font-serif text-ink/40 text-4xl md:text-6xl">Timeline</span>
        </h2>
      </div>

      <div className="relative">
        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="p-10 bg-white border border-ink/5 rounded-3xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl font-display text-ink mb-2 uppercase tracking-tight">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm font-bold text-ink">{item.company}</span>
                    <span className="text-ink/20">|</span>
                    <span className="text-sm italic font-serif text-ink/60">{item.period}</span>
                  </div>
                  <ul className="space-y-4">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex gap-4 text-sm text-ink/70 font-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-ink/20 mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:block">
                  <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center text-ink font-display text-xl">
                    0{index + 1}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
