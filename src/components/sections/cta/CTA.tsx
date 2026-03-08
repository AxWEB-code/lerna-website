"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-[#0a0e1a] text-white py-28 overflow-hidden">
      {/* Simple, subtle background */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent" />
      
      {/* Simple border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Eyebrow text */}
          <span className="text-green-400/60 text-sm font-mono tracking-widest mb-4 block">
            GET STARTED TODAY
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Bring Your School{' '}
            <span className="text-green-400">Into the Digital Era</span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Lerna helps schools manage academics, payments, attendance, 
            communication and learning resources all in one powerful system.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 mb-10">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-green-400">✓</span> No setup fees
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-green-400">✓</span> Free training
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="text-green-400">✓</span> 24/7 support
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
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-all duration-300"
            >
              <span>Talk to Us on WhatsApp</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Trust text */}
          <p className="text-xs text-gray-600 mt-6">
            No commitment • Free consultation • Response within 1 hour
          </p>
        </motion.div>
      </div>

      {/* Simple bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
    </section>
  );
}