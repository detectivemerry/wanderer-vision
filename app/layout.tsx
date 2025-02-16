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
      <body className={font.className}>
        <div className = "flex justify-center m-6">
          <img src = "logo/wanderer_vision_logo.png"/>
        </div>
        <div className = "m-12">
          <Navbar/> 
        </div>
        {children}
      </body>
    </html>
  );
}
