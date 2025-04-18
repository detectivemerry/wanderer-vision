import React from "react";
import CategoryCard from "@/components/CategoryCard";
import PageHeader from "@/components/PageHeader";

export default function events() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Events"
        description="This section showcases photography from various events, including corporate functions, private celebrations, and public gatherings. The focus is on capturing genuine moments, key highlights, and the overall atmosphere of each occasion."
        goBackLink="/"
      />

      <div className="flex gap-20 flex-wrap items-stretch">
        <div className="flex-1">
          <CategoryCard
            imagePath="contact/contact.png"
            title="Hashed and Friends Web3 Game Night"
            description="This section captures the highlights of the Hashed and Friends Web3 Game Night, an industry networking event hosted in collaboration with leading Web3 partners including Glip, Avocado DAO, PlotX, UNOPND, and GuildFi. "
            link="events/web3-game-night"
          />
        </div>
        <div className="flex-1">
          <CategoryCard
            imagePath="contact/contact.png"
            title="CAG Scholarship award"
            description="This section showcases photography from the CAG Undergraduate Scholarship Ceremony, highlighting key moments from the event including award presentations, recipient portraits, and candid interactions. "
            link="events/CAG-scholarship-award"
          />
        </div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
}
