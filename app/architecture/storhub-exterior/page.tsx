import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

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
            src = "/Architecture/Storhub_Exterior_New/Storhub-Exterior-001.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Storhub Exterior New 001"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Storhub_Exterior_New/Storhub-Exterior-003.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Storhub Exterior New 002"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Storhub_Exterior_New/Storhub-Exterior-006.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Storhub Exterior New 003"
          />
        </div>
      </div>
    </div>
  );
}