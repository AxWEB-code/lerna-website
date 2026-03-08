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
    color: "from-blue-500 to-cyan-500"
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
    color: "from-green-500 to-emerald-500"
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
    color: "from-purple-500 to-pink-500"
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
    color: "from-orange-500 to-red-500"
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
    color: "from-teal-500 to-green-500"
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
    color: "from-indigo-500 to-purple-500"
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
    <section className="relative bg-[#0a0e1a] text-white py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-green-400 font-mono text-sm tracking-widest mb-4 block">
            TEACHING RESOURCES
          </span>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Educational Materials
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              For Teachers & Schools
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Access premium lesson plans, schemes of work and teaching
            materials designed to support modern classrooms.
          </p>

          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-xs text-gray-500">Materials</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1.2k+</div>
              <div className="text-xs text-gray-500">Downloads</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.8</div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-12 p-4 bg-white/[0.02] rounded-2xl border border-white/[0.05]"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-green-500/50"
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
          className="mt-20 p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-3xl border border-green-500/20 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-2xl">🎁</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Get the Complete Bundle</h3>
                <p className="text-gray-400">All materials at 30% discount</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="text-sm text-gray-400 line-through">₦41,000</span>
                <div className="text-2xl font-bold text-green-400">₦28,700</div>
              </div>
              <a
                href="https://wa.me/234XXXXXXXXXX?text=Hello%20I%20want%20to%20purchase%20the%20complete%20bundle"
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
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
      <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] rounded-2xl p-6 border border-white/[0.05] hover:border-green-500/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
        
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"
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
                <span className="text-xs font-mono text-green-500/60 block">
                  {material.category}
                </span>
                <h3 className="text-lg font-semibold leading-tight">
                  {material.title}
                </h3>
              </div>
            </div>
            
            {/* Badge */}
            <div className="px-2 py-1 bg-white/5 rounded-lg text-xs font-mono text-gray-400 border border-white/10">
              {material.level}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {material.description}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <span>📄</span> {material.format}
            </span>
            <span className="flex items-center gap-1">
              <span>📑</span> {material.pages} pages
            </span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {material.features.map((feature, idx) => (
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

          {/* Price and CTA */}
          <div className="mt-auto pt-4 border-t border-white/[0.05] flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-500 block">Price</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                ₦{material.price}
              </span>
            </div>
            <a
              href={`https://wa.me/+2349023419897?text=Hello%20I%20want%20to%20purchase%20the%20${encodeURIComponent(material.title)}`}
              target="_blank"
              className="px-4 py-2 bg-green-500/10 rounded-xl text-sm font-medium text-green-400 hover:bg-green-500/20 transition-colors border border-green-500/20"
            >
              Purchase →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};