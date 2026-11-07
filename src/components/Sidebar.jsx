import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  Server, 
  Mail, 
  ChevronDown, 
  Menu, 
  X as CloseIcon,
  Moon,
  Sun,
  Star,
  ExternalLink,
  Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './Icons';
import { personalData, navItems } from '../data/portfolioData';

// Map icon strings
const iconMap = {
  Home,
  User,
  FileText,
  Briefcase,
  Server,
  Star,
  Mail,
  Zap,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
  Instagram: InstagramIcon
};

export default function Sidebar({ activeSection, darkMode, setDarkMode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close mobile drawer when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileOpen]);

  const handleNavClick = (id) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle Navigation Menu"
        className="lg:hidden fixed top-4 right-4 z-50 p-2.5 rounded-full bg-dark-sidebar/90 text-white backdrop-blur-md border border-white/10 shadow-lg hover:bg-primary transition-all duration-300 focus:outline-none"
      >
        {isMobileOpen ? <CloseIcon className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-40 w-[280px] bg-dark-sidebar text-white flex flex-col justify-between py-7 px-6 overflow-y-auto transition-transform duration-300 ease-in-out border-r border-white/5 shadow-2xl ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Profile Header */}
          <div className="flex flex-col items-center text-center">
            <div className="relative group cursor-pointer">
              <div className="w-28 h-28 rounded-full overflow-hidden border-[6px] border-[#1f2937] shadow-xl group-hover:border-primary transition-all duration-300">
                <img
                  src={personalData.avatar}
                  alt={personalData.fullName}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              {personalData.isAvailable && (
                <span 
                  title={personalData.availability}
                  className="absolute bottom-1 right-2 w-4 h-4 bg-emerald-500 border-2 border-dark-sidebar rounded-full animate-pulse"
                />
              )}
            </div>

            <h1 className="mt-4 text-xl font-bold tracking-tight text-white font-heading hover:text-primary transition-colors">
              <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
                {personalData.fullName}
              </a>
            </h1>

            {/* Social Icons matching design template */}
            <div className="flex items-center justify-center gap-2 mt-3">
              {personalData.socials.map((social) => {
                const IconComponent = iconMap[social.icon] || ExternalLink;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full bg-[#182030] hover:bg-primary text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="mt-8">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const IconComponent = iconMap[item.icon] || Home;
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group text-left ${
                        isActive
                          ? 'text-primary bg-primary/10 border-l-4 border-primary pl-3'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                          isActive ? 'text-primary' : 'text-gray-400 group-hover:text-primary'
                        }`}
                      />
                      <span className="tracking-wide group-hover:translate-x-0.5 transition-transform">
                        {item.label}
                      </span>
                    </button>
                  </li>
                );
              })}

              {/* Template's Dropdown item (More Resources) */}
              <li className="pt-1">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <Zap className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="tracking-wide">Quick Links</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180 text-primary' : 'text-gray-400'
                    }`}
                  />
                </button>

                {/* Submenu */}
                {isDropdownOpen && (
                  <ul className="pl-11 pr-2 py-1 space-y-1 text-xs text-gray-400 animate-fade-in">
                    <li>
                      <a
                        href={personalData.resumeUrl}
                        download
                        className="block py-2 hover:text-primary transition-colors"
                      >
                        Download Resume (CV)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/davidoladoyinbo?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between py-2 hover:text-primary transition-colors"
                      >
                        <span>GitHub Repositories</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:davidoladoyinbo4@gmail.com"
                        className="block py-2 hover:text-primary transition-colors"
                      >
                        Direct Inquiry
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* Sidebar Footer: Theme Toggle & Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <div className="flex items-center justify-between px-2">
            <span className="text-xs text-gray-400 font-medium">Appearance</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#182030] hover:bg-white/10 text-xs text-gray-300 transition-colors"
            >
              {darkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-primary" />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>
          <p className="text-[11px] text-gray-500 text-center tracking-tight">
            © {new Date().getFullYear()} {personalData.fullName}
          </p>
        </div>
      </aside>
    </>
  );
}
