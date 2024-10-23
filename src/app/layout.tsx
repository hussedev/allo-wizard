import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { ControlsProvider } from "@/contexts/Controls";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Allo Strategies Wizard",
  description: "An interactive strategy generator based on Allo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col justify-between min-h-screen">
          <Navbar />
          {children}
          <footer className="bg-muted py-6">
            <div className="container mx-auto text-center text-[#757588] text-[13px]">
              <p>&copy; Allo Strategy Generator based on OpenZeppelin 2024</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
