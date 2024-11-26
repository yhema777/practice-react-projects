import MainContainer from "./MainContainer";
import Header from "./Header";
import SidePanel from "./SidePanel";

function Body() {
  return (
    <div className="flex">
      <SidePanel />
      <MainContainer />
    </div>
  );
}

export default Body;
