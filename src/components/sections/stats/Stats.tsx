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
    <section className="relative bg-gradient-to-br from-white via-white to-blue-50/30 py-24 overflow-hidden -mt-px">

      {/* Premium animated background elements - subtle */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-40 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-[#3B71E8]/5 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-l from-[#F28C28]/5 to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#3B71E8]/3 via-transparent to-[#F28C28]/3 rounded-full blur-[150px]"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h60v60H0z" fill="none"/%3E%3Cpath d="M0 0h60M0 60h60M0 0v60M60 0v60" stroke="%233B71E8" stroke-width="0.5" stroke-opacity="0.03"/%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>

      {/* Floating icons with brand gradient */}
      <div className="floating-icon text-3xl top-20 left-20 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">🏫</div>
      <div className="floating-icon text-2xl bottom-20 right-32 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">👥</div>
      <div className="floating-icon text-2xl top-1/3 left-10 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">📊</div>
      <div className="floating-icon text-2xl bottom-16 right-10 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">📚</div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            <span className="text-[#1F1F1F]">Powering the Future of</span>
            <br />
            <span className="bg-gradient-to-r from-[#3B71E8] via-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              School Management
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
              className="text-center relative group"
            >
              <div className="mb-3">
                <span className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.value}
                </span>
              </div>
              <div className="text-[#1F1F1F] font-bold text-lg mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-gray-500">
                {stat.description}
              </p>

              {/* Simple divider for last item on desktop */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-px h-12 bg-gradient-to-b from-transparent via-gray-300 to-transparent -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Simple bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#3B71E8] to-transparent mx-auto mt-16"
          style={{ originX: 0.5 }}
        />
      </div>
    </section>
  );
}