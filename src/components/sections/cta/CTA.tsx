"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-gradient-to-br from-white via-white to-blue-50/30 py-28 overflow-hidden -mt-px">
      
      {/* Premium animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-40 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-[#3B71E8]/5 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-l from-[#F28C28]/5 to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#3B71E8]/3 via-transparent to-[#F28C28]/3 rounded-full blur-[150px]"></div>
      </div>
      
      {/* Floating icons with brand gradient */}
      <div className="floating-icon text-3xl top-20 left-20 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">💬</div>
      <div className="floating-icon text-2xl bottom-20 right-32 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">🚀</div>
      <div className="floating-icon text-2xl top-1/3 left-10 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">✨</div>
      <div className="floating-icon text-2xl bottom-16 right-10 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">⚡</div>
      
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B71E8]/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#3B71E8]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
            <span className="text-sm font-semibold bg-gradient-to-r from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              GET STARTED TODAY
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            <span className="text-[#1F1F1F]">Bring Your School</span>
            <br />
            <span className="bg-gradient-to-r from-[#3B71E8] via-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              Into the Digital Era
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Lerna helps schools manage academics, payments, attendance, 
            communication and learning resources all in one powerful system.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 mb-10">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-[#3B71E8] font-bold">✓</span> No setup fees
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-[#F28C28] font-bold">✓</span> Free training
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="text-[#3B71E8] font-bold">✓</span> 24/7 support
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <a
              href="https://wa.me/+2349023419897?text=Hello%20I%20would%20like%20to%20onboard%20my%20school%20on%20Lerna"
              target="_blank"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3B71E8] to-[#3B71E8] hover:from-[#3B71E8] hover:to-[#F28C28] text-white font-bold rounded-xl transition-all duration-500 shadow-lg shadow-[#3B71E8]/25 hover:shadow-xl hover:shadow-[#F28C28]/25 overflow-hidden"
            >
              <span className="relative z-10">Talk to Us on WhatsApp</span>
              <span className="relative z-10 text-lg group-hover:translate-x-1 transition-transform">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F28C28] to-[#3B71E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </a>
          </motion.div>

          {/* Trust text */}
          <p className="text-xs text-gray-400 mt-6">
            No commitment • Free consultation • Response within 1 hour
          </p>
        </motion.div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F28C28]/30 to-transparent" />
    </section>
  );
}