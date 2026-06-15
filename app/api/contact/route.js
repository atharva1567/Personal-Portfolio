import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          error: "All fields are required.",
        },
        {
          status: 400,
        }
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",

      to: process.env.VISITOR_ALERT_EMAIL,

      replyTo: email,

      subject: `Portfolio Message: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Message 🚀</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr />

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    })

    if (error) {
      return Response.json(
        {
          error,
        },
        {
          status: 500,
        }
      )
    }

    return Response.json({
      success: true,
      data,
    })
  } catch (error) {
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