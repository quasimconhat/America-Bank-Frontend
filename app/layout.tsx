import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";


const clashDisplayFont = localFont({
  src: [
    {
      path: "../public/fonts/clash-display/ClashDisplayLight.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplayRegular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplayMedium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplaySemibold.otf",
      weight: "600",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplayBold.otf",
      weight: "700",
    },
  ],
  variable: "--font-clash-display",
});



export const metadata: Metadata = {
  title: "AiBuildIQ",
  description: "Make The AI-Driven Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={clashDisplayFont.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="relative overflow-hidden "> {children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}