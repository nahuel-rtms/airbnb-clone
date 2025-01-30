import { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard/PropertyCard";
import useListingStore from "../../stores/listingStore";
import useDatasetStore from "../../stores/datasetStore";
import LoadingSpinner from "../LoadingSpinner";
import img1 from "../../assets/propertyImages/image1.jpg"
import img2 from "../../assets/propertyImages/image2.jpg"
import img3 from "../../assets/propertyImages/image3.jpg"
import img4 from "../../assets/propertyImages/image4.jpg"
import img5 from "../../assets/propertyImages/image5.jpg"
import img6 from "../../assets/propertyImages/image6.jpg"

const images = [img1, img2, img3, img4, img5, img6]

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
          {displayItems?.length > 0 ? displayItems.map((item, index) => {
            const randomImage = images[Math.floor(Math.random() * images.length)];
            return (
              <PropertyCard key={index} name={item.name} neighbourhood={item.neighbourhood} price={item.price} host_name={item.host_name} image={randomImage} />
            )
          }) : null }
        </div>

      }

    </div>
  );
}

export default PropertyList;
