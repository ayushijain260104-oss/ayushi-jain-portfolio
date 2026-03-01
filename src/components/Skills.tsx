import React from 'react';
import { motion } from 'motion/react';

const skillGroups = [
  {
    title: "Marketing Skills",
    skills: ["SEO (On-page, Off-page, Technical)", "Content Marketing", "Social Media Strategy", "Digital Advertising", "Competitor Analysis"]
  },
  {
    title: "Tools",
    skills: ["Semrush", "Google Analytics", "Search Console", "WordPress", "Canva", "Meta Ads Manager"]
  },
  {
    title: "Soft Skills",
    skills: ["Strategic Thinking", "Adaptability", "Collaboration", "Creative Problem Solving", "Communication"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-paper text-ink">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-ink/60 font-medium tracking-widest uppercase text-xs mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif text-ink">Skills & <span className="italic">Proficiencies</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-xl font-serif mb-6 text-ink/90 border-b border-ink/10 pb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.skills.map(skill => (
                  <li key={skill} className="text-ink/70 font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink/20"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
