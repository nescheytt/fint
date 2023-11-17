import * as React from "react"
import { Inter } from "next/font/google"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Providers } from "@/components/Providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fint",
  description: "This is the description of the page",
  keywords: ["administrador", "pagos", "online"],
  authors: [{ name: "Nahuel Scheytt", url: "https://nahuelscheytt.com" }],
}

export const viewport: Viewport = {
  themeColor: {
    media: "(prefers-color-scheme: light)",
    color: "#FFFFFF",
  },
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
