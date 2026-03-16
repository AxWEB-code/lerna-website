"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Add this import
import Link from "next/link"; // Add this import
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
    <footer className="relative bg-gradient-to-br from-white via-white to-blue-50/30 text-gray-500 border-t border-gray-200 overflow-hidden">

      {/* Premium animated background elements - very subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-[#3B71E8]/5 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-l from-[#F28C28]/5 to-transparent rounded-full blur-[100px]"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h60v60H0z" fill="none"/%3E%3Cpath d="M0 0h60M0 60h60M0 0v60M60 0v60" stroke="%233B71E8" stroke-width="0.5" stroke-opacity="0.03"/%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer - Balanced 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 py-16">
          
          {/* Brand - Left with Logo Image */}
          <div>
            <div className="mb-4">
              <Link href="/" className="inline-block group">
                <div className="relative h-16 w-auto"> {/* Logo container */}
                  <Image
                    src="/logo.png"
                    alt="Lerna Logo"
                    width={180}
                    height={64}
                    className="h-16 w-auto object-contain"
                    priority
                  />
                  {/* Subtle hover effect */}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#3B71E8] to-[#F28C28] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </div>
              </Link>
            </div>
            
            <p className="text-sm leading-relaxed text-gray-500 mb-6 max-w-sm">
              Lerna is a modern digital infrastructure helping schools manage academics, 
              finance, communication and learning resources all in one place.
            </p>

            {/* Trust badges */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <span className="text-[#3B71E8] font-bold">✓</span>
                <span className="text-gray-500">ISO 27001</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#F28C28] font-bold">✓</span>
                <span className="text-gray-500">GDPR</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#3B71E8] font-bold">✓</span>
                <span className="text-gray-500">NDPR</span>
              </div>
            </div>
          </div>

          {/* Platform Links - Center */}
          <div>
            <h4 className="text-[#1F1F1F] font-bold mb-4 text-sm uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#3B71E8] transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 transform duration-300">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social - Right */}
          <div>
            <h4 className="text-[#1F1F1F] font-bold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-center gap-2">
                <span className="text-[#3B71E8]">✉️</span>
                <a href="mailto:support@lerna.africa" className="text-gray-500 hover:text-[#3B71E8] transition">
                  support@lerna.africa
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#F28C28]">📞</span>
                <span className="text-gray-500">+234 902 341 9897</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#3B71E8]">📍</span>
                <span className="text-gray-500">Lagos, Nigeria</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-[#3B71E8] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <p>© {currentYear} Lerna. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#3B71E8] transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-[#F28C28] transition">Terms</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B71E8]/30 to-transparent" />
    </footer>
  );
}
