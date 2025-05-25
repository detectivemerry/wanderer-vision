import React from "react";
import CategoryCard from "@/components/CategoryCard";
import PageHeader from "@/components/PageHeader";
import Message from "../_lib/texts";

export default function architecture() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Potraiture"
        description={Message.CorporatePortaitDesc}
        goBackLink="/"
      />

      <div className="flex lg:gap-20 gap-4 flex-wrap items-stretch flex-col lg:flex-row mb-4">
        <div className="flex-1">
          <CategoryCard
            imagePath="/Corporate_Portraiture_Photo/Corporate_Portraits/Koh-Chin-Chin-003.jpg"
            title="Coporate Portraiture"
            description={Message.CorporatePortait_Corporate}
            link="portraiture/corporate"
          />
        </div>
        <div className="flex-1">
          <CategoryCard
            imagePath="/Corporate_Portraiture_Photo/Graduation/graduation-003.jpg"
            title="Graduation Portraiture"
            description={Message.CorporatePortait_Grad}
            link="portraiture/graduation"
          />
        </div>
        <div className = "flex-1"></div>
      </div>
    </div>
  );
}
