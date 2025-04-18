import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  return(
    <div className = "flex flex-col">
      <div>
        <h1>Portfolio</h1>
      </div>
      <div className = "flex gap-10">
        <div>
          <CategoryCard imagePath="contact/contact.png" title = "Event photography" description="This is a description" link = "events"/>
        </div>
        <div>
          <CategoryCard imagePath="contact/contact.png" title = "Interior and Exterior Photography" description="This is a description" link = "interior-and-exterior"/>
        </div>
        <div>
          <CategoryCard imagePath="contact/contact.png" title = "Potrait Photography" description="This is a description" link = "potraits"/>
        </div>
      </div>

    </div>
  )

}

