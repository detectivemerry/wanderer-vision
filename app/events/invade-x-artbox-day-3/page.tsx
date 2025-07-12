
import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";
import image1 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-003.jpg"
import image2 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-005.jpg"
import image3 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-012.jpg"
import image4 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-020.jpg"
import image5 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-024.jpg"
import image6 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-036.jpg"
import image7 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-040.jpg"
import image8 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-041.jpg"
import image9 from"@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-043.jpg"
import image10 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-048.jpg"
import image11 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-059.jpg"
import image12 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-063.jpg"
import image13 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-064.jpg"
import image14 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-072.jpg"
import image15 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-086.jpg"
import image16 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-091.jpg"
import image17 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-158.jpg"
import image18 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-163.jpg"
import image19 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-165.jpg"
import image20 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-169.jpg"
import image21 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-174.jpg"
import image22 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-182.jpg"
import image23 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-185.jpg"
import image24 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-186.jpg"
import image25 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-188.jpg"
import image26 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-190.jpg"
import image27 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-193.jpg"
import image28 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-198.jpg"
import image29 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-207.jpg"
import image30 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-221.jpg"
import image31 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-224.jpg"
import image32 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-231.jpg"
import image33 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-236.jpg"
import image34 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-237.jpg"
import image35 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-239.jpg"
import image36 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-245.jpg"
import image37 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-258.jpg"
import image38 from "@/public/Events/Invade_x_Artbox_Day_3/Artbox-Day-3-275.jpg"


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
