export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0b0f1a] text-white overflow-hidden hero-grid animated-bg">

      {/* moving background icons */}
      <div className="floating-icon text-5xl top-24 left-20">🎓</div>
      <div className="floating-icon text-4xl bottom-32 right-20">📚</div>
      <div className="floating-icon text-4xl top-1/2 left-10">📊</div>
      <div className="floating-icon text-4xl bottom-10 right-1/3">🏫</div>

      <div className="floating-icon text-3xl top-10 right-1/4">📚</div>
      <div className="floating-icon text-3xl bottom-40 left-1/4">🎓</div>
      <div className="floating-icon text-3xl top-1/3 right-10">📊</div>
      <div className="floating-icon text-3xl bottom-16 left-16">🏫</div>

      {/* glow background */}
      <div className="absolute top-40 right-40 w-[480px] h-[480px] bg-green-500 blur-[180px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div className="hero-text">

          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
            Smart School Infrastructure
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-6 leading-tight">

            The Operating System

            <br />

            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              for Modern Schools
            </span>

          </h1>

          <p className="text-gray-400 mt-5 text-base max-w-lg">
            Lerna helps schools manage academics, finance,
            communication and digital learning resources
            in one powerful platform.
          </p>

          <div className="flex gap-4 mt-7">

            <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 text-white font-semibold hover:opacity-90">
              Get Started
            </button>

            <button className="px-5 py-2.5 border border-gray-700 rounded-lg hover:bg-gray-800">
              Explore Resources
            </button>

          </div>

        </div>

        {/* RIGHT HERO VISUAL */}
        <div className="relative">

          {/* dashboard */}
          <div className="relative transform md:rotate-[-5deg] rounded-2xl border border-gray-800 bg-[#111827] shadow-2xl">

            <img
              src="/dashboard-preview.png"
              alt="dashboard"
              className="rounded-2xl w-full h-auto"
            />

          </div>

          {/* floating cards (hidden on mobile) */}

          <div className="hidden md:block absolute left-[-30px] top-[110px] bg-[#111827] border border-gray-700 p-3 rounded-lg shadow-xl w-44 float-card">

            <div className="flex items-center gap-2 text-green-400 text-sm">
              📊 <span>Performance</span>
            </div>

            <p className="text-white font-semibold mt-1">92% Average</p>

            <p className="text-gray-400 text-xs">+4% improvement</p>

          </div>

          <div className="hidden md:block absolute right-[-30px] top-[40px] bg-[#111827] border border-gray-700 p-3 rounded-lg shadow-xl w-44 float-card">

            <div className="flex items-center gap-2 text-green-400 text-sm">
              💰 <span>School Fees</span>
            </div>

            <p className="text-white font-semibold mt-1">₦4.2M</p>

            <p className="text-gray-400 text-xs">Collected this term</p>

          </div>

          <div className="hidden md:block absolute left-[10px] bottom-[10px] bg-[#111827] border border-gray-700 p-3 rounded-lg shadow-xl w-44 float-card">

            <div className="flex items-center gap-2 text-green-400 text-sm">
              👨‍👩‍👧 <span>Parents</span>
            </div>

            <p className="text-white font-semibold mt-1">312 Active</p>

            <p className="text-gray-400 text-xs">Portal engagement</p>

          </div>

          <div className="hidden md:block absolute right-[10px] bottom-[0px] bg-[#111827] border border-gray-700 p-3 rounded-lg shadow-xl w-44 float-card">

            <div className="flex items-center gap-2 text-green-400 text-sm">
              ✅ <span>Attendance</span>
            </div>

            <p className="text-white font-semibold mt-1">96%</p>

            <p className="text-gray-400 text-xs">Today</p>

          </div>

        </div>

      </div>

    </section>
  )
}