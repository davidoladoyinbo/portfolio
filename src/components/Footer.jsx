import React from 'react';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './Icons';
import { personalData, navItems } from '../data/portfolioData';

const iconMap = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon,
  Mail
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 lg:px-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl font-extrabold text-white font-heading">
              {personalData.fullName}
            </h3>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              {personalData.tagline}
            </p>
            <div className="flex items-center gap-2 pt-2">
              {personalData.socials.map((social) => {
                const Icon = iconMap[social.icon] || Mail;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-400 hover:text-primary transition-colors py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Availability summary */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Opportunities & Inquiries
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Open to cybersecurity & web development internships, junior roles, collaborative student projects, and mentorship.
            </p>
            <a
              href={`mailto:${personalData.email}`}
              className="inline-block mt-2 text-xs font-semibold text-primary hover:underline font-mono"
            >
              {personalData.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {personalData.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Engineered with React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
