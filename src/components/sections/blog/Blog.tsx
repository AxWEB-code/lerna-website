"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// Sample data with categories
const allPosts = {
  featured: {
    title: "The Future of Learning: How AI is Reshaping Education in Africa",
    excerpt: "Exploring the intersection of technology and pedagogy, and what it means for schools preparing students for tomorrow's workforce.",
    author: "Mrs Chiwendu Okechuckwu",
    role: "Education Director",
    readTime: "8 min read",
    date: "Mar 22, 2026",
    image: "/blog/featured.jpg",
    category: "Technology"
  },
  recent: [
    {
      title: "Building a Culture of Reading in Primary Schools",
      excerpt: "Simple strategies that transformed literacy rates across 15 schools in Lagos.",
      author: "Michael Adebayo",
      date: "Mar 28, 2026",
      readTime: "5 min",
      category: "Teaching"
    },
    {
      title: "Financial Literacy: A Missing Piece in School Curriculum",
      excerpt: "Why teaching money management early creates financially responsible adults.",
      author: "Chioma Eze",
      date: "Mar 25, 2026",
      readTime: "4 min",
      category: "Policy"
    },
    {
      title: "Teacher Training in the Digital Age",
      excerpt: "How continuous professional development is evolving with technology.",
      author: "Prof. James Okafor",
      date: "Mar 22, 2026",
      readTime: "6 min",
      category: "Teaching"
    },
    {
      title: "Parent-Teacher Collaboration: New Approaches",
      excerpt: "Modern tools and techniques for stronger school-home partnerships.",
      author: "Grace Williams",
      date: "Mar 20, 2026",
      readTime: "5 min",
      category: "Parenting"
    },
    {
      title: "School Leadership in Challenging Times",
      excerpt: "How principals are navigating educational reforms and maintaining standards.",
      author: "Dr. Adebayo Ola",
      date: "Mar 18, 2026",
      readTime: "7 min",
      category: "Leadership"
    },
    {
      title: "Latest Research in Child Development",
      excerpt: "New findings on how children learn and what it means for classroom practice.",
      author: "Prof. Grace Okonkwo",
      date: "Mar 15, 2026",
      readTime: "6 min",
      category: "Research"
    }
  ]
};

const topics = [
  "All Topics", "Teaching", "Technology", "Leadership", "Policy", "Parenting", "Research"
];

export default function Blog() {
  const [activeTopic, setActiveTopic] = useState("All Topics");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filter posts based on active topic
  const filteredPosts = activeTopic === "All Topics" 
    ? allPosts.recent 
    : allPosts.recent.filter(post => post.category === activeTopic);

  // Check if featured post matches filter
  const showFeatured = activeTopic === "All Topics" || allPosts.featured.category === activeTopic;

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
      <div className="floating-icon text-4xl top-20 left-20 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">📝</div>
      <div className="floating-icon text-3xl bottom-20 right-32 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">📚</div>
      <div className="floating-icon text-3xl top-1/3 left-10 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">💡</div>
      <div className="floating-icon text-3xl bottom-16 right-10 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">📊</div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            <span className="text-[#1F1F1F]">Insights &</span>
            <br />
            <span className="bg-gradient-to-r from-[#3B71E8] via-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              Perspectives
            </span>
          </h2>
          
          <p className="text-gray-500 text-lg max-w-2xl">
            Thought leadership, practical advice, and fresh perspectives on 
            education from experts across Africa.
          </p>
        </motion.div>

        {/* Topic filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-gray-200"
        >
          {topics.map((topic, i) => (
            <button
              key={i}
              onClick={() => setActiveTopic(topic)}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeTopic === topic
                  ? 'bg-gradient-to-r from-[#3B71E8] to-[#F28C28] text-white shadow-lg shadow-[#3B71E8]/25' 
                  : 'text-gray-500 hover:text-[#3B71E8] hover:bg-white/50 border border-transparent'
              }`}
            >
              {topic}
            </button>
          ))}
        </motion.div>

        {/* Featured post */}
        {showFeatured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 rounded-full text-xs text-[#3B71E8] mb-4">
                  {allPosts.featured.category}
                </div>
                <h3 className="text-3xl lg:text-4xl font-extrabold text-[#1F1F1F] mb-4 leading-tight">
                  {allPosts.featured.title}
                </h3>
                <p className="text-gray-500 text-lg mb-6">
                  {allPosts.featured.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <p className="font-bold text-[#1F1F1F]">{allPosts.featured.author}</p>
                    <p className="text-sm text-gray-500">{allPosts.featured.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>{allPosts.featured.date}</span>
                  <span>•</span>
                  <span>{allPosts.featured.readTime}</span>
                </div>
                <a href="/blog/the-future-of-learning" className="inline-flex items-center gap-2 mt-6 text-[#3B71E8] hover:text-[#F28C28] transition-colors font-semibold">
                  Read featured article
                  <span className="text-xl">→</span>
                </a>
              </div>
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#3B71E8]/10 to-[#F28C28]/10 rounded-2xl border border-gray-200 flex items-center justify-center">
                <span className="text-8xl opacity-30">📚</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="mb-4 text-sm text-gray-400"
        >
          Showing {filteredPosts.length} articles {activeTopic !== "All Topics" && `in ${activeTopic}`}
        </motion.div>

        {/* Recent posts grid */}
        <div ref={ref}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-bold text-[#1F1F1F]">
              {activeTopic === "All Topics" ? "Recent articles" : `${activeTopic} articles`}
            </h3>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <a href="#" className="block p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:border-[#3B71E8]/30 hover:shadow-lg hover:shadow-[#3B71E8]/10 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 rounded-full text-[#3B71E8]">
                      {post.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#1F1F1F] mb-2 group-hover:text-[#3B71E8] transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-500 text-sm mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#3B71E8]/10 to-transparent rounded-tr-xl"></div>
                </a>
              </motion.article>
            ))}
          </div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400">No articles found in this category.</p>
            </motion.div>
          )}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 p-8 bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 rounded-2xl border border-[#3B71E8]/20 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-[#1F1F1F] mb-2">Get insights in your inbox</h4>
              <p className="text-gray-500">Weekly articles on education, technology, and school leadership.</p>
            </div>
            <div className="flex gap-2 min-w-[300px]">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200/50 focus:outline-none focus:border-[#3B71E8]/30 text-sm text-[#1F1F1F] placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#3B71E8] to-[#F28C28] text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-[#3B71E8]/25 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}