"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="flex justify-center gap-16">
      <div
        className={`${pathName == "/" && "font-bold"} cursor-pointer`}
        onClick={() => {
          router.push("/");
        }}
      >
        EVENTS
      </div>
      <div
        className={`${pathName == "/graduation" && "font-bold"} cursor-pointer`}
        onClick={() => {
          router.push("/graduation");
        }}
      >
        GRADUATION
      </div>
      <div
        className={`${pathName == "/about" && "font-bold"} cursor-pointer`}
        onClick={() => {
          router.push("/about");
        }}
      >
        ABOUT
      </div>
      <div
        className={`${pathName == "/contact" && "font-bold"} cursor-pointer`}
        onClick={() => {
          router.push("/contact");
        }}
      >
        CONTACT
      </div>
    </div>
  );
}
