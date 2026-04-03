import React from 'react';
import { motion } from 'motion/react';
import ScrollReveal from './ui/ScrollReveal';
import FallingText from './ui/FallingText';
import PhysicsFallingText from './ui/PhysicsFallingText';

export default function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <span className="text-ink font-bold tracking-widest uppercase text-[10px] mb-4 block">01 / About</span>
        <FallingText
          text="My Journey"
          className="text-4xl font-serif italic text-ink"
          stagger={0.1}
          duration={1}
        />
      </div>
      <div className="lg:col-span-8 space-y-8">
        <div className="h-[200px] border border-ink/5 rounded-3xl overflow-hidden bg-paper/50">
          <PhysicsFallingText
            text="I’ve always been more interested in the “why” behind brands than just the “what.”"
            fontSize="32px"
            gravity={0.15}
          />
        </div>
        <div className="space-y-6">
          <p className="text-xl font-serif italic text-ink/90 leading-relaxed">
            Why do people trust certain brands instantly? Why do some campaigns feel real, while others feel forced?
          </p>
          <p className="text-lg text-ink/80 font-serif italic">
            I notice how people react, what they relate to, and what makes something stick.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-ink/70 font-light">
          <div className="space-y-4">
            <p>Through my projects, I’ve explored influencer marketing, brand positioning, and campaigns but what I enjoy most is connecting insights to ideas.</p>
          </div>
          <div className="space-y-4">
            <p>I like breaking things down, understanding behavior, and building ideas that feel thoughtful and relevant.</p>
          </div>
        </div>
        
        <div className="pt-12 border-t border-ink/5">
          <h3 className="text-2xl font-serif italic mb-8 text-ink">How I Think About Brands</h3>
          <p className="text-lg text-ink/80 font-serif italic mb-6">I notice the small things.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Premium Perception", desc: "Why some brands feel premium without saying it." },
              { title: "Relatable Resonance", desc: "Why certain ads feel relatable while others feel forced." },
              { title: "Cultural Trends", desc: "How culture and trends shape what people buy." }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-ink/5 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-serif text-xl mb-3 italic text-ink">{item.title}</h4>
                <p className="text-xs text-ink/60 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink/70 font-light italic">
            I believe strong brands are built on understanding people — not just pushing products.
          </p>
        </div>
      </div>
    </div>
  );
}
