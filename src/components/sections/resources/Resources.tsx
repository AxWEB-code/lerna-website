export default function Resources() {
  return (
    <section id="resources" className="relative bg-[#0b0f1a] text-white py-24 overflow-hidden hero-grid">

      {/* glow */}
      <div className="absolute top-40 left-1/3 w-[360px] h-[360px] bg-green-500 blur-[160px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Heading */}

        <div className="text-center max-w-xl mx-auto mb-16">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">

            Educational Resources
            <br />

            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              for Teachers and Students
            </span>

          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Access teaching materials, learning videos and
            structured educational resources built to support
            modern classrooms.
          </p>

        </div>


        {/* Resource Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          {/* CARD 1 */}

          <div className="resource-card">

            <div className="resource-thumb">🎥</div>

            <h3 className="resource-title">
              Video Lessons
            </h3>

            <p className="resource-text">
              Interactive learning videos designed to help
              students understand complex subjects.
            </p>

            <a href="/videos" className="resource-btn">
Watch Lessons →
</a>

          </div>


          {/* CARD 2 */}

          <div className="resource-card">

            <div className="resource-thumb">📚</div>

            <h3 className="resource-title">
              Lesson Plans
            </h3>

            <p className="resource-text">
              Structured lesson plans prepared for teachers
              across multiple subjects and grade levels.
            </p>

            <a href="/material" className="resource-btn">
View Resources →
</a>

          </div>


          {/* CARD 3 */}

          <div className="resource-card">

            <div className="resource-thumb">📝</div>

            <h3 className="resource-title">
              Scheme of Work
            </h3>

            <p className="resource-text">
              Organized academic schemes that guide
              teaching progression throughout the term.
            </p>

            <a href="/material" className="resource-btn">
Explore →
</a>

          </div>


          {/* CARD 4 */}

          <div className="resource-card">

            <div className="resource-thumb">💬</div>

            <h3 className="resource-title">
              Teaching Materials
            </h3>

            <p className="resource-text">
              Premium educational materials available
              for schools and teachers to purchase.
            </p>

             <a href="/material" className="resource-btn">
View Resources →
</a>

          </div>

        </div>

      </div>

    </section>
  )
}