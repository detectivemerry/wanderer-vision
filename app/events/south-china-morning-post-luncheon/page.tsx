
import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

import image1 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-002.jpg"
import image2 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-007.jpg"
import image3 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-008.jpg"
import image4 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-010.jpg"
import image5 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-014.jpg"
import image6 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-016.jpg"
import image7 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-019.jpg"
import image9 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-021.jpg"
import image10 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-043.jpg"
import image11 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-048.jpg"
import image12 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-064.jpg"
import image13 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-065.jpg"
import image14 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-066.jpg"
import image8 from "@/public/Events/South_China_Morning_Post_Luncheon/South-China-Morning-Post-Luncheon-084.jpg"

export default function delta() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="South China Morning Post Luncheon"
        description={Message.Events_South}
        goBackLink="/events"
      />
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <div>
          <Image
            src = {image1}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image2}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image3}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image4}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image5}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image6}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image7}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image9}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image10}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image11}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image12}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image13}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image14}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image8}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
