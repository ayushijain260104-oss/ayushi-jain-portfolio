import React from 'react';
import { motion } from 'motion/react';
import { Target, Search, BarChart3, MessageSquare } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const services = [
  {
    title: "Brand Strategy",
    description: "Defining your brand's core purpose, mission, and vision to create a solid foundation for all future growth.",
    icon: Target
  },
  {
    title: "Market Positioning",
    description: "Finding the 'white space' in your industry and positioning your brand to stand out from the noise.",
    icon: Search
  },
  {
    title: "Brand Audits",
    description: "Comprehensive analysis of your current brand health, competitive landscape, and audience perception.",
    icon: BarChart3
  },
  {
    title: "Campaign Strategy",
    description: "Strategic planning for product launches or brand campaigns that drive awareness and conversion.",
    icon: MessageSquare
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-olive text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-white/60 font-medium tracking-widest uppercase text-sm mb-4 block">What I Offer</span>
          <ScrollReveal
            baseOpacity={0.2}
            baseRotation={0}
            blurStrength={0}
            containerClassName="!m-0"
            textClassName="text-4xl md:text-5xl font-serif text-white !font-normal"
          >
            Strategic Solutions
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-8 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-serif mb-4">{service.title}</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
