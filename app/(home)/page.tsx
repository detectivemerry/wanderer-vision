import CategoryCard from "@/components/CategoryCard";
import Message from "../_lib/texts";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="text-3xl lg:mt-4 lg:mb-20">Portfolio</div>
      <div className="flex lg:gap-20 gap-5 flex-wrap items-stretch mb-6">
        <div className = "flex-1">
          <CategoryCard
            // imagePath="Architecture/Keong_Saik_bakery/Keong-Saik-Bakery-002.jpg"
            // imagePath="Architecture/Delta/Delta-001.jpg"
            imagePath="Architecture/Keong_Saik_Bakery/Keong-Saik-Bakery-002.jpg"          
            title="Architecture"
            description={Message.ArchitectureDesc}
            link="events"
          />
        </div>
        <div className = "flex-1">
          <CategoryCard
            imagePath="Corporate_Portraiture_Photo/Corporate_Portraits/Wong-Wei-Ling-001.jpg"
            title="Corporate Portraiture"
            description={Message.CorporatePortaitDesc}
            link="interior-and-exterior"
          />
        </div>
        <div className = "flex-1">
          <CategoryCard
            imagePath="Events/Munich_Re_Conference/Munich-Re-Conference-007.jpg"
            title="Events Photography"
            description={Message.EventDesc}
            link="portraits"
          />
        </div>
      </div>
    </div>
  );
}
