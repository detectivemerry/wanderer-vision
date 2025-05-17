import React from "react";
import CategoryCard from "@/components/CategoryCard";
import PageHeader from "@/components/PageHeader";
import Message from "../_lib/texts";

export default function interiorAndExterior() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Interior and exterior"
        description={Message.EventDesc}
        goBackLink="/"
      />

      <div className="flex lg:gap-20 gap-4 flex-wrap items-stretch flex-col lg:flex-row">
        <div className="flex-1">
          <CategoryCard
            imagePath="contact/contact.png"
            title="category A"
            description={Message.EventDesc}
            link="events/web3-game-night"
          />
        </div>
        <div className="flex-1"></div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
}
