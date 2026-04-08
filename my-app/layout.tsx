import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/frontend/styles/globals.css";
import { Providers } from "@/frontend/components/providers";
import { Navbar } from "@/frontend/components/navbar";
import { Footer } from "@/frontend/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'https://revive.dev'),
  title: {
    default: "Revive.dev - Breathe Life Into Dead Open Source",
    template: "%s | Revive.dev"
  },
  description: "The protocol for inheriting and reviving abandoned open-source projects. Discover untended repositories, request adoption, and receive official handover certificates.",
  keywords: ["open source", "github", "project revival", "software inheritance", "abandoned repos", "tech sustainability"],
  authors: [{ name: "Kushaal Nayak" }],
  creator: "ReviveDev Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://revive.dev",
    siteName: "Revive.dev",
    title: "Revive.dev - The Open Source Inheritance Protocol",
    description: "Don't let good code die. Adopt, contribute, and revive abandoned GitHub projects with full maintainer handover.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Revive.dev - Protocol for Open Source Revival",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revive.dev",
    description: "Inherit and revive abandoned open-source projects.",
    creator: "@KushaalNayak",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans bg-background text-foreground antialiased min-h-screen relative overflow-x-hidden`}>
        <Providers>
          <Navbar />
          <div className="relative z-10 flex min-h-screen flex-col">
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
          
          {/* Background Decorations */}
          <div className="fixed inset-0 bg-dot-grid pointer-events-none -z-20" />
          <div className="fixed inset-0 bg-background/50 pointer-events-none -z-10" />
          <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />
        </Providers>
      </body>
    </html>
  );
}



