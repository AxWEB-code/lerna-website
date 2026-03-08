"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function ArticlePage() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <article className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/[0.05] z-50">
        <motion.div 
          className="h-full bg-green-500"
          style={{ scaleX: 0, transformOrigin: "0%" }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Back to top button - appears on scroll */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center justify-center text-green-400 hover:bg-green-500/20 transition-colors z-50 backdrop-blur-sm"
      >
        ↑
      </motion.button>

      <div className="max-w-3xl mx-auto px-6 py-24">
        {/* Article Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Category with decoration */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-green-400 text-sm font-mono tracking-widest">
              FUTURE OF EDUCATION
            </span>
            <div className="h-px w-12 bg-green-500/30" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            The Future of Learning:{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              How AI is Reshaping Education in Africa
            </span>
          </h1>

          {/* Author metadata with rich details */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Author avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">
                CO
              </div>
              <div>
                <p className="font-medium">Mrs Chiwendu Okechuckwu</p>
                <p className="text-sm text-gray-500">Education Researcher & Consultant</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">📅 Mar 22, 2026</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span className="flex items-center gap-1">⏱️ 8 min read</span>
            </div>
          </div>

          {/* Engagement bar */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.05]">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isLiked ? 'bg-red-500/10 text-red-400' : 'bg-white/[0.05] text-gray-400 hover:text-white'
              }`}
            >
              <span>{isLiked ? '❤️' : '🤍'}</span>
              <span className="text-sm">124</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/[0.05] rounded-lg text-gray-400 hover:text-white transition-colors">
              <span>💬</span>
              <span className="text-sm">23</span>
            </button>
            <button 
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`ml-auto px-4 py-2 rounded-lg transition-colors ${
                isBookmarked ? 'bg-green-500/10 text-green-400' : 'bg-white/[0.05] text-gray-400 hover:text-white'
              }`}
            >
              {isBookmarked ? '🔖 Bookmarked' : '🔖 Save'}
            </button>
          </div>
        </motion.header>

        {/* Hero Image with caption */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="aspect-video rounded-xl bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20 border border-white/[0.05] flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-8xl opacity-30 group-hover:scale-110 group-hover:opacity-40 transition-all duration-500">📚</span>
          </div>
          <figcaption className="text-sm text-gray-500 mt-3 text-center">
            AI and digital learning platforms are transforming classrooms across Africa
          </figcaption>
        </motion.figure>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-gray-300 leading-relaxed text-lg"
        >
          {/* Introduction with dropcap */}
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-green-400 first-letter:mr-3 first-letter:float-left">
            Artificial intelligence is rapidly transforming the education
            landscape across Africa. From personalized learning tools to
            automated administrative systems, technology is enabling schools
            to operate more efficiently and deliver better learning outcomes.
          </p>

          <p>
            In many African schools, teachers manage large classrooms with
            limited resources. Digital platforms can help bridge that gap by
            providing tools for attendance tracking, academic analytics,
            and digital learning materials.
          </p>

          {/* Pull quote for emphasis */}
          <aside className="my-10 p-6 bg-green-500/5 border-l-4 border-green-500 rounded-r-xl">
            <p className="text-xl italic text-white">
              "Technology isn't replacing teachers — it's empowering them to focus on what matters most: teaching."
            </p>
            <p className="text-sm text-gray-500 mt-2">— Mrs Chiwendu Okechuckwu</p>
          </aside>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 text-sm">01</span>
            Technology as an Educational Equalizer
          </h2>

          <p>
            When schools adopt modern learning platforms, they unlock access
            to global educational resources. Students can watch lessons,
            review materials, and practice exercises outside the classroom.
          </p>

          {/* Stats mini-card */}
          <div className="grid grid-cols-3 gap-4 my-8">
            {[
              { label: 'Schools using AI', value: '45%' },
              { label: 'Improved grades', value: '67%' },
              { label: 'Teacher satisfaction', value: '89%' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-white/[0.02] rounded-xl border border-white/[0.05]">
                <div className="text-2xl font-bold text-green-400">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          <p>
            For administrators, school management platforms help organize
            student data, finances, academic results, and communication
            between parents and teachers.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-12 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 text-sm">02</span>
            Preparing Students for the Future
          </h2>

          <p>
            The future workforce will rely heavily on digital skills.
            Schools that integrate technology early give their students
            a stronger advantage in tomorrow's economy.
          </p>

          {/* Key takeaways */}
          <div className="my-10 p-6 bg-white/[0.02] rounded-xl border border-white/[0.05]">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <span className="text-green-400">✨</span>
              Key Takeaways
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>AI tools can reduce administrative workload by up to 40%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Students with access to digital resources show 30% better engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Schools need sustainable implementation strategies</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mt-12"
        >
          {['AI in Education', 'EdTech', 'Africa', 'Future of Learning', 'Digital Transformation'].map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-white/[0.05] rounded-full text-xs text-gray-400">
              #{tag}
            </span>
          ))}
        </motion.div>

        {/* Article Footer with share */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/[0.05]"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-gray-500">Written by</p>
              <p className="font-medium">Mrs Chiwendu Okechuckwu</p>
              <p className="text-sm text-gray-500 mt-1">Education Researcher & Consultant</p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 mr-2">Share:</span>
              {['𝕏', '💼', '🔗'].map((icon, i) => (
                <button key={i} className="w-8 h-8 bg-white/[0.05] rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center text-gray-400">
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </motion.footer>

        {/* Related articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-lg font-semibold mb-6">Related articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Digital Literacy in Primary Schools", readTime: "5 min" },
              { title: "Teacher Training for AI Integration", readTime: "6 min" }
            ].map((item, i) => (
              <a key={i} href="#" className="p-4 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors border border-white/[0.05]">
                <h4 className="font-medium mb-2 group-hover:text-green-400">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.readTime} read</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </article>
  );
}