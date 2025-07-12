import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";
import image1 from "@/public/Architecture/Grada_Office/Grada Office-001.jpg"
import image2 from "@/public/Architecture/Grada_Office/Grada Office-003.jpg"
import image3 from "@/public/Architecture/Grada_Office/Grada Office-006.jpg"
import image4 from "@/public/Architecture/Grada_Office/Grada Office-010.jpg"
import image5 from "@/public/Architecture/Grada_Office/Grada Office-011.jpg"
import image6 from "@/public/Architecture/Grada_Office/Grada Office-013.jpg"
import image7 from "@/public/Architecture/Grada_Office/Grada Office-015.jpg"
import image8 from "@/public/Architecture/Grada_Office/Grada Office-018.jpg"
import image9 from "@/public/Architecture/Grada_Office/Grada Office-020.jpg"

export default function gradaOffice() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Grada Office"
        description={Message.Architecture_Grada_Office}
        goBackLink="/architecture"
      />
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <div>
          <Image
          src = {image1}
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 001"
            placeholder="blur"
          />
        </div>

        <div>
          <Image
          src = {image2}
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 002"
            placeholder="blur"
          />
        </div>

        <div>
          <Image
          src = {image3}
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 003"
            placeholder="blur"
          />
        </div>

        <div>
          <Image
          src = {image4}
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 004"
            placeholder="blur"
          />
        </div>

        <div>
          <Image
          src = {image5}
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 005"
            placeholder="blur"
          />
        </div>

        <div>
          <Image
          src = {image6}
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 006"
            placeholder="blur"
          />
        </div>

        <div>
          <Image
          src = {image7}
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 007"
            placeholder="blur"
          />
        </div>

        <div>
          <Image
          src = {image8}
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 008"
            placeholder="blur"
          />
        </div>

        <div>
          <Image
          src = {image9}
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 009"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}