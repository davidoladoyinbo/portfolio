import React from 'react';
import { FileText, Briefcase, GraduationCap, Calendar, MapPin, Download } from 'lucide-react';
import { experienceData, educationData, personalData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-heading tracking-tight">
              Experience & Education
            </h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mt-4" />
          </div>

          <a
            href={personalData.resumeUrl}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold shadow-lg shadow-primary/20 transition-all self-start md:self-end"
          >
            <Download className="w-4 h-4" />
            <span>Download Curriculum Vitae</span>
          </a>
        </div>

        {/* Dual Column Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-heading">
                Professional Experience
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200 dark:border-gray-800 space-y-10">
              {experienceData.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-dark-bg border-4 border-primary group-hover:scale-125 transition-transform" />

                  {/* Card Content */}
                  <div className="p-6 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-cardBorder hover:border-primary/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-primary/10 text-primary">
                        {item.period}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-gray-900 dark:text-white font-heading">
                      {item.role}
                    </h4>
                    <p className="text-xs font-semibold text-primary mt-0.5">
                      {item.company}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>

                    {item.achievements && (
                      <ul className="mt-4 space-y-1.5">
                        {item.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white font-heading">
                Education & Credentials
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200 dark:border-gray-800 space-y-10">
              {educationData.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-dark-bg border-4 border-indigo-500 group-hover:scale-125 transition-transform" />

                  {/* Card Content */}
                  <div className="p-6 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-200 dark:border-dark-cardBorder hover:border-indigo-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-500/10 text-indigo-400">
                        {edu.period}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-gray-900 dark:text-white font-heading">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-indigo-400 mt-0.5">
                      {edu.institution}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
