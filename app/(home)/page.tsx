import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="text-3xl mt-4 mb-20">Portfolio</div>
      <div className="flex gap-10">
        <div>
          <CategoryCard
            imagePath="contact/contact.png"
            title="Event photography"
            description="This is a description"
            link="events"
          />
        </div>
        <div>
          <CategoryCard
            imagePath="contact/contact.png"
            title="Interior and Exterior Photography"
            description="This is a description"
            link="interior-and-exterior"
          />
        </div>
        <div>
          <CategoryCard
            imagePath="contact/contact.png"
            title="Potrait Photography"
            description="This is a description"
            link="potraits"
          />
        </div>
      </div>
    </div>
  );
}
