"use client"

import { useScrollAnimation, animationVariants } from "@/components/enhanced-scroll-animations"

export default function AboutSection() {
  const {
    elementRef,
    isVisible: scrollVisible,
    animationStage,
  } = useScrollAnimation({
    threshold: 0.3,
    stages: 4,
    staggerDelay: 300,
  })

  return (
    <section
      ref={elementRef}
      id="about"
      className="min-h-screen flex items-center justify-center bg-black relative z-10 py-20 px-4 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 border border-[#7A003C]/40 rounded-full animate-float opacity-40"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-[#7A003C]/30 to-[#A6192E]/30 rounded-lg animate-float animation-delay-1000 opacity-40 rotate-45"></div>
        <div className="absolute bottom-40 left-20 w-10 h-10 border border-[#D6A100]/40 rounded-full animate-float animation-delay-2000 opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-r from-[#7A003C]/20 to-[#D6A100]/20 rounded-full animate-float animation-delay-1500 opacity-30"></div>

        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(122, 0, 60, 0.7) 1px, transparent 0)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[#7A003C]/30 text-3xl font-mono animate-float animation-delay-500">
          {"</>"}
        </div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[#D6A100]/30 text-2xl font-mono animate-float animation-delay-1500">
          {"{}"}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div
              className="will-change-transform"
              style={animationVariants.fadeInUp(scrollVisible && animationStage >= 1, 0)}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-200 to-[#D6A100] bg-clip-text text-transparent">
                About Me
              </h2>

              <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
                <p>
                  Hey! I'm Atharva Ghodke, an Automation Systems Engineering student at 
                  McMaster University, currently working as a Software Automation Engineer 
                  at BOXX Insurance, a Machine Learning Engineer Intern at 
                  FlyRank AI, and serving as one of the WebMasters for AIAA at McMaster.
                </p>

                <p>
                  My interests sit at the intersection of artificial intelligence, computer vision, automation, and
                  software engineering. I enjoy building systems that automate complex workflows, extract meaningful data,
                  and turn real-world problems into practical software solutions.
                </p>

                <p>
                  At BOXX Insurance, I'm developing OCR and computer vision pipelines for broker PDF processing,
                  checkbox detection, field mapping, and structured JSON outputs for internal underwriting workflows. 
                  At FlyRank AI, I'm learning machine learning models for automated data analysis and predictions. 
                </p>

                <p>
                  Outside of engineering, my background in Air Cadets, Mock trial, Tutoring, and Coaching has shaped how I
                  approach leadership, communication, discipline, and problem-solving under pressure.
                </p>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 will-change-transform"
              style={animationVariants.fadeInUp(scrollVisible && animationStage >= 2, 300)}
            >
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-lg shadow-[#7A003C]/10">
                <h3 className="text-xl font-semibold text-white mb-2">Automation</h3>
                <p className="text-zinc-400">
                  Building workflows that reduce repetitive work and improve technical processes.
                </p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-lg shadow-[#7A003C]/10">
                <h3 className="text-xl font-semibold text-white mb-2">Computer Vision</h3>
                <p className="text-zinc-400">
                  Working with OCR, OpenCV, document processing, and structured data extraction.
                </p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-lg shadow-[#7A003C]/10">
                <h3 className="text-xl font-semibold text-white mb-2">Engineering</h3>
                <p className="text-zinc-400">
                  Combining software, automation systems, and analytical thinking to solve real problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}