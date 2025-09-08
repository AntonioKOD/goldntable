import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/Navbar";
import { SiteFooter } from "@/components/footer";

// Main sans-serif font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// (Optional) keep mono font if you still want it for code blocks or UI
// import { Geist_Mono } from "next/font/google";
// const geistMono = Geist_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });

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
      <body
        className={`${montserrat.variable} antialiased`} // add geistMono.variable if you keep it
      >
        <header className="sticky top-0 z-40 w-full">
          <NavbarComponent />
        </header>
        <main className="min-h-[calc(100dvh-4rem)]">{children}</main>
        <footer className="border-t">
          <SiteFooter />
        </footer>
      </body>
    </html>
  );
}