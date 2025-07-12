import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

import image1 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-001.jpg"
import image2 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-002.jpg"
import image3 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-003.jpg"
import image4 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-004.jpg"
import image5 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-005.jpg"
import image6 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-006.jpg"
import image7 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-007.jpg"
import image9 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-008.jpg"
import image10 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-009.jpg"
import image11 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-010.jpg"
import image12 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-011.jpg"
import image13 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-012.jpg"
import image14 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-013.jpg"
import image15 from "@/public/Corporate_Portraiture_Photo/Graduation/graduation-014.jpg"

export default function graudation() {
  return (
    <div className="flex flex-col">
      {/* <div className="text-3xl mt-4 mb-20">Hashed and Friends Web3 Game Night</div> */}
      <PageHeader
        title="Graduation"
        description={Message.CorporatePortait_Grad}
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
          src = {image15}
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