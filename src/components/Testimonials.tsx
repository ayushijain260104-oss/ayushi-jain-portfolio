import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Ayushi has an incredible ability to see through the clutter and find the core message that truly matters. Her strategic insights were pivotal for our launch.",
    author: "Sarah Chen",
    role: "Founder, EcoSphere"
  },
  {
    quote: "Working with Ayushi was a breath of fresh air. She doesn't just provide data; she provides a narrative that makes sense for our business and our customers.",
    author: "Michael Ross",
    role: "Marketing Director, Urban Pulse"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-ink font-medium tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-ink">
              What partners say about <span className="italic">our collaboration</span>.
            </h2>
            <p className="text-lg text-ink/60 font-light max-w-md">
              Trust is built on results. Here's how I've helped others find their strategic edge.
            </p>
          </div>

          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-ink/5 relative hover:shadow-md transition-shadow"
              >
                <Quote className="absolute top-6 right-8 text-ink/10" size={48} />
                <p className="text-xl font-serif italic mb-6 leading-relaxed text-ink/90">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold text-ink">{t.author}</p>
                  <p className="text-xs text-ink/40 uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
