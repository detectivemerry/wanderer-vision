import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

export default function delta() {
  return (
    <div className="flex flex-col">
      {/* <div className="text-3xl mt-4 mb-20">Hashed and Friends Web3 Game Night</div> */}
      <PageHeader
        title="Delta"
        description={Message.Architecture_Delta}
        goBackLink="/architecture"
      />
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <div>
          <Image
            src = "/Architecture/Delta/Delta-001.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Delta/Delta-002.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Delta 002"
          />
        </div>
        <div>
          <Image
            src = "/Architecture/Delta/Delta-004.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Delta 003"
          />
        </div>
      </div>
    </div>
  );
}
