import { restroitemsimageURL } from "../utilitis/constants";
import "../css/RestroItems.css";

function RestroItems({card}) {
 const { name, price, ratings, description, imageId } = card.card.info;
  return (
    <div className="txt-img" > 
      <div className="txt">
        <p className="item-name">{name}</p>
        <p className="item-price">₹{price / 100}</p>
         {ratings.aggregatedRating.rating ?  <p className="item-rating">  ★ {ratings.aggregatedRating.rating}</p>
         : null }
       
        <p>{description}</p>
      </div>
      <div className="img">
        <img src={restroitemsimageURL + imageId} />
      </div>
    </div>
    
  );
}

export default RestroItems;
