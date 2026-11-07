import React from 'react';
import { 
  CheckCircle2, 
  Code, 
  Layers, 
  Gauge, 
  Users, 
  Calendar, 
  GraduationCap, 
  Globe, 
  MapPin, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { aboutData, personalData } from '../data/portfolioData';

const attributeIcons = [Layers, Code, Gauge, Users];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">
            {aboutData.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-heading tracking-tight">
            {aboutData.sectionSubtitle}
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-3" />
        </div>

        {/* Narrative & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image & Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-500" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-900">
                <img
                  src={personalData.aboutImage}
                  alt={personalData.fullName}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase font-semibold tracking-wider text-primary">Crawford University Student</span>
                  <p className="text-lg font-bold font-heading">{personalData.fullName}</p>
                  <p className="text-xs text-gray-300 mt-1">{personalData.location}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid under image */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-6">
              {personalData.stats.slice(0, 2).map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-cardBorder text-center">
                  <div className="text-2xl font-extrabold text-primary font-heading">{s.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-0.5">{s.suffix}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Details */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
              {aboutData.headline}
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base">
              {aboutData.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {aboutData.personalDetails.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50 dark:bg-dark-card/60 border border-gray-200/80 dark:border-dark-cardBorder/60">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold text-gray-900 dark:text-gray-200">{item.label}: </span>
                    <span className="text-gray-600 dark:text-gray-400">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Core Pillars / Strengths */}
            <div className="pt-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white font-heading mb-4">
                What Sets My Work Apart
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.keyAttributes.map((attr, idx) => {
                  const Icon = attributeIcons[idx % attributeIcons.length];
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-cardBorder hover:border-primary/50 transition-all duration-300 shadow-sm"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-sm text-gray-900 dark:text-white font-heading">
                        {attr.title}
                      </h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                        {attr.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
