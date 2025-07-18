import React from "react";
import { Mail } from "@mui/icons-material";

export default function contact() {
  return (
    <div className="flex justify-center gap-8 mx-[20%] mt-16">
      <div className="flex flex-col flex-1 mt-8">
        <div className="font-bold text-center mb-12">{"LET'S TALK"}</div>
        <div className="px-8 text-center">
          {
            "Have a question? Reach out! For inquiries about availability, pricing, or anything else, send us an email—we’d love to hear from you! We’ll get back to you as soon as possible."
          }
        </div>
        <div className="flex justify-center m-28">
          <div className="flex gap-2">
            <Mail />
            <span className="font-bold">clinton.lee.photography@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
