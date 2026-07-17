"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { InteractiveButton, MagneticButton } from "@/components/micro-interactions"
import { useScrollAnimation, animationVariants } from "@/components/enhanced-scroll-animations"
import SkillsOrbit from "@/components/skills-orbit"

export default function HeroSection() {
  const [torontoTime, setTorontoTime] = useState("")
  const [currentTitle, setCurrentTitle] = useState(0)

  const titles = [
    "Software Automation Engineer @ BOXX Insurance",
    "Machine Learning Engineer @ FlyRank AI",
    "WebMaster @ AIAA "
  ]

  const skills = [
    "Python",
    "C++",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Ruby",
    ".NET",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Selenium",
    "OpenCV",
    "Tesseract OCR",
    "Web Scraping",
    "JSON",
    "SQLite",
    "UI/UX",
  ]

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      const formattedTime = now.toLocaleTimeString("en-CA", {
        timeZone: "America/Toronto",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })

      setTorontoTime(formattedTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [titles.length])

  const {
    elementRef,
    isVisible: scrollVisible,
    animationStage,
  } = useScrollAnimation({
    threshold: 0.2,
    stages: 6,
    staggerDelay: 200,
  })

  const scrollToContact = () => {
    if (typeof window !== "undefined") {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <section
      ref={elementRef}
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-[#2A0015] relative z-10 px-4 pt-24 pb-10 overflow-hidden"
    >
      <style jsx>{`
        @keyframes skillScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes titleFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-track {
          animation: skillScroll 24s linear infinite;
        }

        .skill-track:hover {
          animation-play-state: paused;
        }

        .title-fade {
          animation: titleFade 0.5s ease;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-24 left-24 w-2 h-2 bg-[#D6A100] rounded-full animate-pulse"></div>
        <div className="absolute top-48 right-32 w-2 h-2 bg-[#7A003C] rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-[#A6192E] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          className="w-36 h-36 md:w-44 md:h-44 mx-auto mb-7 rounded-full bg-gradient-to-br from-[#7A003C] via-[#A6192E] to-[#D6A100] p-1 will-change-transform hover:scale-105 transition-transform duration-300 shadow-2xl shadow-[#7A003C]/30"
          style={animationVariants.scaleIn(scrollVisible && animationStage >= 1, 0)}
        >
          <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center overflow-hidden shadow-inner">
            <img
              src="/images/profile-photo.jpg"
              alt="Atharva Ghodke"
              className="w-full h-full rounded-full object-cover object-center"
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=120&width=120"
              }}
            />
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-5 will-change-transform bg-gradient-to-r from-white via-zinc-200 to-[#D6A100] bg-clip-text text-transparent"
          style={animationVariants.fadeInUp(scrollVisible && animationStage >= 2, 200)}
        >
          Atharva Ghodke
        </h1>

        <p
          className="text-xl md:text-2xl text-zinc-200 font-medium mb-3 will-change-transform"
          style={animationVariants.fadeInUp(scrollVisible && animationStage >= 3, 400)}
        >
          Automation Systems Engineering Student | McMaster University
        </p>

        <p
          className="text-lg md:text-xl text-zinc-400 mb-4 h-8 will-change-transform"
          style={animationVariants.fadeInUp(scrollVisible && animationStage >= 4, 600)}
        >
          <span key={currentTitle} className="inline-block title-fade">
            {titles[currentTitle]}
          </span>
        </p>

        <div
          className="flex items-center justify-center gap-2 text-zinc-400 text-sm md:text-base mb-7 will-change-transform"
          style={animationVariants.fadeInUp(scrollVisible && animationStage >= 4, 700)}
        >
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>Toronto, ON • {torontoTime} EST</span>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-7 will-change-transform"
          style={animationVariants.fadeInUp(scrollVisible && animationStage >= 5, 800)}
        >
          <InteractiveButton onClick={scrollToContact} variant="primary" size="lg" className="rounded-full">
            Get In Touch
          </InteractiveButton>

          <a href="https://github.com/atharva1567/atharva1567" target="_blank" rel="noopener noreferrer">
            <InteractiveButton variant="secondary" size="lg" className="rounded-full">
              View GitHub
            </InteractiveButton>
          </a>
        </div>

        <div
          className="flex justify-center space-x-6 mb-8 will-change-transform"
          style={animationVariants.fadeInUp(scrollVisible && animationStage >= 6, 1000)}
        >
          <MagneticButton
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-zinc-300 hover:text-[#D6A100]"
            strength={0.2}
          >
            <a href="https://github.com/atharva1567/atharva1567" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
          </MagneticButton>

          <MagneticButton
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-zinc-300 hover:text-[#A6192E]"
            strength={0.2}
          >
            <a href="https://www.linkedin.com/in/atharva-ghodke-949251382" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </MagneticButton>

          <MagneticButton
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-zinc-300 hover:text-[#D6A100]"
            strength={0.2}
          >
            <a href="mailto:atharva.ghodke@gmail.com">
              <Mail size={24} />
            </a>
          </MagneticButton>
        </div>

        <div
  style={animationVariants.fadeInUp(scrollVisible && animationStage >= 6, 1100)}
>
  <SkillsOrbit />
</div>

        <MagneticButton
          onClick={scrollToContact}
          className="animate-bounce hover:scale-110 transition-transform duration-300 will-change-transform"
          style={animationVariants.fadeInUp(scrollVisible && animationStage >= 6, 1200)}
          strength={0.3}
        >
          <ChevronDown size={32} className="text-[#D6A100]" />
        </MagneticButton>
      </div>
    </section>
  )
}