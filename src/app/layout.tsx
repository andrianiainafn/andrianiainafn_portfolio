import type { Metadata } from "next";
import { Inter,Montserrat  } from "next/font/google";
import "./globals.css";
import React from "react";
import {Toaster} from "@/components/ui/toaster";

const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio of Nomena",
  description: "Created by Nomena Andrianiaina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} scroll-smooth`}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
