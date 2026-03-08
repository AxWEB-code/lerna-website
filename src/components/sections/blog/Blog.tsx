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
    <section className="relative bg-[#0a0e1a] text-white py-24">
      {/* Sophisticated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.02] via-transparent to-blue-500/[0.02]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header - Always visible immediately */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-green-400 font-mono text-sm tracking-widest">
              BLOG
            </span>
            <div className="h-px w-12 bg-green-500/30" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Insights & Perspectives
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl">
            Thought leadership, practical advice, and fresh perspectives on 
            education from experts across Africa.
          </p>
        </motion.div>

        {/* Topic filters - Always visible immediately */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-white/[0.05]"
        >
          {topics.map((topic, i) => (
            <button
              key={i}
              onClick={() => setActiveTopic(topic)}
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                activeTopic === topic
                  ? 'bg-green-500/10 text-green-400 border border-green-500/30' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {topic}
            </button>
          ))}
        </motion.div>

        {/* Featured post - Always visible immediately (removed inView dependency) */}
        {showFeatured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-3 py-1 bg-green-500/10 rounded-full text-xs text-green-400 mb-4">
                  {allPosts.featured.category}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {allPosts.featured.title}
                </h3>
                <p className="text-gray-400 text-lg mb-6">
                  {allPosts.featured.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <p className="font-medium">{allPosts.featured.author}</p>
                    <p className="text-sm text-gray-500">{allPosts.featured.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{allPosts.featured.date}</span>
                  <span>•</span>
                  <span>{allPosts.featured.readTime}</span>
                </div>
                <a href="/blog/the-future-of-learning" className="inline-flex items-center gap-2 mt-6 text-green-400 hover:text-green-300 transition-colors">
                  Read featured article
                  <span className="text-xl">→</span>
                </a>
              </div>
              <div className="relative aspect-[4/3] bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl border border-white/[0.05] flex items-center justify-center">
                <span className="text-8xl opacity-30">📚</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results count - Always visible immediately */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="mb-4 text-sm text-gray-500"
        >
          Showing {filteredPosts.length} articles {activeTopic !== "All Topics" && `in ${activeTopic}`}
        </motion.div>

        {/* Recent posts grid - These can still use inView for scroll animation */}
        <div ref={ref}>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-semibold">
              {activeTopic === "All Topics" ? "Recent articles" : `${activeTopic} articles`}
            </h3>
            <div className="h-px flex-1 bg-white/[0.05]" />
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
                <a href="#" className="block p-6 rounded-xl hover:bg-white/[0.02] transition-colors border border-transparent hover:border-white/[0.05]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-green-500/10 rounded-full text-green-400">
                      {post.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
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

        {/* Newsletter - Can still use inView for scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 p-8 bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl border border-white/[0.05]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">Get insights in your inbox</h4>
              <p className="text-gray-400">Weekly articles on education, technology, and school leadership.</p>
            </div>
            <div className="flex gap-2 min-w-[300px]">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/[0.05] rounded-lg border border-white/[0.05] focus:outline-none focus:border-green-500/30 text-sm"
              />
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}