"use client"

export default function SkillsOrbit() {
  const skills = [
    "Python",
    "C++",
    "Java",
    "JS",
    "HTML",
    "CSS",
    "SQL",
    "React",
    "Next.js",
    "Selenium",
    "OpenCV",
    "OCR",
    "JSON",
    "SQLite",
  ]

  return (
    <div className="relative mx-auto my-10 h-[320px] w-[320px] md:h-[420px] md:w-[420px]">
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes counterOrbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .orbit-ring {
          animation: orbit 30s linear infinite;
        }

        .orbit-item {
          animation: counterOrbit 30s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 rounded-full border border-[#7A003C]/40 shadow-[0_0_50px_rgba(122,0,60,0.25)]"></div>
      <div className="absolute inset-10 rounded-full border border-[#D6A100]/20"></div>
      <div className="absolute inset-20 rounded-full border border-zinc-800"></div>

      <div className="absolute inset-0 orbit-ring">
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 360

          return (
            <div
              key={skill}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translate(165px) rotate(-${angle}deg)`,
              }}
            >
              <div className="orbit-item -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-300 shadow-lg shadow-[#7A003C]/20 hover:border-[#D6A100] hover:text-[#D6A100] transition-all duration-300 md:text-base">
                {skill}
              </div>
            </div>
          )
        })}
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-32 w-32 md:h-40 md:w-40 items-center justify-center rounded-full border border-[#D6A100]/50 bg-black shadow-[0_0_60px_rgba(214,161,0,0.18)]">
          <div className="text-center">
            <p className="text-xs tracking-[0.35em] text-zinc-500"></p>
            <h3 className="mt-2 text-lg md:text-xl font-bold bg-gradient-to-r from-white to-[#D6A100] bg-clip-text text-transparent">
              SKILLS & TECH STACK
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}