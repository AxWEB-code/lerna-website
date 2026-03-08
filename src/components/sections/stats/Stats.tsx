"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: "120+",
    label: "Schools",
    description: "Active institutions across Nigeria"
  },
  {
    value: "48K+",
    label: "Students",
    description: "Actively using the platform"
  },
  {
    value: "1M+",
    label: "Attendance Records",
    description: "Processed and verified"
  },
  {
    value: "12K+",
    label: "Learning Resources",
    description: "Available in the library"
  }
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative bg-[#0a0e1a] text-white py-24">
      {/* Simple, clean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Powering the Future of{' '}
            <span className="text-green-400">School Management</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Schools across different regions rely on Lerna to manage academics, 
            operations and learning resources.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div 
          ref={ref} 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-3">
                <span className="text-3xl lg:text-4xl font-light text-green-400">
                  {stat.value}
                </span>
              </div>
              <div className="text-white font-medium mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-gray-500">
                {stat.description}
              </p>

              {/* Simple divider for last item on desktop */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-px h-12 bg-white/10 -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Simple bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-px bg-green-500/30 mx-auto mt-16"
          style={{ originX: 0.5 }}
        />
      </div>
    </section>
  );
}