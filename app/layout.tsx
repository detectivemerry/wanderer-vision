import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Oxygen } from "next/font/google"; 

const font = Oxygen({weight : "400", subsets : ["latin"]});

export const metadata: Metadata = {
  title: "Wanderer Vision",
  description: "Photography portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={font.className}>
        <div className = "">
          <Navbar/> 
        </div>
        <div className = "mx-20">
        {children}
        </div>
      </body>
    </html>
  );
}
