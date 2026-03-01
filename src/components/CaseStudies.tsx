import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    title: "Social Media Strategy & Visibility",
    context: "Enhancing brand presence for Vast Imagination, a creative agency.",
    whatIDid: "Content creation (blogs, creatives), site audits, and Google Business Profile optimization.",
    keyInsight: "Local visibility is often the most overlooked yet highest-impact lever for boutique agencies.",
    outcome: "Improved search visibility and a more cohesive social presence across LinkedIn and Instagram.",
    image: "https://picsum.photos/seed/vast/800/600",
  },
  {
    title: "SEO Optimization & Competitor Analysis",
    context: "Improving organic rankings for diverse client portfolios at Eggfirst Advertising.",
    whatIDid: "Conducted deep competitor analysis and optimized 25+ website pages using Semrush and GA.",
    keyInsight: "SEO isn't just about keywords; it's about matching the user's intent with the right content structure.",
    outcome: "Built 20+ high-quality backlinks and significantly improved ranking positions for key service pages.",
    image: "https://picsum.photos/seed/eggfirst/800/600",
  },
  {
    title: "Digital Footprint Expansion",
    context: "Increasing organic reach for IIDE - The Digital School.",
    whatIDid: "Produced 10+ SEO blogs and executed strategic guest posting across Medium and LinkedIn.",
    keyInsight: "Strategic guest posting can amplify a brand's authority faster than traditional blogging alone.",
    outcome: "Increased organic traffic and enhanced the school's digital footprint across multiple platforms.",
    image: "https://picsum.photos/seed/iide/800/600",
  }
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24">
      <div className="mb-24">
        <span className="text-ink font-bold tracking-widest uppercase text-[10px] mb-4 block">02 / Selected Projects</span>
        <h2 className="text-6xl md:text-8xl font-display leading-none tracking-tighter text-ink">
          WORK & <span className="italic font-serif text-ink/40">THINKING</span>
        </h2>
      </div>

      <div className="space-y-40">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            <div className={`lg:col-span-7 relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="relative aspect-[16/10] overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-ink text-beige px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                  Project {index + 1}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-4xl md:text-5xl font-display leading-tight uppercase text-ink">{project.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-ink mb-2">Context</h4>
                  <p className="text-sm text-ink/70 leading-relaxed font-light">{project.context}</p>
                </div>
                
                <div className="p-6 bg-paper border-l-4 border-ink">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-ink mb-2">The Insight</h4>
                  <p className="text-lg font-serif italic text-ink/90 leading-snug">"{project.keyInsight}"</p>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-ink mb-2">Outcome</h4>
                  <p className="text-sm text-ink/70 leading-relaxed font-light">{project.outcome}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
