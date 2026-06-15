"use client"

import { useState, useEffect, useRef } from "react"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
  Send,
  CheckCircle,
  AlertCircle,
  Code2,
  Cpu,
} from "lucide-react"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.")
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  }

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
      className="flex items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-[#2A0015] relative z-10 py-20 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-20 w-3 h-3 bg-[#D6A100] rounded-full animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-3 h-3 bg-[#7A003C] rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-[#A6192E] rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-40 w-2 h-2 bg-[#D6A100] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-[#D6A100] bg-clip-text text-transparent transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Let's Build Something
          </h2>

          <p
            className={`text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Have an opportunity, project idea, collaboration, or question? Send me a message and I’ll get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <form
            onSubmit={handleSubmit}
            className={`bg-black/70 border border-zinc-800 rounded-3xl p-7 md:p-9 shadow-2xl shadow-[#7A003C]/20 transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-7">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-zinc-500">
                I’m open to co-op opportunities, AI/software projects, automation work, and student collaborations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-zinc-300 font-medium mb-2">Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D6A100] transition-colors"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D6A100] transition-colors"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-zinc-300 font-medium mb-2">Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project, opportunity, or collaboration"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D6A100] transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-zinc-300 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me what you're thinking..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-4 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#D6A100] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#7A003C] to-[#D6A100] text-white rounded-full hover:shadow-xl hover:shadow-[#7A003C]/30 hover:scale-[1.02] transition-all duration-300 font-semibold text-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              <Send size={20} className="ml-3" />
            </button>

            {status === "success" && (
              <div className="mt-5 flex items-center justify-center gap-2 text-green-400">
                <CheckCircle size={20} />
                <p>Message sent successfully.</p>
              </div>
            )}

            {status === "error" && (
              <div className="mt-5 flex items-center justify-center gap-2 text-red-400">
                <AlertCircle size={20} />
                <p>Something went wrong. Please try again.</p>
              </div>
            )}
          </form>

          <div
            className={`space-y-5 transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-black/70 border border-zinc-800 rounded-3xl p-7 shadow-xl shadow-[#7A003C]/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-[#7A003C]/20 border border-[#7A003C]/40 rounded-2xl">
                  <MapPin className="text-[#D6A100]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Currently</h3>
              </div>

              <p className="text-zinc-400 leading-relaxed">
                Automation Systems Engineering (Co-op) student at McMaster University, building projects across AI,
                computer vision, automation, and full-stack software.
              </p>

              <p className="text-zinc-500 mt-4">Toronto / Hamilton, Ontario</p>
            </div>

            <div className="bg-black/70 border border-zinc-800 rounded-3xl p-7 shadow-xl shadow-[#7A003C]/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-[#7A003C]/20 border border-[#7A003C]/40 rounded-2xl">
                  <Briefcase className="text-[#D6A100]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Open To</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Software Internships",
                  "Automation Roles",
                  "AI / Computer Vision",
                  "Web Development",
                  "Student Projects",
                  "Technical Collaboration",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-3"
                  >
                    <Code2 size={16} className="text-[#D6A100]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black/70 border border-zinc-800 rounded-3xl p-7 shadow-xl shadow-[#7A003C]/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 bg-[#7A003C]/20 border border-[#7A003C]/40 rounded-2xl">
                  <Cpu className="text-[#D6A100]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Connect With Me</h3>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 text-zinc-300 hover:text-[#D6A100] transition-all duration-300 group"
                  >
                    <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl group-hover:border-[#7A003C] transition-colors">
                      <info.icon size={22} />
                    </div>

                    <div>
                      <p className="text-zinc-500 text-sm">{info.label}</p>
                      <p className="break-all">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}