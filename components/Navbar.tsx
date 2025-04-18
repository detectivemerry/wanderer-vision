"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="flex justify-between gap-16">
      <div className = "w-[10%] border-2">
        <img src="logo/wanderer_vision_logo.png" />
      </div>
      <div className = "flex border-2">
        <div
          className={`${pathName == "/" && "font-bold"} cursor-pointer`}
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </div>
        <div
          className={`${
            pathName == "/graduation" && "font-bold"
          } cursor-pointer`}
          onClick={() => {
            router.push("/graduation");
          }}
        >
          Photos
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
    </div>
  );
}
