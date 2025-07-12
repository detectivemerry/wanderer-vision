import React from "react";
import CategoryCard from "@/components/CategoryCard";
import PageHeader from "@/components/PageHeader";
import Message from "../_lib/texts";
// import image1 from "@/public/Architecture/Delta/Delta-001.jpg"
// import image2 from "@/public/Architecture/Grada_Office/Grada Office-001.jpg"
// import image3 from "@/public/Architecture/Keong_Saik_Bakery/Keong-Saik-Bakery-001.jpg"
// import image4 from "@/public/Architecture/Storhub_Exterior_New/Storhub-Exterior-001.jpg"
// import image5 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-001.jpg"

export default function architecture() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Architecture"
        description={Message.ArchitectureDesc}
        goBackLink="/"
      />

      <div className="flex lg:gap-20 gap-4 flex-wrap items-stretch flex-col lg:flex-row mb-4">
        <div className="flex-1">
          <CategoryCard
            imagePath="Architecture/Delta/Delta-001.jpg"
            title="Delta"
            description={Message.Architecture_Delta}
            link="architecture/delta"
          />
        </div>
        <div className="flex-1">
          <CategoryCard
            imagePath="Architecture/Grada_Office/Grada Office-001.jpg"
            title="Grada Office"
            description={Message.Architecture_Grada_Office}
            link="architecture/grada-office"
          />
        </div>
        <div className="flex-1">
          <CategoryCard
            imagePath="Architecture/Keong_Saik_Bakery/Keong-Saik-Bakery-001.jpg"
            title="Keong Saik Bakery"
            description={Message.Architecture_Keong_Saik_Bakery}
            link="architecture/keong-saik-bakery"
          />
        </div>
      </div>
      <div className="flex lg:gap-20 gap-4 flex-wrap items-stretch flex-col lg:flex-row mb-4">
        <div className="flex-1">
          <CategoryCard
            imagePath="Architecture/Storhub_Exterior_New/Storhub-Exterior-001.jpg"
            title="Storhub Exterior"
            description={Message.Architecture_Storhub_Exterior_New}
            link="architecture/storhub-exterior"
          />
        </div>
        <div className="flex-1">
          <CategoryCard
            imagePath="Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-001.jpg"
            title="Yew Tee Point"
            description={Message.Architecture_Yew_Tee_Point}
            link="architecture/yew-tee-point"
          />
        </div>

        <div className = "flex-1"></div>
      </div>
    </div>
  );
}
