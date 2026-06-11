"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "AIRANCE",
      subtitle: "AI Research Assistant Navigator for Co-ops Engine",
      description:
        "A terminal-based job-search automation system for students and early-career individuals. AIRANCE scrapes LinkedIn and Indeed, manages user accounts, stores personalized search profiles, detects new postings, tracks applications, and sends professional HTML job-alert emails.",
      github:
        "https://github.com/atharva1567/AIRANCE-Artificial-Intelligence-Research-Assistant-Navigator-for-Co-ops-Engine",
      technologies: ["Python", "Selenium", "SQLite", "Web Scraping", "JSON", "HTML Email", "Automation"],
      gradient: "from-[#7A003C] to-[#D6A100]",
    },
    {
      id: 2,
      title: "CodeLink",
      subtitle: "Offline Multi-Language Code Translator",
      description:
        "A lightweight browser-based code translator that converts code snippets between Python, Java, C++, and JavaScript. Built with pure HTML, CSS, and JavaScript, CodeLink runs fully offline using a custom rule-based translation engine.",
      github: "https://github.com/atharva1567/CodeLink",
      technologies: ["JavaScript", "HTML", "CSS", "UI/UX", "Rule Engine"],
      gradient: "from-[#A6192E] to-[#7A003C]",
    },
    {
      id: 3,
      title: "UNO Console Edition",
      subtitle: "Object-Oriented C++ Card Game",
      description:
        "A collaborative C++ recreation of the classic UNO card game featuring a polished terminal UI, modular object-oriented architecture, player and bot logic, custom card classes, turn control, and special action mechanics.",
      github: "https://github.com/atharva1567/UNO-Game-1pr3",
      technologies: ["C++", "OOP", "Terminal UI", "Game Logic", "Git"],
      gradient: "from-[#D6A100] to-[#A6192E]",
    },
    {
      id: 4,
      title: "Operational Graphing Calculator",
      subtitle: "Interactive Mathematical Visualization Tool",
      description:
        "A responsive browser-based graphing calculator that parses mathematical expressions and renders accurate function graphs in real time using the HTML5 Canvas API. Includes adjustable graphing windows, coordinate tracking, grid drawing, and live error handling.",
      github: "https://github.com/atharva1567/Graphing-Calculator",
      technologies: ["JavaScript", "HTML", "CSS", "Canvas API", "Math Parsing"],
      gradient: "from-[#7A003C] to-[#A6192E]",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [projects.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <section
      id="projects"
      className="flex items-center justify-center bg-black relative z-10 py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-24 left-20 w-3 h-3 bg-[#7A003C] rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-3 h-3 bg-[#D6A100] rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-12 w-2 h-2 bg-[#A6192E] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-[#D6A100] bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-xl text-zinc-400">
            Projects focused on Interactive Systems, Automation, & Practical Software Engineering
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:-left-6 z-20 p-4 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-[#D6A100] hover:border-[#7A003C] hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Previous project"
          >
            <ChevronLeft size={30} />
          </button>

          <div className="w-full max-w-4xl px-12">
            <div
              key={currentProject.id}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-[#7A003C]/20 transition-all duration-700 animate-project-card"
            >
              <div className={`h-2 bg-gradient-to-r ${currentProject.gradient}`}></div>

              <div className="p-8 md:p-10 text-center">
                <p className="text-[#D6A100] font-semibold mb-3">
                  Project {currentIndex + 1} / {projects.length}
                </p>

                <h3 className="text-3xl md:text-5xl font-bold text-white mb-3">
                  {currentProject.title}
                </h3>

                <p className="text-xl text-[#D6A100] font-medium mb-6">
                  {currentProject.subtitle}
                </p>

                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                  {currentProject.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {currentProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-[#7A003C]/20 hover:text-white transition-all duration-300 text-xs px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r ${currentProject.gradient} text-white rounded-full hover:shadow-xl hover:shadow-[#7A003C]/30 hover:scale-105 transition-all duration-300 font-medium text-lg relative overflow-hidden group`}
                >
                  <Github size={20} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span>View on GitHub</span>
                  <ExternalLink size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-6 z-20 p-4 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-[#D6A100] hover:border-[#7A003C] hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Next project"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-[#D6A100] scale-125"
                  : "bg-zinc-700 hover:bg-[#7A003C]"
              }`}
              aria-label={`Go to project ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-zinc-400 mb-5">Interested In Seeing More of My Work?</p>

          <a
            href="https://github.com/atharva1567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-[#7A003C] text-[#D6A100] hover:bg-[#7A003C] hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 rounded-full bg-transparent font-medium text-lg relative overflow-hidden group"
          >
            <Github size={22} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold">Visit My GitHub</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes projectCard {
          0% {
            opacity: 0;
            transform: translateX(40px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .animate-project-card {
          animation: projectCard 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}