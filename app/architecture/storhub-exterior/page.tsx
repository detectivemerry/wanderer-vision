import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";

export default function storhubExterior() {
  return (
    <div className="flex flex-col">
      {/* <div className="text-3xl mt-4 mb-20">Hashed and Friends Web3 Game Night</div> */}
      <PageHeader
        title="Storhub Exterior"
        description={Message.Architecture_Storhub_Exterior_New}
        goBackLink="/architecture"
      />
      <div className="flex py-3 justify-center gap-8 mx-16">
      </div>
    </div>
  );
}