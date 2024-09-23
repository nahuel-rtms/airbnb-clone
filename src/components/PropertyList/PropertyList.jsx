import { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import useMarkerStore from "../../stores/markerStore";

function PropertyList() {

const { markers } = useMarkerStore()
const [ displayItems, setDisplayItems ] = useState(null)
const [ end, setEnd ] = useState(10)

useEffect(() => {
  if (markers) {
    const result = markers.slice(0, end);
    setDisplayItems(result);
    // console.log(dis)
  }
}, [end, markers])

// useEffect(() => {
//     const result = end + 10
//     setEnd(result)
// }, [])

  return (
    <div className="h-full w-full bg-base-300">
      <div className="h-[15%] w-full p-5 space-y-1">
        <p className="font-bold text-xl">Buenos Aires - Alquiler</p>
        <p className="font-bold">1236 resultados</p>
      </div>
      <div className="w-full h-[85%] grid grid-cols-2 gap-2 p-5 overflow-scroll no-scrollbar">
        {displayItems?.length > 0 ? displayItems.map((item, index) => (
          <PropertyCard key={index} item={item} />
        )) : <p>Move the map</p>}
      </div>
    </div>
  );
}

export default PropertyList;
