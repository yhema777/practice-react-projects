import { useState } from "react";
import "../css/Restaurant.css";
import Card from './Card';
import mockdata from "../utilitis/mockdata";
import { Link } from "react-router-dom";


function Restaurant() {
  

  const [searchvalue, setSearchValue] =useState("");
  const [items, setItems] = useState(mockdata);
  const [filteritems, setFilterItems]=useState(mockdata);
  
function searchItems(){
 const filtereditems = filteritems.filter((item)=>(
     item.info.name.toLowerCase().includes(searchvalue.toLowerCase())
  ))
  searchvalue===""? setFilterItems(items) : setFilterItems(filtereditems)
}

  return (
    <div>
      <div>
      <input type="text" onChange={(e)=>setSearchValue(e.target.value)} />
      <button onClick={()=>searchItems()}>Search</button>

    </div>
      <div className="cards">
        
    {filteritems.map((data)=>(
      <Link to={"/restaurant/" + data.info.id}>
      <Card name={data.info.name}
      rating={data.info.avgRating}
      deliveryTime={data.info.sla.slaString}
      area={data.info.locality}
      image={data.info.cloudinaryImageId}/>
      </Link>

    ))
    }
  
    </div>

    </div>
   
   
  );
}

export default Restaurant;
