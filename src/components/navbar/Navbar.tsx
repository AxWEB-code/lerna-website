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
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0f1117]/80 border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-6 py-4">

        {/* Logo */}
        <div className="text-xl font-bold text-white">
          <span className="text-green-400">L</span>erna
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition ${
                active === link.href
                  ? "text-green-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

        </nav>


        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <button className="px-4 py-2 text-gray-300 hover:text-white text-sm">
            Login
          </button>

          <Link
  href="/contact"
  className="px-5 py-2 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 text-white text-sm font-medium hover:opacity-90"
>
  Contact Us
</Link>

        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-gray-800" : "max-h-0"
        }`}
      >

        <div className="bg-[#0f1117] px-6 py-6 flex flex-col gap-6 text-sm">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`transition ${
                active === link.href
                  ? "text-green-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">

            <button className="text-left text-gray-300 hover:text-white">
              Login
            </button>

            <Link
  href="/contact"
  onClick={() => setOpen(false)}
  className="px-5 py-2 rounded-lg bg-gradient-to-r from-green-400 to-emerald-600 text-white font-medium text-center"
>
  Contact Us
</Link>

          </div>

        </div>

      </div>

    </header>
  )
}