export default function Features() {
  return (
    <section id="features" className="relative bg-gradient-to-br from-[#1F1F1F] to-[#1A1A2E] text-white py-24 overflow-hidden">

      {/* Premium animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-40 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-[#3B71E8]/10 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-l from-[#F28C28]/10 to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#3B71E8]/5 via-transparent to-[#F28C28]/5 rounded-full blur-[150px]"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h60v60H0z" fill="none"/%3E%3Cpath d="M0 0h60M0 60h60M0 0v60M60 0v60" stroke="%23FFFFFF" stroke-width="0.5" stroke-opacity="0.05"/%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>

      {/* Floating icons with gradient */}
      <div className="floating-icon text-4xl top-20 left-20 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-40">🎓</div>
      <div className="floating-icon text-3xl bottom-20 right-32 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-40">📚</div>
      <div className="floating-icon text-3xl top-1/3 left-10 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-40">📊</div>
      <div className="floating-icon text-3xl bottom-16 right-10 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-40">🏫</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">

          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
            <span className="text-sm font-medium bg-gradient-to-r from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              Comprehensive Solutions
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Everything Your School
            <br />
            <span className="bg-gradient-to-r from-[#3B71E8] via-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              Needs to Run Smarter
            </span>
          </h2>

          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            Lerna provides a complete infrastructure for modern schools
            to manage academics, communication and operations.
          </p>

        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {/* Student Management */}
          <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-[#3B71E8]/30 hover:shadow-2xl hover:shadow-[#3B71E8]/10 transition-all duration-500">
            {/* Gradient hover effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B71E8]/0 to-[#F28C28]/0 group-hover:from-[#3B71E8]/5 group-hover:to-[#F28C28]/5 transition-all duration-500"></div>
            
            {/* Icon with gradient */}
            <div className="relative text-4xl mb-4 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              🎓
            </div>

            <h3 className="relative font-bold text-xl mb-2 group-hover:text-[#3B71E8] transition-colors duration-300">
              Student Management
            </h3>

            <p className="relative text-gray-400 text-sm leading-relaxed">
              Easily manage student profiles, class assignments,
              academic levels and personal records from one system.
            </p>

            <ul className="relative text-sm text-gray-500 mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
                Student profile records
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
                Class and department allocation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
                Academic history tracking
              </li>
            </ul>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#3B71E8]/20 to-transparent rounded-tr-2xl"></div>
          </div>

          {/* Attendance */}
          <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-[#F28C28]/30 hover:shadow-2xl hover:shadow-[#F28C28]/10 transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F28C28]/0 to-[#3B71E8]/0 group-hover:from-[#F28C28]/5 group-hover:to-[#3B71E8]/5 transition-all duration-500"></div>
            
            <div className="relative text-4xl mb-4 bg-gradient-to-br from-[#F28C28] to-[#3B71E8] w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              📊
            </div>

            <h3 className="relative font-bold text-xl mb-2 group-hover:text-[#F28C28] transition-colors duration-300">
              Attendance Tracking
            </h3>

            <p className="relative text-gray-400 text-sm leading-relaxed">
              Monitor daily student attendance with digital
              registers and automated reporting tools.
            </p>

            <ul className="relative text-sm text-gray-500 mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F28C28] to-[#3B71E8]"></span>
                Smart attendance recording
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F28C28] to-[#3B71E8]"></span>
                Daily class tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F28C28] to-[#3B71E8]"></span>
                Attendance performance reports
              </li>
            </ul>

            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#F28C28]/20 to-transparent rounded-tr-2xl"></div>
          </div>

          {/* Results */}
          <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-[#3B71E8]/30 hover:shadow-2xl hover:shadow-[#3B71E8]/10 transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B71E8]/0 to-[#F28C28]/0 group-hover:from-[#3B71E8]/5 group-hover:to-[#F28C28]/5 transition-all duration-500"></div>
            
            <div className="relative text-4xl mb-4 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              📝
            </div>

            <h3 className="relative font-bold text-xl mb-2 group-hover:text-[#3B71E8] transition-colors duration-300">
              Result Management
            </h3>

            <p className="relative text-gray-400 text-sm leading-relaxed">
              Teachers can input scores, compute results,
              and generate report cards digitally.
            </p>

            <ul className="relative text-sm text-gray-500 mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
                Score input & grading
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
                Automated result computation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
                Printable result slips
              </li>
            </ul>

            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#3B71E8]/20 to-transparent rounded-tr-2xl"></div>
          </div>

          {/* Parent Portal */}
          <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-[#F28C28]/30 hover:shadow-2xl hover:shadow-[#F28C28]/10 transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F28C28]/0 to-[#3B71E8]/0 group-hover:from-[#F28C28]/5 group-hover:to-[#3B71E8]/5 transition-all duration-500"></div>
            
            <div className="relative text-4xl mb-4 bg-gradient-to-br from-[#F28C28] to-[#3B71E8] w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              👨‍👩‍👧
            </div>

            <h3 className="relative font-bold text-xl mb-2 group-hover:text-[#F28C28] transition-colors duration-300">
              Parent Portal
            </h3>

            <p className="relative text-gray-400 text-sm leading-relaxed">
              Parents stay informed with access to student
              results, attendance and school announcements.
            </p>

            <ul className="relative text-sm text-gray-500 mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F28C28] to-[#3B71E8]"></span>
                Student progress monitoring
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F28C28] to-[#3B71E8]"></span>
                Attendance updates
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F28C28] to-[#3B71E8]"></span>
                School communication
              </li>
            </ul>

            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#F28C28]/20 to-transparent rounded-tr-2xl"></div>
          </div>

          {/* Payments */}
          <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-[#3B71E8]/30 hover:shadow-2xl hover:shadow-[#3B71E8]/10 transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B71E8]/0 to-[#F28C28]/0 group-hover:from-[#3B71E8]/5 group-hover:to-[#F28C28]/5 transition-all duration-500"></div>
            
            <div className="relative text-4xl mb-4 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              💳
            </div>

            <h3 className="relative font-bold text-xl mb-2 group-hover:text-[#3B71E8] transition-colors duration-300">
              School Payments
            </h3>

            <p className="relative text-gray-400 text-sm leading-relaxed">
              Accept school fee payments securely with
              automated receipts and payment tracking.
            </p>

            <ul className="relative text-sm text-gray-500 mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
                Online fee payments
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
                Payment history tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
                Secure transaction records
              </li>
            </ul>

            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#3B71E8]/20 to-transparent rounded-tr-2xl"></div>
          </div>

          {/* Learning Resources */}
          <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-[#F28C28]/30 hover:shadow-2xl hover:shadow-[#F28C28]/10 transition-all duration-500">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F28C28]/0 to-[#3B71E8]/0 group-hover:from-[#F28C28]/5 group-hover:to-[#3B71E8]/5 transition-all duration-500"></div>
            
            <div className="relative text-4xl mb-4 bg-gradient-to-br from-[#F28C28] to-[#3B71E8] w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              📚
            </div>

            <h3 className="relative font-bold text-xl mb-2 group-hover:text-[#F28C28] transition-colors duration-300">
              Learning Resources
            </h3>

            <p className="relative text-gray-400 text-sm leading-relaxed">
              Upload lesson plans, digital resources and
              teaching materials for easy access.
            </p>

            <ul className="relative text-sm text-gray-500 mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F28C28] to-[#3B71E8]"></span>
                Lesson plan uploads
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F28C28] to-[#3B71E8]"></span>
                Video learning resources
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F28C28] to-[#3B71E8]"></span>
                Curriculum management
              </li>
            </ul>

            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#F28C28]/20 to-transparent rounded-tr-2xl"></div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-[#3B71E8] to-[#3B71E8] hover:from-[#3B71E8] hover:to-[#F28C28] text-white font-bold text-base transition-all duration-500 shadow-lg shadow-[#3B71E8]/25 hover:shadow-xl hover:shadow-[#F28C28]/25 transform hover:-translate-y-0.5 overflow-hidden">
            <span className="relative z-10">Explore All Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F28C28] to-[#3B71E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </button>
        </div>

      </div>

    </section>
  )
}