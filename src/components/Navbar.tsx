import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Work', href: '#work' },
  { name: 'Assignments', href: '#assignments' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop Sidebar Nav */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col border-r border-ink/10 p-8 z-50 bg-beige">
        <div className="mb-12">
          <a href="#home" className="text-3xl font-serif font-bold tracking-tighter text-ink">
            AJ<span className="text-ink/40">.</span>
          </a>
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mt-2 font-medium">
            Digital Strategist
          </p>
        </div>

        <nav className="flex-1 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`group flex items-center gap-3 text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.slice(1) 
                ? 'text-ink translate-x-1' 
                : 'text-ink/40 hover:text-ink hover:translate-x-1'
              }`}
            >
              <div className={`h-px transition-all duration-300 ${
                activeSection === link.href.slice(1) ? 'w-4 bg-ink' : 'w-0 bg-ink/20 group-hover:w-4'
              }`} />
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-ink/10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink hover:opacity-70 transition-opacity"
          >
            Let's Talk <ChevronRight size={14} />
          </a>
        </div>
      </aside>

      {/* Mobile Header */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 bg-beige/80 backdrop-blur-md z-50 border-b border-ink/10 py-4 px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-serif font-bold text-ink">AJ.</a>
        <button onClick={() => setIsOpen(!isOpen)} className="text-ink">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-beige z-[60] lg:hidden p-12 flex flex-col"
          >
            <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex-1 flex flex-col justify-center space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif text-ink hover:text-ink/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
