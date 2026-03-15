"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const materials = [
  {
    title: "Basic Mathematics Lesson Plan",
    description: "Full term lesson plan covering JSS1 mathematics topics with exercises and teacher guide.",
    price: "5,000",
    category: "Lesson Plan",
    level: "JSS1",
    format: "PDF",
    pages: "85",
    features: ["Weekly lesson breakdown", "Practice exercises", "Teacher guide", "Assessment tools"],
    icon: "📐",
    color: "from-[#3B71E8] to-[#F28C28]"
  },
  {
    title: "Junior Secondary Scheme of Work",
    description: "Structured scheme of work for JSS classes aligned with national curriculum standards.",
    price: "8,000",
    category: "Scheme of Work",
    level: "JSS1-3",
    format: "PDF + DOC",
    pages: "120",
    features: ["Termly breakdown", "Curriculum alignment", "Learning objectives", "Resource lists"],
    icon: "📚",
    color: "from-[#F28C28] to-[#3B71E8]"
  },
  {
    title: "Primary School Curriculum Guide",
    description: "Complete curriculum structure for primary school subjects and academic progression.",
    price: "6,500",
    category: "Curriculum Guide",
    level: "Primary 1-6",
    format: "PDF",
    pages: "95",
    features: ["Subject breakdown", "Learning outcomes", "Teaching strategies", "Assessment guide"],
    icon: "📖",
    color: "from-[#3B71E8] to-[#F28C28]"
  },
  {
    title: "English Language Lesson Notes",
    description: "Comprehensive lesson notes for JSS English with grammar, comprehension and composition.",
    price: "5,500",
    category: "Lesson Notes",
    level: "JSS1-3",
    format: "PDF",
    pages: "110",
    features: ["Grammar exercises", "Comprehension passages", "Essay topics", "Answer keys"],
    icon: "✍️",
    color: "from-[#F28C28] to-[#3B71E8]"
  },
  {
    title: "Science Practical Handbook",
    description: "Step-by-step guide for basic science experiments with safety instructions.",
    price: "7,000",
    category: "Handbook",
    level: "JSS1-3",
    format: "PDF",
    pages: "75",
    features: ["Experiment guides", "Safety protocols", "Equipment lists", "Observation sheets"],
    icon: "🔬",
    color: "from-[#3B71E8] to-[#F28C28]"
  },
  {
    title: "Examination Question Bank",
    description: "Pool of examination questions for all subjects with marking schemes.",
    price: "9,000",
    category: "Question Bank",
    level: "JSS1-3",
    format: "PDF + DOC",
    pages: "200+",
    features: ["Objective questions", "Theory questions", "Marking schemes", "Termly exams"],
    icon: "📝",
    color: "from-[#F28C28] to-[#3B71E8]"
  }
];

const categories = ["All", "Lesson Plan", "Scheme of Work", "Curriculum Guide", "Handbook", "Question Bank"];

export default function Materials() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  const filteredMaterials = activeCategory === "All" 
    ? materials 
    : materials.filter(m => m.category === activeCategory);

  return (
    <section className="relative bg-gradient-to-br from-white via-white to-blue-50/30 py-24 overflow-hidden -mt-px">

      {/* Premium animated background elements */}
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
      <div className="floating-icon text-4xl top-20 left-20 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">📚</div>
      <div className="floating-icon text-3xl bottom-20 right-32 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">📐</div>
      <div className="floating-icon text-3xl top-1/3 left-10 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">🔬</div>
      <div className="floating-icon text-3xl bottom-16 right-10 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">✍️</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-[#1F1F1F]">Educational Materials</span>
            <br />
            <span className="bg-gradient-to-r from-[#3B71E8] via-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              For Teachers & Schools
            </span>
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Access premium lesson plans, schemes of work and teaching
            materials designed to support modern classrooms.
          </p>

          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-8 mt-8 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-[#1F1F1F]">50+</div>
              <div className="text-xs text-gray-500">Materials</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-[#1F1F1F]">1.2k+</div>
              <div className="text-xs text-gray-500">Downloads</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-[#1F1F1F]">4.8</div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-12 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#3B71E8] to-[#F28C28] text-white shadow-lg shadow-[#3B71E8]/25"
                    : "text-gray-500 hover:text-[#3B71E8] hover:bg-white/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/70 border border-gray-200/50 rounded-xl px-4 py-2 text-sm text-[#1F1F1F] focus:outline-none focus:border-[#3B71E8]/30"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
          </select>
        </motion.div>

        {/* Materials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material, index) => (
            <MaterialCard key={index} material={material} index={index} />
          ))}
        </div>

        {/* Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 p-8 bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 rounded-3xl border border-[#3B71E8]/20 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28] flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1F1F1F]">Get the Complete Bundle</h3>
                <p className="text-gray-500">All materials at 30% discount</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="text-sm text-gray-400 line-through">₦41,000</span>
                <div className="text-2xl font-extrabold text-[#3B71E8]">₦28,700</div>
              </div>
              <a
                href="https://wa.me/+2349023419897?text=Hello%20I%20want%20to%20purchase%20the%20complete%20bundle"
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-[#3B71E8] to-[#F28C28] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#3B71E8]/25 transition-all duration-300"
              >
                Get Bundle →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const MaterialCard = ({ material, index }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:border-[#3B71E8]/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
        
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#3B71E8]/5 to-[#F28C28]/5"
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Top Accent */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${material.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Header */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${material.color} bg-opacity-10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                {material.icon}
              </div>
              <div>
                <span className="text-xs font-mono text-[#3B71E8]/60 block">
                  {material.category}
                </span>
                <h3 className="text-lg font-bold text-[#1F1F1F] leading-tight">
                  {material.title}
                </h3>
              </div>
            </div>
            
            {/* Badge */}
            <div className="px-2 py-1 bg-gray-100 rounded-lg text-xs font-mono text-gray-500 border border-gray-200">
              {material.level}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
            {material.description}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <span>📄</span> {material.format}
            </span>
            <span className="flex items-center gap-1">
              <span>📑</span> {material.pages} pages
            </span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {material.features.map((feature: any, idx: number) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 text-xs text-gray-500"
              >
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#3B71E8]/10 flex items-center justify-center">
                  <span className="text-[#3B71E8] text-[10px]">✓</span>
                </span>
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>

          {/* Price and CTA */}
          <div className="mt-auto pt-4 border-t border-gray-200/50 flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 block">Price</span>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
                ₦{material.price}
              </span>
            </div>
            <a
              href={`https://wa.me/+2349023419897?text=Hello%20I%20want%20to%20purchase%20the%20${encodeURIComponent(material.title)}`}
              target="_blank"
              className="px-4 py-2 bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 rounded-xl text-sm font-semibold text-[#3B71E8] hover:from-[#3B71E8]/20 hover:to-[#F28C28]/20 transition-all duration-300 border border-[#3B71E8]/20"
            >
              Purchase →
            </a>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#3B71E8]/10 to-transparent rounded-tr-2xl"></div>
      </div>
    </motion.div>
  );
};