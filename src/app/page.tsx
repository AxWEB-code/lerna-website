import Navbar from "../components/navbar/Navbar"
import Hero from "../components/hero/Hero"
import Features from "../components/sections/features/Features"
import Resources from "../components/sections/resources/Resources"
import Stats from "../components/sections/stats/Stats"
import CTA from "../components/sections/cta/CTA"
import Blog from "../components/sections/blog/Blog"
import Footer from "../components/footer/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Resources />
      <Stats />
      <Blog />
      <CTA />
      <Footer />
    </>
  )
}
