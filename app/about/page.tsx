"use client"
import React from "react";

export default async function about() {
  return (
    <div className="flex justify-center gap-8 mx-[20%] mt-16">
      <div className = "container flex-1 flex justify-center">
        <img src="about/clinton_dp.png"/>
      </div>
      <div className="flex flex-col flex-1 mt-8">
        <div className="font-bold text-center mb-12">ABOUT CLINTON LEE</div>
        <div className = "px-8">
          Hey there! I'm Clinton, a freelance cameraman based in Singapore with
          a passion for capturing life’s best moments. I started my journey
          working under a professional photography company, where I gained
          hands-on experience shooting weddings, events, and all kinds of
          special occasions. Now, as a freelancer, I bring that same dedication
          and eye for detail to every shoot, making sure each moment is
          beautifully preserved. Whether it’s a big wedding celebration or a
          corporate event, I aim to tell your story through natural, heartfelt,
          and high-quality images. Let’s create something amazing together! 📸
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
