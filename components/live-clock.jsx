"use client"

import { useEffect, useState } from "react"

export default function LiveClock() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()

      const torontoTime = now.toLocaleTimeString("en-CA", {
        timeZone: "America/Toronto",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })

      setTime(torontoTime)
    }

    updateClock()

    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center gap-2 text-zinc-400 text-sm md:text-base mb-6">
      <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
      <span>Toronto, ON • {time} EST</span>
    </div>
  )
}