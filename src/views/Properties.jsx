import { lazy, Suspense } from "react";
import PropertyList from "../components/PropertyList/PropertyList";
import LoadingSpinner from "../components/LoadingSpinner";
import PropertiesFilter from "../components/PropertiesFilter";


function Properties() {

const Map = lazy(() => import("../components/Map/Map"))

  return (
    <div className="w-full h-full">
      <PropertiesFilter />
      <div className="w-full h-[90%] flex">
        <div className="h-full w-[52%] bg-base-200">
          <Suspense fallback={<LoadingSpinner /> }>
            <Map latitude={"-33.8688"} longitude={"151.2093"} />
          </Suspense>
        </div>
        <div className="h-full w-[48%]">
          <PropertyList />
        </div>
      </div>
    </div>
  );
}

export default Properties;
