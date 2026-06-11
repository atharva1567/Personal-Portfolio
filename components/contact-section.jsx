"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "atharva.gwork1@gmail.com",
      href: "mailto:atharva.gwork1@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/atharva-ghodke-949251382",
      href: "https://www.linkedin.com/in/atharva-ghodke-949251382",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/atharva1567",
      href: "https://github.com/atharva1567",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="flex items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-[#2A0015] relative z-10 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-[#D6A100] bg-clip-text text-transparent transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Contact
          </h2>

          <h3
            className={`text-2xl font-bold text-white mb-2 transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Let's Connect
          </h3>

          <p
            className={`text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Interested in seeing more of my work? Visit my GitHub, connect with me on LinkedIn, or reach out directly
            through email. I'm always open to discussing projects, opportunities, and innovative ideas.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-8 justify-center transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {contactInfo.map((info) => (
            <a
              key={info.label}
              href={info.href}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center space-y-3 text-zinc-300 hover:text-[#D6A100] transition-all duration-300 group hover:scale-105"
            >
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-full group-hover:border-[#A6192E] transition-colors duration-300">
                <info.icon size={32} />
              </div>

              <div className="text-center">
                <p className="font-medium text-lg">{info.label}</p>
                <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 break-all">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}