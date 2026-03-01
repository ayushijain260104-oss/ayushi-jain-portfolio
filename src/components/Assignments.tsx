import React from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink, ArrowUpRight } from 'lucide-react';

const assignments = [
  {
    title: "Market Analysis: Digital Business Trends",
    category: "Academic Research",
    description: "A comprehensive study on emerging digital business models and their impact on traditional markets.",
    link: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy"
  },
  {
    title: "Consumer Behavior in E-commerce",
    category: "Psychology & Marketing",
    description: "Analyzing the psychological triggers that drive online purchasing decisions in the Gen Z demographic.",
    link: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy"
  },
  {
    title: "SEO Audit & Strategy Framework",
    category: "Technical SEO",
    description: "A step-by-step framework for conducting technical SEO audits for small to medium enterprises.",
    link: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy"
  },
  {
    title: "Brand Identity & Storytelling",
    category: "Branding",
    description: "Developing a cohesive brand narrative and visual identity for a hypothetical sustainable fashion brand.",
    link: "https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy"
  }
];

export default function Assignments() {
  return (
    <section id="assignments" className="py-24">
      <div className="mb-16">
        <span className="text-ink font-bold tracking-widest uppercase text-[10px] mb-4 block">03 / Academic Archive</span>
        <h2 className="text-6xl md:text-8xl font-display leading-none tracking-tighter text-ink">
          RESEARCH & <span className="italic font-serif text-ink/40 text-4xl md:text-6xl">Assignments</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assignments.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group p-8 bg-paper rounded-2xl border border-ink/5 hover:border-ink/20 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-ink/5 rounded-xl text-ink">
                  <FileText size={24} />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-ink/40 bg-ink/5 px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <h3 className="text-2xl font-serif italic text-ink mb-4 group-hover:text-ink/70 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed font-light mb-8">
                {item.description}
              </p>
            </div>
            
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink group/link"
            >
              View Document 
              <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://drive.google.com/drive/u/0/folders/1PSgS8fFRxz-1tT3BLCUGZHGqAcKgCcWy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 border border-ink/10 text-ink text-xs uppercase tracking-widest font-bold hover:bg-ink hover:text-beige transition-all"
        >
          Explore Full Archive <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
