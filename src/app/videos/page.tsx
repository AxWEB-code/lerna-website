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
    color: "from-[#3B71E8] to-[#F28C28]",
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
    color: "from-[#F28C28] to-[#3B71E8]",
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
    color: "from-[#3B71E8] to-[#F28C28]",
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
    color: "from-[#F28C28] to-[#3B71E8]",
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
    color: "from-[#3B71E8] to-[#F28C28]",
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
    color: "from-[#F28C28] to-[#3B71E8]",
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
    <section id="videos" className="relative bg-gradient-to-br from-white via-white to-blue-50/30 py-24 overflow-hidden -mt-px">

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
      <div className="floating-icon text-4xl top-20 left-20 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">🎥</div>
      <div className="floating-icon text-3xl bottom-20 right-32 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">📚</div>
      <div className="floating-icon text-3xl top-1/3 left-10 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">🔬</div>
      <div className="floating-icon text-3xl bottom-16 right-10 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-20">⚡</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#3B71E8]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
            <span className="text-sm font-semibold bg-gradient-to-r from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              VIDEO LEARNING
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-[#1F1F1F]">Video Lessons</span>
            <br />
            <span className="bg-gradient-to-r from-[#3B71E8] via-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              Learn Visually
            </span>
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Interactive learning videos designed to help students understand complex subjects 
            through engaging visual explanations.
          </p>

          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-8 mt-8 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-[#1F1F1F]">100+</div>
              <div className="text-xs text-gray-500">Video Lessons</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-[#1F1F1F]">15k+</div>
              <div className="text-xs text-gray-500">Students</div>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-extrabold text-[#1F1F1F]">4.8</div>
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
              className="w-full px-6 py-4 bg-white/70 backdrop-blur-sm border border-gray-200/50 rounded-2xl text-[#1F1F1F] placeholder-gray-400 focus:outline-none focus:border-[#3B71E8]/30 transition-colors pl-14"
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400">🔍</span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Subject Filters */}
            <div className="flex flex-wrap gap-2 p-2 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => setActiveSubject(subject)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSubject === subject
                      ? "bg-gradient-to-r from-[#3B71E8] to-[#F28C28] text-white shadow-lg shadow-[#3B71E8]/25"
                      : "text-gray-500 hover:text-[#3B71E8] hover:bg-white/50"
                  }`}
                >
                  {subject}
                </button>
              ))}
            </div>

            {/* Level Filters */}
            <div className="flex gap-2 p-2 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeLevel === level
                      ? "bg-gradient-to-r from-[#3B71E8] to-[#F28C28] text-white shadow-lg shadow-[#3B71E8]/25"
                      : "text-gray-500 hover:text-[#3B71E8] hover:bg-white/50"
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
            <span className="text-6xl mb-4 block opacity-30">🎥</span>
            <h3 className="text-2xl font-semibold text-[#1F1F1F] mb-2">No videos found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </motion.div>
        )}

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
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28] flex items-center justify-center">
                <span className="text-3xl">⭐</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1F1F1F]">Get Full Access</h3>
                <p className="text-gray-500">Unlock all video lessons with premium subscription</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-sm text-gray-400 line-through">₦15,000</span>
                <div className="text-3xl font-extrabold text-[#3B71E8]">₦9,999</div>
                <span className="text-xs text-gray-500">per term</span>
              </div>
              <a
                href="https://wa.me/234XXXXXXXXXX?text=Hello%20I%20want%20to%20subscribe%20to%20video%20lessons"
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-[#3B71E8] to-[#F28C28] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#3B71E8]/25 transition-all duration-300"
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

const VideoCard = ({ video, index }: any) => {
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
      <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:border-[#3B71E8]/30 transition-all duration-500 overflow-hidden h-full flex flex-col">
        
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#3B71E8]/5 to-[#F28C28]/5"
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Thumbnail with Play Button */}
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl opacity-30">{video.icon}</span>
          </div>
          
          {/* Play Button Overlay */}
          <motion.div
            className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
          >
            <a
              href={video.videoUrl}
              target="_blank"
              className="w-16 h-16 bg-gradient-to-r from-[#3B71E8] to-[#F28C28] rounded-full flex items-center justify-center shadow-xl"
            >
              <span className="text-3xl ml-1 text-white">▶</span>
            </a>
          </motion.div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 px-2 py-1 bg-white/80 backdrop-blur-sm rounded-lg text-xs font-mono text-[#1F1F1F] border border-gray-200/50">
            {video.duration}
          </div>

          {/* Level Badge */}
          <div className="absolute top-3 left-3 px-2 py-1 bg-[#3B71E8]/10 rounded-lg text-xs font-mono text-[#3B71E8] border border-[#3B71E8]/30">
            {video.level}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 flex-1 flex flex-col">
          {/* Title and Instructor */}
          <div className="mb-3">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-lg font-bold text-[#1F1F1F] leading-tight flex-1">
                {video.title}
              </h3>
              <span className="px-2 py-1 bg-gray-100 rounded-lg text-xs text-gray-500 whitespace-nowrap">
                {video.subject}
              </span>
            </div>
            <p className="text-sm text-gray-500">by {video.instructor}</p>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
            {video.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {video.tags.map((tag: any, idx: number) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 rounded-lg text-xs text-gray-500"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Metadata Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-xl">
            <div className="text-center">
              <div className="text-sm font-bold text-[#1F1F1F]">{video.lessons}</div>
              <div className="text-xs text-gray-500">Lessons</div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-sm font-bold text-[#1F1F1F]">{video.views}</div>
              <div className="text-xs text-gray-500">Views</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-[#F28C28]">★ {video.rating}</div>
              <div className="text-xs text-gray-500">Rating</div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={video.videoUrl}
            target="_blank"
            className="mt-auto w-full py-3 bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 rounded-xl text-sm font-semibold text-[#3B71E8] hover:from-[#3B71E8]/20 hover:to-[#F28C28]/20 transition-all duration-300 border border-[#3B71E8]/20 text-center"
          >
            Watch Preview →
          </a>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#3B71E8]/10 to-transparent rounded-tr-2xl"></div>
      </div>
    </motion.div>
  );
};