import "./globals.css"
import CustomCursor from "@/components/custom-cursor"

export const metadata = {
  title: "Atharva Ghodke | Automation Systems Engineer",
  description:
    "Portfolio of Atharva Ghodke, an Automation Systems Engineering student at McMaster University and Software Automation Engineer at BOXX Insurance.",
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