import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Header() {
    const dispatch = useDispatch();
    function toggleMenuHandler(){
        dispatch(toggleMenu());

    }
    
  return (
    <div className="grid grid-flow-col p-4 m-1 shadow-lg">   
      <div className="flex col-span-1">
      <img
      onClick={()=>toggleMenuHandler()}
          className="mr-8 w-7 h-8 cursor-pointer"
          alt="Hamburger"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/207px-Hamburger_icon.svg.png"
        />
        <img
          className="w-20 h-15"
          alt="Youtube icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQTXmpmU6QHLKCluDXWal6WsGgBTFTNIrgw&s"
        />
      </div>
   
      <div className="flex col-span-10 justify-center">
        <input
          className=" border border-gray-950 w-1/2 h-9 p-3 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <img
        alt="Search icon"
          className="border border-gray-500 w-9 h-9 rounded-r-full"
          src="https://previews.123rf.com/images/burntime555/burntime5551503/burntime555150300093/37679515-search-flat-web-icon-sign-or-button-isolated-on-grey-background-collection-modern-trend-concept.jpg"
        />
      </div>
      <div col-span-1>
      <img
      alt="User icon"
        className="w-8 h-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLGqscuA4NKYUWNwJn4yOXFvAKVsl7Au9Og&s"
      />
      </div>
    </div>
  );
}

export default Header;
