import { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import useListingStore from "../../stores/listingStore";
import useDatasetStore from "../../stores/datasetStore";
import LoadingSpinner from "../LoadingSpinner";

function PropertyList() {

  const { list } = useListingStore()
  const { isLoading, error } = useDatasetStore()
  const [listLenght, setListLenght] = useState(10);
  const [displayItems, setDisplayItems] = useState(null)
  const [end, setEnd] = useState(10)

  useEffect(() => {
    if (list) {
      const result = list.slice(0, end);
      setDisplayItems(result);
      setListLenght(list.length)
    }
  }, [end, list])

  // useEffect(() => {
  //     const result = end + 10
  //     setEnd(result)
  // }, [])

  return (
    <div className="h-full w-full bg-base-300">
      <div className="h-[15%] w-full p-5 space-y-1">
        <p className="font-bold text-xl">Buenos Aires - Alquiler</p>
        <p className="font-bold">{listLenght} Results</p>
      </div>
      {isLoading ?
        <div className="w-full h-[85%]">
          <LoadingSpinner />
        </div> :
        <div className="w-full h-[85%] grid grid-cols-2 gap-2 p-5 overflow-scroll no-scrollbar">
          {displayItems?.length > 0 ? displayItems.map((item, index) => (
            <PropertyCard key={index} item={item} />
          )) : null}
        </div>

      }

    </div>
  );
}

export default PropertyList;
