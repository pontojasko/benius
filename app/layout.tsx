import type { Metadata } from "next";
import { Tiny5 } from "next/font/google";
import "./globals.css";

const tiny = Tiny5({
  variable: "--font-tiny-5",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});


export const metadata: Metadata = {
  title: "Benius",
  description: "By Jasko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${tiny.className} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
