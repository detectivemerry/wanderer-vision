import PageHeader from "@/components/PageHeader";
import Message from "@/app/_lib/texts";

export default function web3() {
  return (
    <div className="flex flex-col">
      {/* <div className="text-3xl mt-4 mb-20">Hashed and Friends Web3 Game Night</div> */}
      <PageHeader
        title="Hashed and Friends Web3 Game Night"
        description={Message.EventHashedDesc}
        goBackLink="/events"
      />
      <div className="flex py-3 justify-center gap-8 mx-16">
        <div className="flex lg:flex-col gap-8">
          <div>
            <img src="/events/left_001.jpg" />
          </div>
          <div>
            <img src="/events/left_002.jpg" />
          </div>
          <div>
            <img src="/events/left_003.jpg" />
          </div>
          <div>
            <img src="/events/left_004.jpg" />
          </div>
          <div>
            <img src="/events/left_005.jpg" />
          </div>
          <div>
            <img src="/events/left_006.jpg" />
          </div>
        </div>

        <div className="flex lg:flex-col gap-8">
          <div>
            <img src="/events/center_001.jpg" />
          </div>
          <div>
            <img src="/events/center_002.jpg" />
          </div>
          <div>
            <img src="/events/center_003.jpg" />
          </div>
          <div>
            <img src="/events/center_004.jpg" />
          </div>
          <div>
            <img src="/events/center_005.jpg" />
          </div>
        </div>

        <div className="flex lg:flex-col gap-8">
          <div>
            <img src="/events/right_001.jpg" />
          </div>
          <div>
            <img src="/events/right_002.jpg" />
          </div>
          <div>
            <img src="/events/right_003.jpg" />
          </div>
          <div>
            <img src="/events/right_004.jpg" />
          </div>
          <div>
            <img src="/events/right_005.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
