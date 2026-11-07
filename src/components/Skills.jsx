import React, { useState } from 'react';
import { Zap, Terminal, Code, Cpu } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-heading tracking-tight">
            Skills & Modern Stack
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl text-base">
            Proficient in modern frontend architectures, microservices, cloud deployments, and industry-standard developer tooling.
          </p>
          <div className="w-20 h-1.5 bg-primary rounded-full mt-4" />
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-gray-200 dark:border-gray-800">
          {skillsData.categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === idx
                  ? 'bg-primary text-white shadow-md shadow-primary/20'
                  : 'bg-gray-100 dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Progress Bars for Active Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skillsData.categories[activeCategory].skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-gray-800 dark:text-gray-200 tracking-wide">
                  {skill.name}
                </span>
                <span className="text-primary font-mono">{skill.level}%</span>
              </div>
              <div className="h-2.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-primary via-cyan-400 to-indigo-500 rounded-full transition-all duration-1000 ease-out shadow-sm"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Ecosystem Pills Cloud */}
        <div className="mt-16 p-8 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-cardBorder">
          <div className="flex items-center gap-3 mb-5">
            <Terminal className="w-5 h-5 text-primary" />
            <h3 className="text-base font-bold text-gray-900 dark:text-white font-heading">
              Tooling, Frameworks & Infrastructure
            </h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skillsData.toolsPills.map((tool, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-[#182030] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5 hover:border-primary/50 hover:text-primary transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
