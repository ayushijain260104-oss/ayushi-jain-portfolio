/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import CaseStudies from './components/CaseStudies';
import Assignments from './components/Assignments';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-ink/20 selection:text-ink flex flex-col lg:flex-row">
      <Navbar />
      <main className="flex-1 lg:ml-64">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Timeline />
          <div className="section-divider" />
          <Achievements />
          <div className="section-divider" />
          <CaseStudies />
          <div className="section-divider" />
          <Assignments />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Testimonials />
          <div className="section-divider" />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
