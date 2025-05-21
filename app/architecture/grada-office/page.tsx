import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

export default function gradaOffice() {
  return (
    <div className="flex flex-col">
      {/* <div className="text-3xl mt-4 mb-20">Hashed and Friends Web3 Game Night</div> */}
      <PageHeader
        title="Grada Office"
        description={Message.Architecture_Grada_Office}
        goBackLink="/architecture"
      />
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <div>
          <Image
            src = "/Architecture/Grada_Office/Grada Office-001.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 001"
          />
        </div>

        <div>
          <Image
            src = "/Architecture/Grada_Office/Grada Office-003.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 002"
          />
        </div>

        <div>
          <Image
            src = "/Architecture/Grada_Office/Grada Office-006.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 003"
          />
        </div>

        <div>
          <Image
            src = "/Architecture/Grada_Office/Grada Office-010.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 004"
          />
        </div>

        <div>
          <Image
            src = "/Architecture/Grada_Office/Grada Office-011.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 005"
          />
        </div>

        <div>
          <Image
            src = "/Architecture/Grada_Office/Grada Office-013.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 006"
          />
        </div>

        <div>
          <Image
            src = "/Architecture/Grada_Office/Grada Office-015.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 007"
          />
        </div>

        <div>
          <Image
            src = "/Architecture/Grada_Office/Grada Office-018.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 008"
          />
        </div>

        <div>
          <Image
            src = "/Architecture/Grada_Office/Grada Office-020.jpg"
            width = {500}
            height = {500}
            alt = "Picture of Grada Office 009"
          />
        </div>
      </div>
    </div>
  );
}