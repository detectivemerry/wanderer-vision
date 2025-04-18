import React from "react";
import CategoryCard from "@/components/CategoryCard";
import PageHeader from "@/components/PageHeader";
import Message from "../_lib/texts";

export default function events() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Events"
        description={Message.EventDesc}
        goBackLink="/"
      />

      <div className="flex gap-20 flex-wrap items-stretch">
        <div className="flex-1">
          <CategoryCard
            imagePath="contact/contact.png"
            title="Hashed and Friends Web3 Game Night"
            description={Message.EventHashedDesc}
            link="events/web3-game-night"
          />
        </div>
        <div className="flex-1">
          <CategoryCard
            imagePath="contact/contact.png"
            title="CAG Scholarship award"
            description={Message.EventCAG}
            link="events/CAG-scholarship-award"
          />
        </div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
}
