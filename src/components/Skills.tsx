import React from 'react';
import { motion } from 'motion/react';
import LogoLoop from './ui/LogoLoop';
import ScrollReveal from './ui/ScrollReveal';

const skillGroups = [
  {
    title: "Marketing Skills",
    skills: ["SEO (On-page, Off-page, Technical)", "Content Marketing", "Social Media Strategy", "Digital Advertising", "Competitor Analysis"]
  },
  {
    title: "Soft Skills",
    skills: ["Strategic Thinking", "Adaptability", "Collaboration", "Creative Problem Solving", "Communication"]
  }
];

const toolLogos = [
  { src: "https://cdn.simpleicons.org/semrush", alt: "Semrush" },
  { src: "https://cdn.simpleicons.org/googleanalytics", alt: "Google Analytics" },
  { src: "https://cdn.simpleicons.org/googlesearchconsole", alt: "Search Console" },
  { src: "https://cdn.simpleicons.org/wordpress", alt: "WordPress" },
  { src: "https://cdn.simpleicons.org/canva", alt: "Canva" },
  { src: "https://cdn.simpleicons.org/meta", alt: "Meta Ads Manager" },
  { src: "https://cdn.simpleicons.org/googleads", alt: "Google Ads" },
  { src: "https://cdn.simpleicons.org/hubspot", alt: "HubSpot" },
];

export default function Skills() {
  return (
    <div>
      <div className="mb-16">
        <span className="text-accent font-medium tracking-widest uppercase text-xs mb-4 block">Expertise</span>
        <ScrollReveal
          baseOpacity={0.2}
          baseRotation={0}
          blurStrength={0}
          containerClassName="!m-0"
          textClassName="text-4xl md:text-5xl font-serif text-primary-text !font-normal"
        >
          Skills & Proficiencies
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(191,162,255,0.1)" }}
            className="p-10 bg-background border border-black/5 rounded-3xl shadow-sm transition-all duration-300"
          >
            <h3 className="text-2xl font-serif italic mb-8 text-primary-text/90 border-b border-black/5 pb-6">{group.title}</h3>
            <ul className="space-y-4">
              {group.skills.map(skill => (
                <li key={skill} className="text-sm text-secondary-text font-light flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(191,162,255,0.1)" }}
        className="p-10 bg-background border border-black/5 rounded-3xl shadow-sm transition-all duration-300 overflow-hidden"
      >
        <h3 className="text-2xl font-serif italic mb-8 text-primary-text/90 border-b border-black/5 pb-6">Tools I Master</h3>
        <div className="py-4">
          <LogoLoop 
            logos={toolLogos} 
            speed={40} 
            gap={60} 
            logoHeight={40} 
            fadeOut={true}
            pauseOnHover={true}
          />
        </div>
      </motion.div>
    </div>
  );
}
