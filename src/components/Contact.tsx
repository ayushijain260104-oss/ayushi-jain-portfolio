import React, { useState } from 'react';
import { Mail, Linkedin, Instagram, Twitter, ArrowUpRight, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import FallingText from './ui/FallingText';

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { name: 'Email', icon: <Mail size={18} />, href: 'mailto:ayushijain1783@gmail.com', color: 'bg-white' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/ayushi-jain', color: 'bg-white' },
    { name: 'Instagram', icon: <Instagram size={18} />, href: 'https://instagram.com/ayushi', color: 'bg-white' },
    { name: 'Twitter', icon: <Twitter size={18} />, href: 'https://twitter.com/ayushi', color: 'bg-white' },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden rounded-[3rem] my-20 mx-4 bg-ink border border-white/10 shadow-2xl">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-beige/40 font-bold tracking-[0.3em] uppercase text-[10px] mb-12 block"
        >
          Contact
        </motion.span>
        
        <div className="space-y-6 mb-20">
          <FallingText
            text="If something here resonated with you, let’s talk."
            className="text-4xl md:text-6xl font-display text-beige leading-none block"
            stagger={0.03}
          />
          <FallingText
            text="Let’s build something meaningful."
            className="text-4xl md:text-6xl font-display text-beige/30 leading-none block italic"
            stagger={0.03}
            delay={0.5}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="pt-8"
          >
            <p className="text-xl md:text-2xl text-beige/70 font-serif italic mb-2">
              I’m always open to conversations about ideas, brands, and opportunities where I can learn and contribute.
            </p>
          </motion.div>
        </div>

        {/* Interactive Social Hub Button */}
        <div className="relative flex justify-center items-center h-24">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-20 w-20 h-20 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 ${
              isOpen ? 'bg-white text-ink rotate-45' : 'bg-white text-ink hover:scale-110'
            }`}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={32} /> : <Plus size={32} />}
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <div className="absolute inset-0 flex items-center justify-center">
                {socialLinks.map((link, index) => {
                  const angle = (index * (360 / socialLinks.length)) * (Math.PI / 180);
                  const radius = 100;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                      animate={{ opacity: 1, x, y, scale: 1 }}
                      exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20,
                        delay: index * 0.1 
                      }}
                      className={`absolute w-14 h-14 rounded-full flex items-center justify-center text-ink shadow-md hover:shadow-xl hover:scale-110 transition-transform ${link.color}`}
                      title={link.name}
                    >
                      {link.icon}
                      <motion.div 
                        className="absolute -bottom-8 bg-white text-ink text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {link.name}
                      </motion.div>
                    </motion.a>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[10px] uppercase tracking-widest text-beige/40 font-bold">
            © 2026 Ayushi Jain — Digital Business BBA
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-beige/40 font-bold">
            <a href="#" className="hover:text-beige transition-colors">Privacy</a>
            <a href="#" className="hover:text-beige transition-colors">Terms</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
