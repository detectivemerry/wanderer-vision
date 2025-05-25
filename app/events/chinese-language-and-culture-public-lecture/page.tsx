
import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";
import image1 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-001.jpg"
import image2 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-006.jpg"
import image3 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-015.jpg"
import image4 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-016.jpg"
import image5 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-035.jpg"
import image6 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-036.jpg"
import image7 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-045.jpg"
import image8 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-050.jpg"
import image9 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-060.jpg"
import image10 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-066.jpg"
import image11 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-067.jpg"
import image12 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-074.jpg"
import image13 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-080.jpg"
import image14 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-086.jpg"
import image15 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-127.jpg"
import image16 from "@/public/Events/Chinese_Language_and_Culture_Public_Lecture/Culture-Public-Lecture-132.jpg"

export default function chinese() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Chinese Language and Culture Public Lecture"
        description={Message.Events_Chinese}
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
            src = {image9}
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
            src = {image12}
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
      </div>
    </div>
  );
}
