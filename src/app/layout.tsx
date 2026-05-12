import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hithesh - Software Developer & Vibe Coder",
  description: "Portfolio of Hithesh, showcasing robust web architectures and code that passes the vibe check.",
  icons: {
    icon: "https://i.postimg.cc/XJ7PCdHW/Whats-App-Image-2025-12-07-at-9-10-18-PM.jpg",
    apple: "https://i.postimg.cc/XJ7PCdHW/Whats-App-Image-2025-12-07-at-9-10-18-PM.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-black">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
