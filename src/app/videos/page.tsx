"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const videos = [
  {
    title: "Algebra Fundamentals",
    description: "Master the basics of algebra with step-by-step explanations and practice problems.",
    subject: "Mathematics",
    level: "JSS1-3",
    duration: "45:20",
    lessons: 12,
    instructor: "Mr. Adebayo",
    thumbnail: "/thumbnails/algebra.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example1",
    views: "2.5k",
    rating: 4.8,
    icon: "🔢",
    color: "from-blue-500 to-cyan-500",
    tags: ["Algebra", "Equations", "Beginners"]
  },
  {
    title: "English Grammar Mastery",
    description: "Comprehensive grammar lessons covering parts of speech, tenses, and sentence structure.",
    subject: "English",
    level: "JSS1-3",
    duration: "52:15",
    lessons: 15,
    instructor: "Mrs. Okonkwo",
    thumbnail: "/thumbnails/english.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example2",
    views: "3.1k",
    rating: 4.9,
    icon: "📝",
    color: "from-green-500 to-emerald-500",
    tags: ["Grammar", "Writing", "Comprehension"]
  },
  {
    title: "Basic Science Experiments",
    description: "Hands-on science experiments explained in simple terms for young learners.",
    subject: "Science",
    level: "Primary 4-6",
    duration: "38:45",
    lessons: 8,
    instructor: "Dr. Eze",
    thumbnail: "/thumbnails/science.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example3",
    views: "1.8k",
    rating: 4.7,
    icon: "🔬",
    color: "from-purple-500 to-pink-500",
    tags: ["Experiments", "Practical", "Science"]
  },
  {
    title: "Introduction to Government",
    description: "Learn about the structure and functions of government in Nigeria.",
    subject: "Social Studies",
    level: "SS1-2",
    duration: "41:30",
    lessons: 10,
    instructor: "Mr. Okafor",
    thumbnail: "/thumbnails/government.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example4",
    views: "1.2k",
    rating: 4.6,
    icon: "🏛️",
    color: "from-orange-500 to-red-500",
    tags: ["Government", "Civics", "Politics"]
  },
  {
    title: "Literary Analysis",
    description: "Deep dive into analyzing prose, poetry, and drama for literature students.",
    subject: "Literature",
    level: "SS1-3",
    duration: "55:10",
    lessons: 14,
    instructor: "Prof. Adeleke",
    thumbnail: "/thumbnails/literature.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example5",
    views: "2.2k",
    rating: 4.9,
    icon: "📚",
    color: "from-indigo-500 to-purple-500",
    tags: ["Poetry", "Prose", "Drama"]
  },
  {
    title: "Physics Made Easy",
    description: "Simplified physics concepts with real-world examples and demonstrations.",
    subject: "Physics",
    level: "SS1-3",
    duration: "48:50",
    lessons: 16,
    instructor: "Mr. Johnson",
    thumbnail: "/thumbnails/physics.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example6",
    views: "2.8k",
    rating: 4.8,
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
    tags: ["Physics", "Mechanics", "Energy"]
  }
];

const subjects = [
  "All Subjects",
  "Mathematics",
  "English",
  "Science",
  "Social Studies",
  "Literature",
  "Physics"
];

const levels = ["All Levels", "Primary", "JSS", "SSS"];

export default function VideoLessons() {
  const [activeSubject, setActiveSubject] = useState("All Subjects");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videos.filter(video => {
    const matchesSubject = activeSubject === "All Subjects" || video.subject === activeSubject;
    const matchesLevel = activeLevel === "All Levels" || video.level.includes(activeLevel);
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesLevel && matchesSearch;
  });

  return (
    <section id="videos" className="relative bg-[#0a0e1a] text-white py-24 overflow-hidden">
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
            VIDEO LEARNING
          </span>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Video Lessons
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Learn Visually
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive learning videos designed to help students understand complex subjects 
            through engaging visual explanations.
          </p>

          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-xs text-gray-500">Video Lessons</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15k+</div>
              <div className="text-xs text-gray-500">Students</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.8</div>
              <div className="text-xs text-gray-500">Avg Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search videos by title, subject, or instructor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-white/[0.03] border border-white/[0.05] rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500/30 transition-colors pl-14"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-gray-500">🔍</span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Subject Filters */}
            <div className="flex flex-wrap gap-2 p-2 bg-white/[0.02] rounded-2xl border border-white/[0.05]">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => setActiveSubject(subject)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSubject === subject
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>

            {/* Level Filters */}
            <div className="flex gap-2 p-2 bg-white/[0.02] rounded-2xl border border-white/[0.05]">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeLevel === level
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <VideoCard key={index} video={video} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <span className="text-6xl mb-4 block">🎥</span>
            <h3 className="text-2xl font-semibold mb-2">No videos found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </motion.div>
        )}

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
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-3xl">⭐</span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Get Full Access</h3>
                <p className="text-gray-400">Unlock all video lessons with premium subscription</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-sm text-gray-400 line-through">₦15,000</span>
                <div className="text-3xl font-bold text-green-400">₦9,999</div>
                <span className="text-xs text-gray-500">per term</span>
              </div>
              <a
                href="https://wa.me/234XXXXXXXXXX?text=Hello%20I%20want%20to%20subscribe%20to%20video%20lessons"
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                Subscribe Now →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const VideoCard = ({ video, index }) => {
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
      <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] rounded-2xl border border-white/[0.05] hover:border-green-500/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
        
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5"
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Thumbnail with Play Button */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-30">{video.icon}</span>
          </div>
          
          {/* Play Button Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          >
            <a
              href={video.videoUrl}
              target="_blank"
              className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl"
            >
              <span className="text-3xl ml-1">▶</span>
            </a>
          </motion.div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded-lg text-xs font-mono text-white border border-white/10">
            {video.duration}
          </div>

          {/* Level Badge */}
          <div className="absolute top-3 left-3 px-2 py-1 bg-green-500/20 rounded-lg text-xs font-mono text-green-400 border border-green-500/30">
            {video.level}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 flex-1 flex flex-col">
          {/* Title and Instructor */}
          <div className="mb-3">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-lg font-semibold leading-tight flex-1">
                {video.title}
              </h3>
              <span className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400 whitespace-nowrap">
                {video.subject}
              </span>
            </div>
            <p className="text-sm text-gray-400">by {video.instructor}</p>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {video.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {video.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-white/5 rounded-lg text-xs text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Metadata Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-white/[0.02] rounded-xl">
            <div className="text-center">
              <div className="text-sm font-semibold text-white">{video.lessons}</div>
              <div className="text-xs text-gray-500">Lessons</div>
            </div>
            <div className="text-center border-x border-white/[0.05]">
              <div className="text-sm font-semibold text-white">{video.views}</div>
              <div className="text-xs text-gray-500">Views</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-yellow-400">★ {video.rating}</div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={video.videoUrl}
            target="_blank"
            className="mt-auto w-full py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl text-sm font-medium text-green-400 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300 border border-green-500/20 text-center"
          >
            Watch Preview →
          </a>
        </div>
      </div>
    </motion.div>
  );
};