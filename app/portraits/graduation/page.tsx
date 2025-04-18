import React from "react";
import PageHeader from "@/components/PageHeader";

export default function graudation() {
  return (
    <div>
      <PageHeader
        title="Graduation photoshoots"
        description="This section features graduation portrait photography, capturing a milestone moment with a focus on individuality, accomplishment, and timeless presentation. Sessions include both formal and candid portraits to commemorate this significant achievement."
        goBackLink="/portraits"
      />
      <div className="flex py-3 justify-center gap-8 mx-16">
        <div className="flex flex-col gap-8">
          <div>
            <img src="/graduation/left_001.jpg" />
          </div>
          <div>
            <img src="/graduation/left_002.jpg" />
          </div>
          <div>
            <img src="/graduation/left_003.jpg" />
          </div>
          <div>
            <img src="/graduation/left_005.jpg" />
          </div>
          <div>
            <img src="/graduation/left_004.jpg" />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <img src="/graduation/center_001.jpg" />
          </div>
          <div>
            <img src="/graduation/center_002.jpg" />
          </div>
          <div>
            <img src="/graduation/center_003.jpg" />
          </div>
          <div>
            <img src="/graduation/center_004.jpg" />
          </div>
          <div>
            <img src="/graduation/center_005.jpg" />
          </div>
          <div>
            <img src="/graduation/center_006.jpg" />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <img src="/graduation/right_001.jpg" />
          </div>
          <div>
            <img src="/graduation/right_002.jpg" />
          </div>
          <div>
            <img src="/graduation/right_003.jpg" />
          </div>
          <div>
            <img src="/graduation/right_005.jpg" />
          </div>
          <div>
            <img src="/graduation/right_004.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
