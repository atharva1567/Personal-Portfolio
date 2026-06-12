"use client"

import { Award, GraduationCap, Scale, Plane } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: "McMaster University Award of Excellence",
      issuer: "McMaster University",
      date: "Sep 2025",
      association: "Bachelor of Technology - Automation Systems Engineering (Co-op)",
      description:
        "Recipient of an Entrance Scholarship for Automation Systems Engineering (Co-op), awarded in recognition of Grade 12 cumulative average within the top 10% of the program.",
    },
    {
      icon: GraduationCap,
      title: "Ontario Scholar & Honor Roll (4 Years)",
      issuer: "Durham District School Board",
      date: "Jun 2025",
      association: "J. Clarke Richardson Collegiate",
      description:
        "Recognized for maintaining an academic average of 80% or greater and earning Honor Roll distinction throughout high school.",
    },
    {
      icon: Scale,
      title: "2025 Kelly Cup Tournament Champion",
      issuer: "Ontario Justice Education Network",
      date: "Apr 2025",
      association: "J. Clarke Richardson Collegiate",
      description:
        "Placed 1st Overall at the 2025 Kelly Cup Mock Trial Tournament.",
    },
    {
      icon: Plane,
      title: "Top Recruit Award",
      issuer: "856 Pickering Royal Kinsmen Air Cadet Squadron",
      date: "Sep 2020",
      association: "Royal Canadian Air Cadets",
      description:
        "Achieved the highest score in application and knowledge testing, ranking 1st out of approximately 100 recruits.",
    },
  ]

  return (
    <section
      id="achievements"
      className="flex items-center justify-center bg-zinc-950 relative z-10 py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-[#D6A100] bg-clip-text text-transparent">
            Achievements & Awards
          </h2>

          <p className="text-xl text-zinc-400">
            Academic, Leadership, & Competition-Based Recognition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-black border border-zinc-800 rounded-3xl p-7 shadow-lg shadow-[#7A003C]/10 hover:shadow-[#7A003C]/25 hover:scale-[1.02] transition-all duration-300"
            >
              <achievement.icon className="text-[#D6A100] mb-5" size={38} />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <h3 className="text-2xl font-bold text-white">
                  {achievement.title}
                </h3>

                <span className="text-sm font-semibold text-[#D6A100] whitespace-nowrap">
                  {achievement.date}
                </span>
              </div>

              <p className="text-[#D6A100] font-medium mb-1">
                Issued by {achievement.issuer}
              </p>

              <p className="text-zinc-500 text-sm mb-4">
                Associated with {achievement.association}
              </p>

              <p className="text-zinc-400 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}