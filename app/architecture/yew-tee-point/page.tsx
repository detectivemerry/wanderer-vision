import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

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
            src = "/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-001.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 001"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-005.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 005"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-011.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 011"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-012.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 012"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-2-V2-013.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 013"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-002.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 002"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-006.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 006"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-014.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 014"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-017.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 017"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-018.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 018"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Yew_Tee_Point/Yew-Tee-Point-Day-3-V3-020.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Yew Tee 020"
          />
        </div>
      </div>
    </div>
  );
}