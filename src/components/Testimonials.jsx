import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5" />
            <span>Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-heading tracking-tight">
            Client & Partner Endorsements
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl text-base">
            What founders, engineering leaders, and product directors say about working together.
          </p>
          <div className="w-20 h-1.5 bg-primary rounded-full mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-cardBorder hover-glow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white font-heading">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.role} • <span className="text-primary font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
