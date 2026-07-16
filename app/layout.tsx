import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Bible App",
  description: "Access the Bible on the go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-slate-900 min-h-full flex flex-col">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 md:pb-28 flex flex-col justify-center min-h-[calc(100vh-4rem)]">
          {children}
        </section>
      </body>
    </html>
  );
}
