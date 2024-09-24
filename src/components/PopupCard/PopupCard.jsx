import { Link } from "react-router-dom";
import PopupCardImage from "./PopupCardImage";
import PopupCardInfo from "./PopupCardInfo";

function PopupCard({ name, neighbourhood, price, host_name }) {

  const style = {
    height: '400px',
    width: '600px',
    backgroundColor: 'var(--base-100)',
    borderRadius: '0.375rem',
    overflow: 'hidden',
    display: 'block',
    textDecoration: 'none',
  }

  return (
    <Link to="./propertydetail" style={style}>
      <div className="property-card__image-container">
        <PopupCardImage />
      </div>
      <div className="property-card__info">
        <PopupCardInfo name={name} neighbourhood={neighbourhood} price={price} host_name={host_name} />
      </div>
    </Link>
  );
}

export default PopupCard;
