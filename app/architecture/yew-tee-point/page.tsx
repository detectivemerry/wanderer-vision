import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";
import image1 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-001.jpg"
import image2 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-005.jpg"
import image3 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-011.jpg"
import image4 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-012.jpg"
import image5 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-013.jpg"
import image6 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-002.jpg"
import image7 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-006.jpg"
import image8 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-014.jpg"
import image9 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-017.jpg"
import image10 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-018.jpg"
import image11 from "@/public/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-020.jpg"

export default function yewTeePoint() {
  return (
    <div className="flex flex-col">
      {/* <div className="text-3xl mt-4 mb-20">Hashed and Friends Web3 Game Night</div> */}
      <PageHeader
        title="Yew Tee Point"
        description={Message.Architecture_Yew_Tee_Point}
        goBackLink="/architecture"
      />

      <div className="flex flex-wrap gap-10 justify-center items-center">
        <div>
          <Image
          src = {image1}
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image2}
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 005"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image3}
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 011"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image4}
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 012"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image5}
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 013"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image6}
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 002"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image7}
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 006"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image8}
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 014"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image9}
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 017"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image10}
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 018"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image11}
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 020"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}