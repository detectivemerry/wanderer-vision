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

      <div className="flex lg:gap-20 gap-4 flex-wrap items-stretch flex-col lg:flex-row mb-4">
        <div className="flex-1">
          <CategoryCard
            imagePath="/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-025.jpg"
            title="5E Project Development of Add-on Children’s Picture"
            description={Message.Events_5E}
            link="events/5E-project-development-of-add-on-children-picture"
          />
        </div>
        <div className="flex-1 ">
          <CategoryCard
            imagePath="/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-008.jpg"
            title="AIA 48th Annual Agency Awards"
            description={Message.Events_AIA}
            link="events/AIA-48th-annual-agency-awards"
          />
        </div>
        <div className="flex-1 ">
          <CategoryCard
            imagePath="/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-035.jpg"
            title="Chinese language and culture public lecture"
            description={Message.Events_Chinese}
            link="events/chinese-language-and-culture-public-lecture"
          />
        </div>
      </div>

      <div className="flex lg:gap-20 gap-4 flex-wrap items-stretch flex-col lg:flex-row mb-4">
        <div className="flex-1 ">
          <CategoryCard
            imagePath="/Events/Huationg_Contractor/Huationg-D&D-2023-008.jpg"
            title="Huationg Contractor D&D"
            description={Message.Events_Huationg}
            link="events/huationg-contractor"
          />
        </div>
        <div className="flex-1 ">
          <CategoryCard
            imagePath="/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-005.jpg"
            title="Invade X ArtBox Day 3"
            description={Message.Events_Invade}
            link="events/invade-x-artbox-day-3"
          />
        </div>
        <div className="flex-1 ">
          <CategoryCard
            imagePath="/Events/Munich_Re_Conference/Munich-Re-Conference-007.jpg"
            title="Munich Re Conference"
            description={Message.Events_Munich}
            link="events/munich-re-conference"
          />
        </div>
      </div>

      <div className="flex lg:gap-20 gap-4 flex-wrap items-stretch flex-col lg:flex-row mb-4">
        <div className="flex-1 ">
          <CategoryCard
            imagePath="/Events/OMI_Celebration_We_Are_One_AbbVie_v2/OMI-Celebration-004.jpg"
            title="OMI celebration"
            description={Message.Events_OMI}
            link="events/OMI-celebration-we-are-one-abbVie-v2"
          />
        </div>
        <div className="flex-1 ">
          <CategoryCard
            imagePath="/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-010.jpg"
            title="South China Morning Post Luncheon"
            description={Message.Events_South}
            link="events/south-china-morning-post-luncheon"
          />
        </div>

        <div className="flex-1"></div>
      </div>
    </div>
  );
}
