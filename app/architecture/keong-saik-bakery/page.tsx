import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";

export default function keongSaikBakery() {
  return (
    <div className="flex flex-col">
      {/* <div className="text-3xl mt-4 mb-20">Hashed and Friends Web3 Game Night</div> */}
      <PageHeader
        title="Keong Saik Bakery"
        description={Message.Architecture_Keong_Saik_Bakery}
        goBackLink="/architecture"
      />
      <div className="flex py-3 justify-center gap-8 mx-16">
      </div>
    </div>
  );
}