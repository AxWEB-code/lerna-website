export default function Hero() {
  return (
    <section className="relative pt-32 min-h-screen flex items-center bg-gradient-to-br from-white via-white to-blue-50/30 overflow-hidden">

      {/* Premium animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-[#3B71E8]/5 to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-gradient-to-l from-[#F28C28]/5 to-transparent rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#3B71E8]/3 via-transparent to-[#F28C28]/3 rounded-full blur-[120px]"></div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M0 0h60v60H0z" fill="none"/%3E%3Cpath d="M0 0h60M0 60h60M0 0v60M60 0v60" stroke="%233B71E8" stroke-width="0.5" stroke-opacity="0.05"/%3E%3C/svg%3E')`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>

      {/* Floating icons with gradient */}
      <div className="floating-icon text-5xl top-32 left-20 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-30">🎓</div>
      <div className="floating-icon text-4xl bottom-32 right-20 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-30">📚</div>
      <div className="floating-icon text-4xl top-1/3 left-10 bg-gradient-to-br from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-30">📊</div>
      <div className="floating-icon text-4xl bottom-10 right-1/3 bg-gradient-to-tl from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent opacity-30">🏫</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT TEXT */}
        <div className="hero-text">

          {/* Premium badge with subtle gradient */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3B71E8]/10 to-[#F28C28]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#3B71E8]/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B71E8] to-[#F28C28]"></span>
            <span className="text-sm font-medium bg-gradient-to-r from-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              Smart School Infrastructure
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.15]">
            <span className="text-[#1F1F1F]">The Operating System</span>
            <br />
            <span className="bg-gradient-to-r from-[#3B71E8] via-[#3B71E8] to-[#F28C28] bg-clip-text text-transparent">
              for Modern Schools
            </span>
          </h1>

          <p className="text-gray-600 mt-5 text-base max-w-lg leading-relaxed">
            Lerna helps schools manage academics, finance,
            communication and digital learning resources
            in one powerful platform.
          </p>

          <div className="flex gap-4 mt-8">

            {/* Primary CTA - Blue gradient */}
            <button className="group relative px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#3B71E8] to-[#3B71E8] hover:from-[#3B71E8] hover:to-[#F28C28] text-white font-semibold transition-all duration-500 shadow-lg shadow-[#3B71E8]/25 hover:shadow-xl hover:shadow-[#F28C28]/25 transform hover:-translate-y-0.5">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#F28C28] to-[#3B71E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>

            {/* Secondary CTA - Elegant outline */}
            <button className="px-6 py-2.5 rounded-lg border-2 border-gray-200 text-[#1F1F1F] font-semibold hover:border-[#3B71E8] hover:bg-blue-50/50 transition-all duration-300">
              Explore Resources
            </button>

          </div>

        </div>

        {/* RIGHT HERO VISUAL */}
        <div className="relative">

          {/* Main dashboard card with premium gradient border */}
          <div className="relative transform md:rotate-[-3deg] rounded-2xl bg-gradient-to-br from-[#3B71E8] via-[#3B71E8] to-[#F28C28] p-1 shadow-2xl">
            <div className="rounded-2xl bg-white overflow-hidden">
              <img
                src="/dashboard-preview.png"
                alt="dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Floating cards with premium styling - Realigned */}
          <div className="hidden md:block absolute -left-16 top-16 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-xl p-3 w-44 float-card hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#3B71E8] to-[#3B71E8] flex items-center justify-center text-white text-sm">📊</div>
              <span className="font-medium text-sm text-[#1F1F1F]">Performance</span>
            </div>
            <p className="text-xl font-bold text-[#1F1F1F]">92%</p>
            <p className="text-xs text-gray-500">Average score</p>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-r from-[#3B71E8] to-[#3B71E8] rounded-full"></div>
          </div>

          <div className="hidden md:block absolute -right-16 top-24 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-xl p-3 w-44 float-card hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#F28C28] to-[#F28C28] flex items-center justify-center text-white text-sm">💰</div>
              <span className="font-medium text-sm text-[#1F1F1F]">Fees</span>
            </div>
            <p className="text-xl font-bold text-[#1F1F1F]">₦4.2M</p>
            <p className="text-xs text-gray-500">Collected this term</p>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-r from-[#F28C28] to-[#F28C28] rounded-full"></div>
          </div>

          <div className="hidden md:block absolute left-4 -bottom-8 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-xl p-3 w-44 float-card hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#3B71E8] to-[#F28C28] flex items-center justify-center text-white text-sm">👥</div>
              <span className="font-medium text-sm text-[#1F1F1F]">Parents</span>
            </div>
            <p className="text-xl font-bold text-[#1F1F1F]">312</p>
            <p className="text-xs text-gray-500">Active on portal</p>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-r from-[#3B71E8] to-[#F28C28] rounded-full"></div>
          </div>

          <div className="hidden md:block absolute right-8 -bottom-4 bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-xl p-3 w-44 float-card hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#F28C28] to-[#3B71E8] flex items-center justify-center text-white text-sm">✅</div>
              <span className="font-medium text-sm text-[#1F1F1F]">Attendance</span>
            </div>
            <p className="text-xl font-bold text-[#1F1F1F]">96%</p>
            <p className="text-xs text-gray-500">Today</p>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gradient-to-r from-[#F28C28] to-[#3B71E8] rounded-full"></div>
          </div>

        </div>

      </div>

    </section>
  )
}