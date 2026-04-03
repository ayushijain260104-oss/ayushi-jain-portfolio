import React from 'react';
import { motion } from 'motion/react';
import { FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import FallingText from './ui/FallingText';

export default function Contact() {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <FiInstagram size={24} />, 
      href: 'https://www.instagram.com/ayushij_6?igsh=MWh2YWFvY3d4b3Y3dw%3D%3D&utm_source=qr',
      label: 'Follow me on Instagram'
    },
    { 
      name: 'LinkedIn', 
      icon: <FiLinkedin size={24} />, 
      href: 'https://www.linkedin.com/in/ayushi-jain-a80972223?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      label: 'Connect on LinkedIn'
    },
    { 
      name: 'Email', 
      icon: <FiMail size={24} />, 
      href: 'mailto:ayushijain178@gmail.com',
      label: 'Send me an email'
    },
  ];

  return (
    <section 
      className="relative py-32 px-6 overflow-hidden rounded-[3rem] my-20 mx-4 border border-white/10 shadow-2xl"
      style={{ background: 'linear-gradient(135deg, #1A1625 0%, #2A2238 100%)' }}
    >
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

        {/* Social Icons Row */}
        <div className="flex justify-center items-center gap-8 md:gap-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== 'Email' ? "_blank" : undefined}
              rel={link.name !== 'Email' ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              title={link.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + (index * 0.1) }}
              whileHover={{ 
                scale: 1.2, 
                color: '#F5F5DC', // beige color
                transition: { duration: 0.2 }
              }}
              className="text-beige/50 transition-colors duration-300 flex items-center justify-center"
            >
              {link.icon}
            </motion.a>
          ))}
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

