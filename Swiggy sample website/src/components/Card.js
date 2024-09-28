import "../css/Card.css";
import { restroimageURL } from "../utilitis/constants";

function Card(props) {
  const { name, rating, deliveryTime, area, image } = props;
  return (
    <div className="container">
      <div className="card">
        <img
          className="restro-img"
          src={
            restroimageURL +
            image
          }
        />
        <div className="restro-info">
          <p className="restro-name">{name}</p>
          <p>{rating}</p>
          <p>{deliveryTime}</p>
          <p>{area}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
