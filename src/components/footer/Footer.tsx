"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { name: "Features", href: "#features" },
    { name: "Learning Resources", href: "#resources" },
    { name: "Blog", href: "/blog" },
    { name: "Video Lessons", href: "/videos" }
  ];

  const socialLinks = [
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/company/lerna-ng/" },
    { name: "WhatsApp", icon: FaWhatsapp, href: "#" },
    { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/lerna.ng?igsh=MTAxbmV2Zm1qczZnMA==" }
  ];

  return (
    <footer className="relative bg-[#070b14] text-gray-400 border-t border-white/[0.05] overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Main Footer - Balanced 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 py-16">
          
          {/* Brand - Left */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white">
                <span className="text-green-400">L</span>erna
              </h3>
            </div>
            
            <p className="text-sm leading-relaxed text-gray-400 mb-6 max-w-sm">
              Lerna is a modern digital infrastructure helping schools manage academics, 
              finance, communication and learning resources all in one place.
            </p>

            {/* Trust badges */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <span className="text-green-400">✓</span>
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-400">✓</span>
                <span>GDPR</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-green-400">✓</span>
                <span>NDPR</span>
              </div>
            </div>
          </div>

          {/* Platform Links - Center */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social - Right */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✉️</span>
                <a href="mailto:support@lerna.africa" className="hover:text-white transition">
                  support@lerna.africa
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">📞</span>
                <span>+234 902 341 9897</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">📍</span>
                <span>Lagos, Nigeria</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/[0.05] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>© {currentYear} Lerna. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
    </footer>
  );
}