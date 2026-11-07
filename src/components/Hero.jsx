import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Sparkles, Download, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Typewriter effect
  useEffect(() => {
    const titles = personalData.professionalTitles;
    const currentTitle = titles[currentTitleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(100);

        if (displayText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 11, 20, 0.75), rgba(9, 13, 22, 0.88)), url('${personalData.heroBackground}')`,
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 py-24 text-center sm:text-left flex flex-col items-center sm:items-start">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/15 backdrop-blur-md mb-6 animate-fade-in shadow-inner">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 -ml-4.5" />
          <span className="text-xs font-semibold tracking-wide text-emerald-300">
            {personalData.availability}
          </span>
        </div>

        {/* Large Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-heading leading-tight animate-fade-in-up">
          {personalData.fullName}
        </h1>

        {/* Dynamic Typewriter Heading */}
        <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-200 min-h-[48px]">
          <span className="text-gray-300">I'm</span>
          <span className="text-primary font-heading border-b-2 border-primary/80 pb-0.5">
            {displayText}
          </span>
          <span className="w-1 h-8 bg-primary animate-pulse inline-block" />
        </div>

        {/* Tagline / Value Proposition */}
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
          {personalData.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="group px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2.5 active:scale-95"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 hover:border-white/40 active:scale-95"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span>Contact Me</span>
          </button>

          <a
            href={personalData.resumeUrl}
            className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-gray-300 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-gray-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Quick Highlights Row */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-3xl">
          {personalData.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
