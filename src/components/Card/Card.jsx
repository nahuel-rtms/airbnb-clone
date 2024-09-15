import { Link } from "react-router-dom";
import CardImage from "./CardImage";
import CardInfo from "./CardInfo";

function Card( item ) {
  return (
    <Link
      to="./detail"
      className="h-96 w-full bg-base-100 shadow-md rounded-md overflow-hidden"
    >
      <div className="w-full h-[60%]">
        <CardImage />
      </div>
      <div className="w-full h-[40%]">
        <CardInfo item={item} />
      </div>
    </Link>
  );
}

export default Card;
