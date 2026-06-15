import { Redis } from "@upstash/redis"
import { Resend } from "resend"
import crypto from "crypto"

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const resend = new Resend(process.env.RESEND_API_KEY)

function hashVisitor(input) {
  return crypto.createHash("sha256").update(input).digest("hex")
}

export async function GET(request) {
  try {
    const cookies = request.headers.get("cookie") || ""
    const isOwner = cookies.includes("owner=true")

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown-ip"

    const userAgent = request.headers.get("user-agent") || "unknown-agent"
    const referer = request.headers.get("referer") || "Direct visit"

    const visitorId = hashVisitor(`${ip}-${userAgent}`)
    const visitorKey = `visitor:${visitorId}`

    if (isOwner) {
      const count = (await redis.get("portfolio-visits")) || 0
      return Response.json({ count, owner: true, counted: false })
    }

    const alreadyVisited = await redis.get(visitorKey)

    let count = (await redis.get("portfolio-visits")) || 0
    let counted = false

    if (!alreadyVisited) {
      count = await redis.incr("portfolio-visits")
      counted = true

      await redis.set(visitorKey, "true", {
        ex: 60 * 60 * 24 * 30,
      })
    }

    const now = new Date().toLocaleString("en-CA", {
      timeZone: "America/Toronto",
      dateStyle: "medium",
      timeStyle: "long",
    })

    if (counted && count % 20 === 0) {
      const { data, error } = await resend.emails.send({
        from: "Portfolio Alerts <onboarding@resend.dev>",
        to: process.env.VISITOR_ALERT_EMAIL,
        subject: `Portfolio reached ${count} unique visitors`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Portfolio Visitor Update</h2>
            <p>Your portfolio has reached <strong>${count}</strong> unique visitors.</p>
            <hr />
            <p><strong>Time:</strong> ${now}</p>
            <p><strong>Referrer:</strong> ${referer}</p>
            <p><strong>User Agent:</strong> ${userAgent}</p>
          </div>
        `,
      })

      if (error) {
        console.error("Resend email error:", error)
      } else {
        console.log("Resend email sent:", data)
      }
    }

    return Response.json({
      count,
      owner: false,
      counted,
    })
  } catch (error) {
    console.error("Visit API error:", error)

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    )
  }
}