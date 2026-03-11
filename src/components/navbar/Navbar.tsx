"use client"
import Link from "next/link"
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

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const handleScroll = () => {
      const scrollY = window.scrollY

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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-6 py-4">

        {/* Logo - Primary: Blue */}
        <div className="text-xl font-bold text-[#1F1F1F]">
          <span className="text-[#3B71E8]">L</span>erna
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition font-medium ${
                active === link.href
                  ? "text-[#3B71E8]" /* Active link in blue */
                  : "text-gray-600 hover:text-[#3B71E8]" /* Hover to blue */
              }`}
            >
              {link.name}
            </a>
          ))}

        </nav>


        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <button className="px-4 py-2 text-gray-600 hover:text-[#3B71E8] text-sm font-medium transition">
            Login
          </button>

          <Link
            href="/contact"
            className="px-5 py-2 rounded-lg bg-[#3B71E8] text-white text-sm font-medium hover:bg-[#2E5ACE] transition-colors shadow-md hover:shadow-lg"
          >
            Contact Us
          </Link>

        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1F1F1F] text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >

        <div className="bg-white px-6 py-6 flex flex-col gap-6 text-sm">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`transition font-medium ${
                active === link.href
                  ? "text-[#3B71E8]" /* Active link in blue */
                  : "text-gray-600 hover:text-[#3B71E8]" /* Hover to blue */
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">

            <button className="text-left text-gray-600 hover:text-[#3B71E8] font-medium transition">
              Login
            </button>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-5 py-2 rounded-lg bg-[#3B71E8] text-white font-medium text-center hover:bg-[#2E5ACE] transition-colors shadow-md"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </header>
  )
}
