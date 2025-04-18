import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="text-3xl mt-4 mb-20">Portfolio</div>
      <div className="flex gap-20 flex-wrap items-stretch">
        <div className = "flex-1">
          <CategoryCard
            imagePath="contact/contact.png"
            title="Event photography"
            description="This section showcases photography from various events, including corporate functions, private celebrations, and public gatherings. The focus is on capturing genuine moments, key highlights, and the overall atmosphere of each occasion."
            link="events"
          />
        </div>
        <div className = "flex-1">
          <CategoryCard
            imagePath="contact/contact.png"
            title="Interior and Exterior Photography"
            description="This section features photography highlighting architectural details, interior design, and exterior spaces. The focus is on capturing structure, style, and spatial atmosphere with clarity and precision."
            link="interior-and-exterior"
          />
        </div>
        <div className = "flex-1">
          <CategoryCard
            imagePath="contact/contact.png"
            title="Potrait Photography"
            description="This section features a range of portrait work, including professional headshots, graduation portraits, and other personalized sessions. Each photograph is crafted to highlight individuality, expression, and character in a refined and authentic way."
            link="potraits"
          />
        </div>
      </div>
    </div>
  );
}
