export default function Features() {
  return (
    <section id="features" className="relative bg-[#0b0f1a] text-white py-24 overflow-hidden hero-grid animated-bg">

      {/* floating icons like hero */}
      <div className="floating-icon text-4xl top-20 left-20">🎓</div>
      <div className="floating-icon text-3xl bottom-20 right-32">📚</div>
      <div className="floating-icon text-3xl top-1/2 left-10">📊</div>
      <div className="floating-icon text-3xl bottom-16 right-10">🏫</div>

      {/* glow background */}
      <div className="absolute top-40 left-1/3 w-[420px] h-[420px] bg-green-500 blur-[180px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Everything Your School
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Needs to Run Smarter
            </span>
          </h2>

          <p className="text-gray-400 mt-4">
            Lerna provides a complete infrastructure for modern schools
            to manage academics, communication and operations.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {/* Student Management */}
          <div className="feature-card">
            <div className="text-green-400 text-3xl mb-2">🎓</div>

            <h3 className="mt-4 font-semibold text-lg">
              Student Management
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Easily manage student profiles, class assignments,
              academic levels and personal records from one system.
            </p>

            <ul className="text-xs text-gray-500 mt-3 space-y-1">
              <li>• Student profile records</li>
              <li>• Class and department allocation</li>
              <li>• Academic history tracking</li>
            </ul>
          </div>

          {/* Attendance */}
          <div className="feature-card">
            <div className="text-green-400 text-3xl mb-2">📊</div>

            <h3 className="mt-4 font-semibold text-lg">
              Attendance Tracking
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Monitor daily student attendance with digital
              registers and automated reporting tools.
            </p>

            <ul className="text-xs text-gray-500 mt-3 space-y-1">
              <li>• Smart attendance recording</li>
              <li>• Daily class tracking</li>
              <li>• Attendance performance reports</li>
            </ul>
          </div>

          {/* Results */}
          <div className="feature-card">
            <div className="text-green-400 text-3xl mb-2">📝</div>

            <h3 className="mt-4 font-semibold text-lg">
              Result Management
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Teachers can input scores, compute results,
              and generate report cards digitally.
            </p>

            <ul className="text-xs text-gray-500 mt-3 space-y-1">
              <li>• Score input & grading</li>
              <li>• Automated result computation</li>
              <li>• Printable result slips</li>
            </ul>
          </div>

          {/* Parent Portal */}
          <div className="feature-card">
            <div className="text-green-400 text-3xl mb-2">👨‍👩‍👧</div>

            <h3 className="mt-4 font-semibold text-lg">
              Parent Portal
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Parents stay informed with access to student
              results, attendance and school announcements.
            </p>

            <ul className="text-xs text-gray-500 mt-3 space-y-1">
              <li>• Student progress monitoring</li>
              <li>• Attendance updates</li>
              <li>• School communication</li>
            </ul>
          </div>

          {/* Payments */}
          <div className="feature-card">
            <div className="text-green-400 text-3xl mb-2">💳</div>

            <h3 className="mt-4 font-semibold text-lg">
              School Payments
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Accept school fee payments securely with
              automated receipts and payment tracking.
            </p>

            <ul className="text-xs text-gray-500 mt-3 space-y-1">
              <li>• Online fee payments</li>
              <li>• Payment history tracking</li>
              <li>• Secure transaction records</li>
            </ul>
          </div>

          {/* Learning Resources */}
          <div className="feature-card">
            <div className="text-green-400 text-3xl mb-2">📚</div>

            <h3 className="mt-4 font-semibold text-lg">
              Learning Resources
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Upload lesson plans, digital resources and
              teaching materials for easy access.
            </p>

            <ul className="text-xs text-gray-500 mt-3 space-y-1">
              <li>• Lesson plan uploads</li>
              <li>• Video learning resources</li>
              <li>• Curriculum management</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  )
}