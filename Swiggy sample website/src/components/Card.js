import "../css/Card.css";

function Card(props) {
  const { name, rating, deliveryTime, area, image } = props;
  return (
    <div className="container">
      <div className="card">
        <img
          className="restro-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
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
