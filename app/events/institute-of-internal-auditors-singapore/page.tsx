
import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";
import image1 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-001.jpg"
import image2 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-014.jpg"
import image3 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-030.jpg"
import image4 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-038.jpg"
import image5 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-045.jpg"
import image6 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-058.jpg"
import image7 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-068.jpg"
import image8 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-077.jpg"
import image9 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-081.jpg"
import image10 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-083.jpg"
import image11 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-087.jpg"
import image12 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-097.jpg"
import image13 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-108.jpg"
import image14 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-113.jpg"
import image15 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-115.jpg"
import image16 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-124.jpg"
import image17 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-139.jpg"
import image18 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-141.jpg"
import image19 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-143.jpg"
import image20 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-158.jpg"
import image21 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-232.jpg"
import image22 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-237.jpg"
import image23 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-243.jpg"
import image24 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-266.jpg"
import image25 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-268.jpg"
import image26 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-280.jpg"
import image27 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-307.jpg"
import image28 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-327.jpg"
import image29 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-401.jpg"
import image30 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-402.jpg"
import image31 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-409.jpg"
import image32 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-420.jpg"
import image33 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-424.jpg"
import image34 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-426.jpg"
import image35 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-428.jpg"
import image36 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-435.jpg"
import image37 from "@/public/Events/Institute_of_Internal_Auditors_Singapore/Institute-of-Internal-Auditors-Conference-458.jpg"


export default function auditors() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Institute of Internal Auditors Conference"
        description={Message.Events_Audit}
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
            src = {image13}
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
            src = {image23}
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
            src = {image30}
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
      </div>
    </div>
  );
}