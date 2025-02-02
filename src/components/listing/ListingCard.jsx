import { Link } from "react-router-dom";
import PropertyCardImage from "./ListingCardImage";
import PropertyCardInfo from "./ListingCardInfo";

function ListingCard({ name, neighbourhood, price, host_name, image }) {
  return (
    <Link
      to="./propertydetail"
      className="h-96 w-full bg-base-100 shadow-md rounded-md overflow-hidden"
    >
      <div className="w-full h-[60%]">
        <PropertyCardImage image={image}/>
      </div>
      <div className="w-full h-[40%]">
        <PropertyCardInfo name={name} neighbourhood={neighbourhood} price={price} host_name={host_name} />
      </div>
    </Link>
  );
}

export default ListingCard;
