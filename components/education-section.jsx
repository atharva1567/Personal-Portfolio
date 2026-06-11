"use client"

import { GraduationCap, School, MapPin } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      icon: GraduationCap,
      dates: "2025 - 2030",
      school: "McMaster University",
      degree: "Automation Systems Engineering Co-op, BTech",
      location: "Hamilton, Ontario, Canada",
    },
    {
      icon: School,
      dates: "2021 - 2025",
      school: "J. Clarke Richardson Collegiate",
      degree: "Ontario Secondary School Diploma (OSSD)",
      location: "Ajax, Ontario, Canada",
    },
  ]

  return (
    <section
      id="education"
      className="flex items-center justify-center bg-black relative z-10 py-8 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 right-16 w-3 h-3 bg-[#D6A100] rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-24 w-3 h-3 bg-[#7A003C] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-zinc-200 to-[#D6A100] bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item) => (
            <div
              key={item.school}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-lg shadow-[#7A003C]/10 hover:shadow-[#7A003C]/20 hover:scale-[1.02] transition-all duration-300 text-center"
            >
              <item.icon className="text-[#D6A100] mb-4 mx-auto" size={40} />

              <p className="text-[#D6A100] font-semibold text-lg mb-3">
                {item.dates}
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {item.school}
              </h3>

              <p className="text-lg md:text-xl text-[#D6A100] font-semibold mb-3">
                {item.degree}
              </p>

              <div className="flex items-center justify-center text-zinc-500">
                <MapPin size={18} className="mr-2" />
                {item.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}