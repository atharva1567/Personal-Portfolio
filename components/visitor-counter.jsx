"use client"

import { useEffect, useState } from "react"

export default function VisitorCounter() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch("/api/visit")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(console.error)
  }, [])

  return (
    <p className="text-zinc-500 text-sm mt-2">
      Visitors: {count ?? "..."}
    </p>
  )
}