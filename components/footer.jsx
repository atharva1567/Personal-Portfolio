import VisitorCounter from "@/components/visitor-counter"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-white py-8 px-4 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-zinc-500">
          © 2026 Atharva Ghodke. All rights reserved.
        </p>

        <VisitorCounter />
      </div>
    </footer>
  )
}