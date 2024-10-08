import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";

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
const ZodiakExtraBold = localFont({
  src: "./fonts/Zodiak-ExtraBold.woff",
  variable: "--font-zodiak-extra",
  weight: "100 900",
});
const ZodiakRegular = localFont({
  src: "./fonts/Zodiak-Regular.woff",
  variable: "--font-zodiak-reg",
  weight: "100 900",
});
const ZodiakBold = localFont({
  src: "./fonts/Zodiak-Bold.woff",
  variable: "--font-zodiak-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ZodiakBold.variable} ${ZodiakExtraBold.variable} ${ZodiakRegular.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
