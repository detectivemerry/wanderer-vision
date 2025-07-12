
import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

import image1 from "@/public/Corporate_Portraiture_Photo/Corporate_Portraits/Koh-Chin-Chin-003.jpg"
import image2 from "@/public/Corporate_Portraiture_Photo/Corporate_Portraits/Wong-Wei-Ling-001.jpg"
import image3 from "@/public/Corporate_Portraiture_Photo/Corporate_Portraits/Wong-Wei-Ling-002.jpg"
import image4 from "@/public/Corporate_Portraiture_Photo/Corporate_Portraits/Wong-Wei-Ling-003.jpg"
import image5 from "@/public/Corporate_Portraiture_Photo/Corporate_Portraits/Yeoh-Lian-Chuan-001.jpg"
import image6 from "@/public/Corporate_Portraiture_Photo/Corporate_Portraits/Yeoh-Lian-Chuan-002.jpg"
import image7 from "@/public/Corporate_Portraiture_Photo/Corporate_Portraits/Yeoh-Lian-Chuan-003.jpg"

export default function corporate() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Corporate"
        description={Message.CorporatePortait_Corporate}
        goBackLink="/portraiture"
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
      </div>
    </div>
  );
}