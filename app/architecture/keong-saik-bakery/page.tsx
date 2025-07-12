import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";
import Image from "next/image";
import image1 from "@/public/Architecture/Keong_Saik_Bakery/Keong-Saik-Bakery-001.jpg";
import image2 from "@/public/Architecture/Keong_Saik_Bakery/Keong-Saik-Bakery-002.jpg";
import image3 from "@/public/Architecture/Keong_Saik_Bakery/Keong-Saik-Bakery-003.jpg";

export default function keongSaikBakery() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Keong Saik Bakery"
        description={Message.Architecture_Keong_Saik_Bakery}
        goBackLink="/architecture"
      />
      <div className="flex flex-wrap gap-10 justify-center items-center">
        <div>
          <Image
            src={image1}
            width={500}
            height={500}
            alt="Picture of Keong Saik Bakery 001"
            placeholder="blur"
          />
        </div>

        <div>
          <Image
            src={image2}
            width={500}
            height={500}
            alt="Picture of Keong Saik Bakery 001"
            placeholder="blur"
          />
        </div>

        <div>
          <Image
            src={image3}
            width={500}
            height={500}
            alt="Picture of Keong Saik Bakery 001"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
