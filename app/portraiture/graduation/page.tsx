import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

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
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-001.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 001"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-002.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 002"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-008.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 003"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-004.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 004"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-005.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 005"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-006.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 006"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-007.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 007"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-003.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 008"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-009.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 009"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-010.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 010"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-013.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 011"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-012.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 012"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-011.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 013"
          />
        </div>
        <div>
          <Image
            src = "/Corporate_Portraiture_Photo/Graduation/graduation-014.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Graduation 014"
          />
        </div>
      </div>
    </div>
  );
}