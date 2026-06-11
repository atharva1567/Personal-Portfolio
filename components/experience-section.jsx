"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function ExperienceSection() {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  const experiences = [
    {
      id: 1,
      title: "Software Automation Engineer",
      company: "BOXX Insurance Inc.",
      period: "May 2026 - Present",
      location: "Toronto, Ontario, Canada · Remote",
      current: true,
      description: [
        "Developing OCR and computer vision pipelines for automated data extraction from broker PDFs.",
        "Designing checkbox detection and mapping systems to link form fields to underwriting questions.",
        "Producing structured JSON outputs for internal underwriting workflows.",
        "Collaborating with developers, QA teams, the Scrum Master, and the Technical Product Owner to refine requirements and deliver iterative demos.",
      ],
      technologies: ["Python", "OpenCV", "Tesseract OCR", "OCR", "Computer Vision", "JSON", "Agile"],
    },
    {
      id: 2,
      title: "Student Member",
      company: "American Institute of Aeronautics & Astronautics (AIAA)",
      period: "2026 - Present",
      location: "Hamilton, Ontario, Canada",
      current: true,
      description: [
        "Member of a leading aerospace technical society focused on aerospace engineering and emerging technologies.",
        "Exploring aerospace, engineering, automation systems, and advanced technology initiatives.",
        "Engaging with professional engineering resources, technical publications, and industry developments.",
      ],
      technologies: ["Aerospace", "Engineering", "Technology", "Systems Thinking"],
    },
    {
      id: 3,
      title: "General Member",
      company: "Google Developer Groups @ McMaster",
      period: "2026 - Present",
      location: "Hamilton, Ontario, Canada",
      current: true,
      description: [
        "Participating in technical workshops, networking events, and developer-focused initiatives.",
        "Engaging with students and industry professionals interested in software engineering, AI, and emerging technologies.",
        "Expanding technical skills through hands-on projects and community-driven learning opportunities.",
      ],
      technologies: ["Software Development", "AI", "Community", "Technology"],
    },
    {
      id: 4,
      title: "Mock Trial Lawyer",
      company: "Ontario Justice Education Network (OJEN)",
      period: "Sep 2023 - Jun 2025",
      location: "Ontario, Canada",
      current: false,
      description: [
        "Contributed to winning 1st Place Gold at the 2025 Kelly Cup Championship.",
        "Analyzed criminal case files to develop clear, evidence-based legal arguments.",
        "Applied structured legal reasoning and rapid decision-making under time pressure.",
        "Collaborated on case theory and examination strategy in competitive trial settings.",
      ],
      technologies: ["Legal Research", "Public Speaking", "Team Building", "Critical Thinking"],
    },
    {
      id: 5,
      title: "Flight Sergeant",
      company: "Royal Canadian Air Cadets",
      period: "Sep 2020 - Jun 2025",
      location: "Pickering, Ontario, Canada · On-site",
      current: false,
      description: [
        "Achieved Top Recruit distinction for highest performance in knowledge and theory.",
        "Selected for Drill Rifle Team, demonstrating precision and ceremonial skill.",
        "Mentored and supervised junior cadets while maintaining high standards of discipline and teamwork.",
        "Led drill instruction and supported the planning and execution of squadron training activities.",
      ],
      technologies: ["Leadership", "Discipline", "Organization", "Communication", "Teamwork"],
    },
    {
      id: 6,
      title: "Data Entry & Operations Coordinator",
      company: "Kumon Canada, Inc.",
      period: "Aug 2022 - Aug 2024",
      location: "Ajax, Ontario, Canada · On-site",
      current: false,
      description: [
        "Entered and updated digital scores for students, ensuring accurate and consistent assessment records.",
        "Organized and filed new work packages for upcoming sessions to maintain smooth centre workflow.",
        "Monitored the front hub, supervised students waiting for pickup, and maintained a safe environment.",
        "Answered walk-in questions and supported parents with scheduling, inquiries, and progress discussions.",
      ],
      technologies: ["Data Entry", "Customer Service", "Operations", "Scheduling"],
    },
    {
      id: 7,
      title: "Teaching Instructor",
      company: "Kumon Canada, Inc.",
      period: "Aug 2022 - Aug 2024",
      location: "Ajax, Ontario, Canada · On-site",
      current: false,
      description: [
        "Delivered individualized instruction in Mathematics and English/Reading.",
        "Adapted teaching strategies to each student's learning pace and skill level.",
        "Assessed student progress, identified learning gaps, and provided targeted support.",
        "Maintained accurate progress records and supported academic development for 100+ students.",
      ],
      technologies: ["Tutoring", "Educational Assessment", "Instructional Support", "Communication"],
    },
    {
      id: 8,
      title: "Assistant Soccer Coach",
      company: "Royal City Soccer Club",
      period: "Jun 2023 - Aug 2023",
      location: "Toronto, Ontario, Canada · On-site",
      current: false,
      description: [
        "Led training sessions to build players' technical skills and tactical awareness.",
        "Supported game preparation and on-field execution while reinforcing discipline and teamwork.",
        "Fostered a positive team culture focused on growth, sportsmanship, and consistent performance.",
      ],
      technologies: ["Coaching", "Communication", "Team Building", "Leadership"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = Number.parseInt(entry.target.dataset.cardId)
            setVisibleCards((prev) => [...new Set([...prev, cardId])])
          }
        })
      },
      { threshold: 0.25 },
    )

    const cards = document.querySelectorAll("[data-card-id]")
    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="min-h-screen flex items-center justify-center bg-zinc-950 relative z-10 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-[#D6A100] bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-zinc-400">
            Professional, Technical, & Leadership Experience Shaping How I Build & Solve Problems.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7A003C] via-[#A6192E] to-[#D6A100]"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-card-id={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:justify-between`}
              >
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border-4 border-[#A6192E] rounded-full z-10"></div>

                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 transform transition-all duration-1000 ${
                    visibleCards.includes(exp.id)
                      ? "translate-y-0 opacity-100"
                      : index % 2 === 0
                        ? "translate-x-10 opacity-0"
                        : "-translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <Card className="hover:shadow-xl hover:shadow-[#7A003C]/20 transition-all duration-300 hover:scale-105 bg-black border border-zinc-800 shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2 gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-white mb-1">
                            {exp.title}
                          </CardTitle>

                          <p className="text-lg font-semibold text-[#D6A100] mb-2">
                            {exp.company}
                          </p>
                        </div>

                        {exp.current && (
                          <Badge className="bg-gradient-to-r from-[#7A003C] to-[#A6192E] text-white">
                            Current
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center text-zinc-500 text-sm mb-2">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>

                      <p className="text-zinc-500 text-sm">{exp.location}</p>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="text-zinc-400 leading-relaxed mb-6 space-y-2 list-disc list-inside">
                        {exp.description.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-[#7A003C]/20 hover:text-white transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}