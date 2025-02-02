import { useEffect, useState } from "react";
import useDatasetStore from "../../stores/datasetStore";
import LoadingSpinner from "../LoadingSpinner";
import ListingCard from "../Listing/ListingCard";
import img1 from "../../assets/propertyImg/image1.jpg"
import img2 from "../../assets/propertyImg/image2.jpg"
import img3 from "../../assets/propertyImg/image3.jpg"
import img4 from "../../assets/propertyImg/image4.jpg"
import img5 from "../../assets/propertyImg/image5.jpg"
import img6 from "../../assets/propertyImg/image6.jpg"

const images = [img1, img2, img3, img4, img5, img6]

function FeaturedProperties() {

  const { dataset, isLoading } = useDatasetStore();

  const [cardsContent, setCardsContent] = useState();

  useEffect(() => {
    if (dataset) {
      const result = dataset.slice(0, 4)
      setCardsContent(result);
    }
  }, [dataset])

  if (isLoading) {
    return (
      <div className="w-full h-fit py-10 px-28">
        <LoadingSpinner />
      </div>
    );
  }
  else {
    return (
      <div className="w-full h-fit py-10 px-28 grid grid-cols-4 gap-3">
        {cardsContent?.map((property, index) => {
          const randomImage = images[Math.floor(Math.random() * images.length)];
          return (
            <ListingCard name={property.name} neighbourhood={[property.neighbourhood]} price={property.price} host_name={property.host_name} image={randomImage} />
          )
        })}
      </div>
    );
  }
}

export default FeaturedProperties;
