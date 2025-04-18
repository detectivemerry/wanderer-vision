"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";

export default function about() {
  return (
    <div className="flex justify-center gap-8 mx-[20%] mt-16">
      <div className="container flex-1 flex justify-center">
        <img src="about/clinton_dp.png" />
      </div>
      <div className="flex flex-col flex-1 mt-8">
        <div className="font-bold text-center mb-12">ABOUT CLINTON LEE</div>
        <div className="px-8">
        </div>
        <div className="flex justify-center m-28">
          <Link href="/contact" className="no-underline">
            <Button
              variant="contained"
              sx={{
                color: "#333333",
                fontWeight: "bold",
                backgroundColor: "#FBEEAC",
              }}
            >
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
