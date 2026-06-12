import { Redis } from "@upstash/redis"
import { Resend } from "resend"

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(request) {
  try {
    const count = await redis.incr("portfolio-visits")

    const userAgent = request.headers.get("user-agent") || "Unknown"
    const referer = request.headers.get("referer") || "Direct visit"

    const now = new Date().toLocaleString("en-CA", {
      timeZone: "America/Toronto",
      dateStyle: "medium",
      timeStyle: "long",
    })

    if (count % 5 === 0) {
      const { data, error } = await resend.emails.send({
        from: "Portfolio Alerts <onboarding@resend.dev>",
        to: process.env.VISITOR_ALERT_EMAIL,
        subject: `Portfolio reached ${count} visits`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Portfolio Visitor Update</h2>
            <p>Your portfolio has reached <strong>${count}</strong> total visits.</p>
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

    return Response.json({ count })
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