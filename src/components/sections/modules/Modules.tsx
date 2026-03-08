"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const modules = [
  {
    title: "Student Information System",
    icon: "🎓",
    description: "Manage student enrollment, class assignments and academic history through a centralized digital platform.",
    features: [
      "Student profiles & academic records",
      "Class and department assignments",
      "Academic progress tracking",
      "Digital student database"
    ],
    image: "/illustrations/student-system.svg",
    category: "academic"
  },
  {
    title: "Result & Grading System",
    icon: "📝",
    description: "Teachers can input scores, compute grades and generate digital report cards automatically.",
    features: [
      "Digital score entry",
      "Automated grading engine",
      "Printable result slips",
      "Performance analytics"
    ],
    image: "/illustrations/data analytics.svg",
    category: "academic"
  },
  {
    title: "School Finance System",
    icon: "💳",
    description: "Track school fees, manage payments and maintain financial records securely.",
    features: [
      "Online fee payments",
      "Payment history tracking",
      "Financial reports",
      "Transaction monitoring"
    ],
    image: "/illustrations/online payment.svg",
    category: "finance"
  },
  {
    title: "Parent Portal",
    icon: "👨‍👩‍👧",
    description: "Parents can monitor student performance, attendance and school payments in real time.",
    features: [
      "Access student results",
      "Monitor attendance",
      "Pay school fees online",
      "Receive school updates"
    ],
    image: "/illustrations/online learning.svg",
    category: "communication"
  }
];

const categories = [
  { id: "all", label: "All Modules" },
  { id: "academic", label: "Academic" },
  { id: "finance", label: "Finance" },
  { id: "communication", label: "Communication" }
];

export default function Modules() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredModules = activeCategory === "all" 
    ? modules 
    : modules.filter(m => m.category === activeCategory);

  return (
    <section id="modules" className="relative bg-[#0a0e1a] text-white py-24 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_50%)]" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-green-400 font-mono text-sm tracking-widest mb-4 block">
            INTEGRATED EDUCATIONAL PLATFORM
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Systems,
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Built for Modern Schools
            </span>
          </h2>

          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Lerna combines academic management, finance, communication and learning infrastructure 
            into one powerful, seamless platform.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-green-500 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Card Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredModules.map((module, index) => (
            <ModuleCard 
              key={index} 
              module={module} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ModuleCard = ({ module, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      {/* Clean Card Design - Make it flex column with full height */}
      <div className="relative bg-white/[0.03] rounded-2xl p-6 border border-white/[0.05] hover:border-green-500/30 transition-all duration-300 h-full flex flex-col">
        
        {/* Header with Icon and Title - Fixed height section */}
        <div className="flex items-start gap-3 mb-4 min-h-[60px]">
          <span className="text-2xl bg-white/5 w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-green-500/10 transition-colors flex-shrink-0">
            {module.icon}
          </span>
          <div>
            <span className="text-xs font-mono text-green-500/60 block">
              Module {(index + 1).toString().padStart(2, '0')}
            </span>
            <h3 className="text-lg font-semibold leading-tight">
              {module.title}
            </h3>
          </div>
        </div>

        {/* Description - Fixed height with 2 lines */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 min-h-[40px]">
          {module.description}
        </p>

        {/* Image - Fixed height */}
        <div className="relative mb-4 rounded-lg bg-white/[0.02] p-3 h-24 flex items-center justify-center">
          <img
            src={module.image}
            alt={module.title}
            className="max-h-16 w-auto object-contain"
          />
        </div>

        {/* Features - 2-column grid - will take remaining space if needed */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {module.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 text-xs text-gray-300"
            >
              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-green-500/10 flex items-center justify-center">
                <span className="text-green-400 text-[10px]">✓</span>
              </span>
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};