import React from "react";
import CategoryCard from "@/components/CategoryCard";
import PageHeader from "@/components/PageHeader";

export default function portraits() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Portraits"
        description="This section features a range of portrait work, including professional headshots, graduation portraits, and other personalized sessions. Each photograph is crafted to highlight individuality, expression, and character in a refined and authentic way."
        goBackLink="/"
      />

      <div className="flex gap-20 flex-wrap items-stretch">
        <div className="flex-1">
          <CategoryCard
            imagePath="graduation/1SN01406.jpg"
            title="Graduation portraits"
            description="This section features graduation portrait photography, capturing a milestone moment with a focus on individuality, accomplishment, and timeless presentation. Sessions include both formal and candid portraits to commemorate this significant achievement."
            link="portraits/graduation"
          />
        </div>
        <div className="flex-1"></div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
}
