import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "../css/RestaurantMenu.css";
import { useParams } from "react-router-dom";
import { restroitemsURL } from "../utilitis/constants";
import Category from "./Category";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState(null);
  // const [restroNames, setRestroNames] = useState([]);
  const [showItems, setShowItems] = useState(false);
  

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(restroitemsURL + resId);

    const json = await data.json();
    setResInfo(json.data);
  };

  function showDetails(){
    setShowItems(!showItems);
  }

  // if (resInfo === null) return <Shimmer />;
  var sections = [];
  sections = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  var Categories = sections?.map((item) => item?.card?.card);
  // setRestroNames(itemsList);

  return (
    <div>
      <div className="section-heading" ></div>
      {Categories?.map((category, index) => (
        <div>
          <div className="categorytitle" onClick={showDetails}>
          <span className="title" key={index}>{category.title}</span>
         { category.itemCards ? <span >🔻</span> : " "}
          </div>      
          {showItems==true ? <Category itemCards={category.itemCards}/> : " "}
          
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenu;
