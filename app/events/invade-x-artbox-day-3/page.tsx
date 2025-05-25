
import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

export default function delta() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="5E Project Development of Add-on Children’s Picture"
        description={Message.Events_5E}
        goBackLink="/events"
      />
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <div>
          <Image
            src = "/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-001.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
          />
        </div>
      </div>
    </div>
  );
}
