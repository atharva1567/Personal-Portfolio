"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const hideCursor = () => setIsVisible(false)

    const checkHover = (e) => {
      const target = e.target
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest(".cursor-hover")

      setIsHovering(Boolean(isInteractive))
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousemove", checkHover)
    window.addEventListener("mouseleave", hideCursor)
    window.addEventListener("mouseenter", () => setIsVisible(true))

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousemove", checkHover)
      window.removeEventListener("mouseleave", hideCursor)
      window.removeEventListener("mouseenter", () => setIsVisible(true))
    }
  }, [])

  useEffect(() => {
    const animateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }))

      requestAnimationFrame(animateTrail)
    }

    const animation = requestAnimationFrame(animateTrail)

    return () => cancelAnimationFrame(animation)
  }, [position])

  return (
    <>
      <style jsx global>{`
        @media (min-width: 768px) {
          body,
          a,
          button {
            cursor: none !important;
          }
        }
      `}</style>

      <div
        className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${trailPosition.x - 18}px, ${trailPosition.y - 18}px)`,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isHovering
              ? "h-14 w-14 border-[#D6A100] bg-[#7A003C]/10 shadow-[0_0_30px_rgba(214,161,0,0.35)]"
              : "h-9 w-9 border-[#7A003C]/80 bg-transparent shadow-[0_0_20px_rgba(122,0,60,0.35)]"
          }`}
        ></div>
      </div>

      <div
        className={`pointer-events-none fixed left-0 top-0 z-[10000] hidden md:block transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovering
              ? "h-3 w-3 bg-[#D6A100] shadow-[0_0_18px_rgba(214,161,0,0.8)]"
              : "h-2 w-2 bg-[#D6A100] shadow-[0_0_14px_rgba(214,161,0,0.7)]"
          }`}
        ></div>
      </div>
    </>
  )
}