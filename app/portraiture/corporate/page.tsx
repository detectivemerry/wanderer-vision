
import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

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
            src = "/portraiture/corporate"
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