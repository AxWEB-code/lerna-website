"use client"
import Link from "next/link"
import Image from "next/image"  // Add this import
import { useState, useEffect } from "react"

const links = [
  { name: "Features", href: "#features" },
  { name: "Resources", href: "#resources" },
  { name: "Videos", href: "/videos" },
  { name: "Blog", href: "/blog" },
]

export default function Navbar() {

  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Add background opacity change on scroll
      setScrolled(scrollY > 20)

      sections.forEach((section: any) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute("id")

        if (
          scrollY >= sectionTop &&
          scrollY < sectionTop + sectionHeight
        ) {
          setActive(`#${sectionId}`)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "backdrop-blur-md bg-white/95 border-b border-gray-200/80 shadow-lg" 
        : "backdrop-blur-sm bg-white/80 border-b border-gray-200/50 shadow-sm"
    }`}>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-6 py-3">

        {/* Logo - Larger Image */}
        <Link href="/" className="relative group flex items-center">
          <div className="relative h-14 w-auto"> {/* Increased from h-10 to h-14 */}
            <Image
              src="/logo.png"
              alt="Lerna Logo"
              width={160}  // Increased from 120 to 160
              height={56}  // Increased from 40 to 56
              className="h-14 w-auto object-contain" // Increased from h-10 to h-14
              priority
            />
            {/* Optional subtle hover effect */}
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#3B71E8] to-[#F28C28] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </div>
        </Link>

        {/* Desktop Navigation with premium indicators */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                active === link.href
                  ? "text-[#3B71E8]" 
                  : "text-gray-600 hover:text-[#3B71E8]"
              }`}
            >
              {link.name}
              {/* Animated underline */}
              <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-[#3B71E8] to-[#F28C28] transform scale-x-0 transition-transform duration-300 origin-left ${
                active === link.href ? 'scale-x-100' : 'group-hover:scale-x-100'
              }`}></span>
            </a>
          ))}
        </nav>

        {/* Desktop Buttons - Premium styling */}
        <div className="hidden md:flex items-center gap-4">

          {/* Login with subtle hover effect */}
          <button className="relative px-4 py-2 text-gray-600 hover:text-[#3B71E8] text-sm font-medium transition-all duration-300 group overflow-hidden">
            <span className="relative z-10">Login</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#3B71E8]/0 to-[#F28C28]/0 group-hover:from-[#3B71E8]/5 group-hover:to-[#F28C28]/5 transition-all duration-300"></span>
          </button>

          {/* Premium Contact button with gradient border and hover effect */}
          <Link
            href="/contact"
            className="group relative px-5 py-2 rounded-lg bg-gradient-to-r from-[#3B71E8] to-[#3B71E8] hover:from-[#3B71E8] hover:to-[#F28C28] text-white text-sm font-semibold transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F28C28] to-[#3B71E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </Link>

        </div>

        {/* Mobile Menu Button - Premium */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-[#1F1F1F] hover:border-[#3B71E8] hover:bg-blue-50/50 transition-all duration-300"
        >
          <span className="text-2xl font-light">{open ? "✕" : "☰"}</span>
        </button>

      </div>

      {/* Mobile Menu - Premium dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 border-t border-gray-200/80" : "max-h-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md px-6 py-6 flex flex-col gap-4">
          
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === link.href
                    ? "text-[#3B71E8] bg-blue-50/50"
                    : "text-gray-600 hover:text-[#3B71E8] hover:bg-gray-50"
                }`}
              >
                {link.name}
                {active === link.href && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-gradient-to-b from-[#3B71E8] to-[#F28C28] rounded-r-full"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Buttons - Premium */}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
            
            <button className="group relative px-4 py-3 rounded-lg text-gray-600 hover:text-[#3B71E8] text-sm font-medium transition-all duration-300 text-left overflow-hidden">
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#3B71E8]/0 to-[#F28C28]/0 group-hover:from-[#3B71E8]/5 group-hover:to-[#F28C28]/5 transition-all duration-300"></span>
            </button>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="group relative px-5 py-3 rounded-lg bg-gradient-to-r from-[#3B71E8] to-[#3B71E8] hover:from-[#3B71E8] hover:to-[#F28C28] text-white font-semibold text-sm text-center transition-all duration-500 shadow-md hover:shadow-lg overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F28C28] to-[#3B71E8] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </Link>
            
          </div>

          {/* Premium bottom accent */}
          <div className="mt-2 pt-2 text-center">
            <span className="text-xs text-gray-400">Lerna • Smart School Infrastructure</span>
          </div>

        </div>
      </div>

    </header>
  )
}