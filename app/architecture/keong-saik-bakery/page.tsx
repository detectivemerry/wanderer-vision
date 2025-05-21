import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

export default function keongSaikBakery() {
  return (
    <div className="flex flex-col">
      {/* <div className="text-3xl mt-4 mb-20">Hashed and Friends Web3 Game Night</div> */}
      <PageHeader
        title="Keong Saik Bakery"
        description={Message.Architecture_Keong_Saik_Bakery}
        goBackLink="/architecture"
      />
      <div className="flex flex-wrap gap-10 justify-center items-center">

        <div>
          <Image
            src = "/Architecture/Keong_Saik_Bakery/Keong-Saik-Bakery-001.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Keong Saik Bakery 001"
          />
        </div>

        <div>
          <Image
            src = "/Architecture/Keong_Saik_Bakery/Keong-Saik-Bakery-002.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Keong Saik Bakery 001"
          />
        </div>

        <div>
          <Image
            src = "/Architecture/Keong_Saik_Bakery/Keong-Saik-Bakery-003.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Keong Saik Bakery 001"
          />
        </div>
      </div>
    </div>
  );
}