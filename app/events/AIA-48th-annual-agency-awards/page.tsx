import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";
import image1 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-007.jpg"
import image2 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-008.jpg"
import image3 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-013.jpg"
import image4 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-025.jpg"
import image5 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-029.jpg"
import image6 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-035.jpg"
import image7 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-037.jpg"
import image8 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-038.jpg"
import image9 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-043.jpg"
import image10 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-051.jpg"
import image11 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-052.jpg"
import image12 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-064.jpg"
import image14 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-070.jpg"
import image15 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-073.jpg"
import image16 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-078.jpg"
import image17 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-079.jpg"
import image18 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-091.jpg"
import image19 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-108.jpg"
import image20 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-118.jpg"
import image21 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-119.jpg"
import image22 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-166.jpg"
import image23 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-171.jpg"
import image24 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-176.jpg"
import image25 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-178.jpg"
import image26 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-188.jpg"
import image27 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-189.jpg"
import image28 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-190.jpg"
import image29 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-203.jpg"
import image30 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-209.jpg"
import image31 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-216.jpg"
import image32 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-220.jpg"
import image33 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-227.jpg"
import image34 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-235.jpg"
import image35 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-237.jpg"
import image36 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-240.jpg"
import image37 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-242.jpg"
import image38 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-258.jpg"
import image39 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-277.jpg"
import image40 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-289.jpg"
import image41 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-298.jpg"
import image42 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-301.jpg"
import image43 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-306.jpg"
import image44 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-314.jpg"
import image45 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-315.jpg"
import image46 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-321.jpg"
import image47 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-336.jpg"
import image48 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-341.jpg"
import image49 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-352.jpg"
import image50 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-355.jpg"
import image51 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-358.jpg"
import image52 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-360.jpg"
import image53 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-376.jpg"
import image54 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-396.jpg"
import image55 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-400.jpg"
import image56 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-401.jpg"
import image57 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-414.jpg"
import image58 from "@/public/Events/AIA_48th_Annual_Agency_Awards/AIA-48th-Annual-Agency-Awards-427.jpg"

export default function delta() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="AIA 48th Annual Legacy Awards"
        description={Message.Events_AIA}
        goBackLink="/events"
      />
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <div>
          <Image
            src = {image1}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image2}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image3}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image4}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image5}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image6}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image7}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image8}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image12}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image10}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image11}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image9}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image14}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image15}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image16}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image17}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image18}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image19}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image20}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image21}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image22}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image24}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image25}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image26}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image27}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image28}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image29}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image31}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image32}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image33}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image34}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image35}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image36}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image37}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image38}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image39}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image40}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image42}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image43}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image44}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image45}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image46}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image47}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image48}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image49}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image50}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image51}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image52}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image53}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image54}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image55}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image56}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image57}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image58}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image23}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image30}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image41}
            width = {500}
            height = {500}
            alt = "Picture of Delta 001"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
