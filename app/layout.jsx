import "./globals.css"
import CustomCursor from "@/components/custom-cursor"

export const metadata = {
  title: "Atharva Ghodke | Automation Systems Engineer",
  description:
    "Portfolio of Atharva Ghodke, an Automation Systems Engineering student at McMaster University and Software Automation Engineer at BOXX Insurance.",

  openGraph: {
    title: "Atharva Ghodke | Automation Systems Engineer",
    description:
      "Automation Systems Engineering @ McMaster | Software Automation | Machine Learning | AI",
    siteName: "Atharva Ghodke",
    type: "website",
    images: [
      {
        url: "/images/portfolio-preview.png",
        width: 1200,
        height: 627,
        alt: "Atharva Ghodke Portfolio",
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}