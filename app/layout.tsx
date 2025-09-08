import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import NavbarComponent from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boston Hospitality Training",
  description:
    "Student-first training for Boston restaurant jobs. Get job-ready in weeks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-40 w-full">
         <NavbarComponent/>
        </header>
        <main className="min-h-[calc(100dvh-4rem)]">{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex items-center justify-between">
            <p>© {new Date().getFullYear()} Boston Hospitality Training</p>
            <div className="flex gap-4">
              <Link href="/about" className="hover:opacity-80">About</Link>
              <Link href="/faq" className="hover:opacity-80">FAQ</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
