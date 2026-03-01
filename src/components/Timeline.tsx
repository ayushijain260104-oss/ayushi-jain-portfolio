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
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-ink/10 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12 md:space-y-0">
          {experience.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              {/* Numbered Circle */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ink text-beige font-display text-xl flex items-center justify-center z-10 hidden md:flex border-4 border-beige">
                {index + 1}
              </div>

              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <div className="w-full md:w-1/2 p-6 md:p-12">
                  <div className={`${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-2xl md:text-3xl font-display text-ink mb-1 uppercase tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-sm font-bold text-ink/90 mb-4">
                      {item.company} <span className="mx-2 text-ink/20">|</span> <span className="font-normal text-ink/70 italic font-serif">{item.period}</span>
                    </p>
                    <ul className={`space-y-3 text-sm text-ink/80 font-light leading-relaxed list-none`}>
                      {item.points.map((point, i) => (
                        <li key={i} className={`flex gap-3 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-ink/40 mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty Side */}
                <div className="hidden md:block md:w-1/2" />
              </div>

              {/* Horizontal Separator for Mobile */}
              <div className="h-px bg-ink/10 w-full md:hidden my-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
