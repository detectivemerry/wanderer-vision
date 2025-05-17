import CategoryCard from "@/components/CategoryCard";
import Message from "../_lib/texts";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="text-3xl lg:mt-4 lg:mb-20">Portfolio</div>
      <div className="flex lg:gap-20 gap-5 flex-wrap items-stretch mb-6">
        <div className = "flex-1">
          <CategoryCard
            imagePath="contact/contact.png"
            title="Event photography"
            description={Message.EventDesc}
            link="events"
          />
        </div>
        <div className = "flex-1">
          <CategoryCard
            imagePath="contact/contact.png"
            title="Interior and Exterior Photography"
            description={Message.IntAndExtDesc}
            link="interior-and-exterior"
          />
        </div>
        <div className = "flex-1">
          <CategoryCard
            imagePath="contact/contact.png"
            title="Portrait Photography"
            description={Message.PortraitDesc}
            link="portraits"
          />
        </div>
      </div>
    </div>
  );
}
