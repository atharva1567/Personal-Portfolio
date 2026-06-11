"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMounted, setIsMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "achievements", label: "Awards" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["hero", ...navItems.map((item) => item.id)]
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const element = document.getElementById(section)

        if (element) {
          const { offsetTop, offsetHeight } = element

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest("nav")) {
        setIsMobileMenuOpen(false)
      }
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("click", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-white via-zinc-200 to-[#D6A100] bg-clip-text text-transparent">
              Atharva Ghodke
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-md border-b border-zinc-800 shadow-lg shadow-[#7A003C]/10"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold bg-gradient-to-r from-white via-zinc-200 to-[#D6A100] bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            Atharva Ghodke
          </button>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-[#D6A100]"
                    : "text-zinc-300 hover:text-[#D6A100]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-300 hover:text-[#D6A100] hover:bg-zinc-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-zinc-800 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-[#D6A100] bg-[#7A003C]/20"
                      : "text-zinc-300 hover:text-[#D6A100] hover:bg-zinc-900"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}