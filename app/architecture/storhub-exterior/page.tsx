import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";
import image1 from "@/public/Architecture/Storhub_Exterior_New/Storhub-Exterior-001.jpg"
import image2 from "@/public/Architecture/Storhub_Exterior_New/Storhub-Exterior-003.jpg"
import image3 from "@/public/Architecture/Storhub_Exterior_New/Storhub-Exterior-006.jpg"

export default function storhubExterior() {
  return (
    <div className="flex flex-col">
      {/* <div className="text-3xl mt-4 mb-20">Hashed and Friends Web3 Game Night</div> */}
      <PageHeader
        title="Storhub Exterior"
        description={Message.Architecture_Storhub_Exterior_New}
        goBackLink="/architecture"
      />
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <div>
          <Image
          src = {image1}
            width = {500}
            height = {500}
            alt = "Picture of Storhub Exterior New 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image2}
            width = {500}
            height = {500}
            alt = "Picture of Storhub Exterior New 002"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image3}
            width = {500}
            height = {500}
            alt = "Picture of Storhub Exterior New 003"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}