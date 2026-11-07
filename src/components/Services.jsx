import React from 'react';
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Server, 
  Zap, 
  Compass, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const serviceIcons = {
  Code2,
  Layout,
  Smartphone,
  Server,
  Zap,
  Compass
};

export default function Services() {
  const scrollToContact = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white font-heading tracking-tight">
            Services & Solutions
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl text-base">
            High-impact technical services engineered to scale your product, improve user retention, and ensure rock-solid performance.
          </p>
          <div className="w-20 h-1.5 bg-primary rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = serviceIcons[service.icon] || Code2;
            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-cardBorder hover-glow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon with Glow */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-heading group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Deliverables List */}
                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 space-y-2.5">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary-hover group/btn"
                  >
                    <span>Request Consultation</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
