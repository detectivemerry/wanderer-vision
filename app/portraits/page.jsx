import React from "react";
import CategoryCard from "@/components/CategoryCard";
import PageHeader from "@/components/PageHeader";
import Message from "../_lib/texts";

export default function portraits() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Portraits"
        description={Message.PortraitDesc}
        goBackLink="/"
      />

      <div className="flex gap-20 flex-wrap items-stretch">
        <div className="flex-1">
          <CategoryCard
            imagePath="graduation/1SN01406.jpg"
            title="Graduation portraits"
            description={Message.PortraitGradDesc}
            link="portraits/graduation"
          />
        </div>
        <div className="flex-1"></div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
}
