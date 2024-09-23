import { Link } from "react-router-dom";
import PropertyCardImage from "./PropertyCardImage";
import PropertyCardInfo from "./PropertyCardInfo";

function PropertyCard( item ) {
  return (
    <Link
      to="./propertydetail"
      className="h-96 w-full bg-base-100 shadow-md rounded-md overflow-hidden"
    >
      <div className="w-full h-[60%]">
        <PropertyCardImage />
      </div>
      <div className="w-full h-[40%]">
        <PropertyCardInfo item={item} />
      </div>
    </Link>
  );
}

export default PropertyCard;
