import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";

import image1 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-277.jpg"
import image2 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-015.jpg"
import image3 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-025.jpg"
import image4 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-028.jpg"
import image5 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-046.jpg"
import image6 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-047.jpg"
import image7 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-058.jpg"
import image8 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-064.jpg"
import image9 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-065.jpg"
import image10 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-073.jpg"
import image11 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-091.jpg"
import image12 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-097.jpg"
import image13 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-117.jpg"
import image14 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-126.jpg"
import image15 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-129.jpg"
import image16 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-133.jpg"
import image17 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-140.jpg"
import image18 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-143.jpg"
import image19 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-145.jpg"
import image20 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-148.jpg"
import image21 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-149.jpg"
import image22 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-153.jpg"
import image23 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-159.jpg"
import image24 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-165.jpg"
import image25 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-166.jpg"
import image26 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-169.jpg"
import image27 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-172.jpg"
import image28 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-199.jpg"
import image29 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-202.jpg"
import image30 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-217.jpg"
import image31 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-223.jpg"
import image32 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-239.jpg"
import image33 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-244.jpg"
import image34 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-249.jpg"
import image35 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-252.jpg"
import image36 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-256.jpg"
import image37 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-261.jpg"
import image38 from "@/public/Events/5E Project Development_of_Add-on_Children’s_Picture/SCCL-5E-Book-Launch-268.jpg"

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
          src = {image1}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 001"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image2}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 002"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
            src = {image3}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 003"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image4}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 004"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image5}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 005"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image6}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 006"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image7}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 007"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image9}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 008"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image10}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 009"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image11}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 010"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image12}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 011"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image13}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 012"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image14}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 013"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image15}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 014"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image16}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 015"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image17}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 016"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image18}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 017"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image19}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 018"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image20}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 019"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image21}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 020"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image22}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 021"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image23}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 022"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image24}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 023"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image25}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 024"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image26}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 025"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image27}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 026"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image28}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 027"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image29}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 028"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image30}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 029"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image31}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 030"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image32}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 031"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image33}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 032"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image34}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 033"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image35}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 034"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image36}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 035"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image37}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 036"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image38}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 037"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image8}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 038"
            placeholder="blur"
          />
        </div>
        <div>
          <Image
          src = {image1}
            width = {500}
            height = {500}
            alt = "Picture of 5E Project development of add on childen's picture 039"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
