import { lazy, Suspense } from "react";
import ListingContainer from "../components/Listing/ListingContainer";
import ListingFilter from "../components/listing/ListingFilter";
import LoadingSpinner from "../components/LoadingSpinner";


function SplitView() {

const Map = lazy(() => import("../components/map/Map"))

  return (
    <div className="w-full h-full">
      <ListingFilter />
      <div className="w-full h-[90%] flex">
        <div className="h-full w-[52%] bg-base-200">
          <Suspense fallback={<LoadingSpinner /> }>
            <Map latitude={"-33.8688"} longitude={"151.2093"} />
          </Suspense>
        </div>
        <div className="h-full w-[48%]">
          <ListingContainer />
        </div>
      </div>
    </div>
  );
}

export default SplitView;
