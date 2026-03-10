export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white text-[#1F1F1F] overflow-hidden hero-grid animated-bg">

      {/* moving background icons */}
      <div className="floating-icon text-5xl top-24 left-20 opacity-20">🎓</div>
      <div className="floating-icon text-4xl bottom-32 right-20 opacity-20">📚</div>
      <div className="floating-icon text-4xl top-1/2 left-10 opacity-20">📊</div>
      <div className="floating-icon text-4xl bottom-10 right-1/3 opacity-20">🏫</div>

      <div className="floating-icon text-3xl top-10 right-1/4 opacity-20">📚</div>
      <div className="floating-icon text-3xl bottom-40 left-1/4 opacity-20">🎓</div>
      <div className="floating-icon text-3xl top-1/3 right-10 opacity-20">📊</div>
      <div className="floating-icon text-3xl bottom-16 left-16 opacity-20">🏫</div>

      {/* glow background - blue glow */}
      <div className="absolute top-40 right-40 w-[480px] h-[480px] bg-[#3B71E8] blur-[180px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="hero-text">

          <span className="bg-[#3B71E8]/10 text-[#3B71E8] px-3 py-1 rounded-full text-xs font-medium">
            Smart School Infrastructure
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-6 leading-tight text-[#1F1F1F]">

            The Operating System

            <br />

            <span className="bg-gradient-to-r from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              for Modern Schools
            </span>

          </h1>

          <p className="text-gray-600 mt-5 text-base max-w-lg">
            Lerna helps schools manage academics, finance,
            communication and digital learning resources
            in one powerful platform.
          </p>

          <div className="flex gap-4 mt-7">

            <button className="px-5 py-2.5 rounded-lg bg-[#3B71E8] text-white font-semibold hover:bg-[#2E5ACE] transition-colors">
              Get Started
            </button>

            <button className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Explore Resources
            </button>

          </div>

        </div>

        {/* RIGHT HERO VISUAL */}
        <div className="relative">

          {/* dashboard */}
          <div className="relative transform md:rotate-[-5deg] rounded-2xl border border-gray-200 bg-white shadow-xl">

            <img
              src="/dashboard-preview.png"
              alt="dashboard"
              className="rounded-2xl w-full h-auto"
            />

          </div>

          {/* floating cards (hidden on mobile) */}

          <div className="hidden md:block absolute left-[-30px] top-[110px] bg-white border border-gray-200 p-3 rounded-lg shadow-lg w-44 float-card">

            <div className="flex items-center gap-2 text-[#3B71E8] text-sm">
              📊 <span className="text-gray-600">Performance</span>
            </div>

            <p className="text-[#1F1F1F] font-semibold mt-1">92% Average</p>

            <p className="text-gray-500 text-xs">+4% improvement</p>

          </div>

          <div className="hidden md:block absolute right-[-30px] top-[40px] bg-white border border-gray-200 p-3 rounded-lg shadow-lg w-44 float-card">

            <div className="flex items-center gap-2 text-[#F28C28] text-sm">
              💰 <span className="text-gray-600">School Fees</span>
            </div>

            <p className="text-[#1F1F1F] font-semibold mt-1">₦4.2M</p>

            <p className="text-gray-500 text-xs">Collected this term</p>

          </div>

          <div className="hidden md:block absolute left-[10px] bottom-[10px] bg-white border border-gray-200 p-3 rounded-lg shadow-lg w-44 float-card">

            <div className="flex items-center gap-2 text-[#3B71E8] text-sm">
              👨‍👩‍👧 <span className="text-gray-600">Parents</span>
            </div>

            <p className="text-[#1F1F1F] font-semibold mt-1">312 Active</p>

            <p className="text-gray-500 text-xs">Portal engagement</p>

          </div>

          <div className="hidden md:block absolute right-[10px] bottom-[0px] bg-white border border-gray-200 p-3 rounded-lg shadow-lg w-44 float-card">

            <div className="flex items-center gap-2 text-[#F28C28] text-sm">
              ✅ <span className="text-gray-600">Attendance</span>
            </div>

            <p className="text-[#1F1F1F] font-semibold mt-1">96%</p>

            <p className="text-gray-500 text-xs">Today</p>

          </div>

        </div>

      </div>

    </section>
  )
}