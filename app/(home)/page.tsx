import CategoryCard from "@/components/CategoryCard";
import Message from "../_lib/texts";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="text-3xl mt-4 mb-20">Portfolio</div>
      <div className="flex gap-20 flex-wrap items-stretch">
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
