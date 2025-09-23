import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata =  { title: "Restaurant" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <Navbar />
        <main className="bg-brand/30 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
