import { useSelector } from "react-redux";

function SidePanel() {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
    if(!isMenuOpen) return null; 
  return (
    <div className="flex flex-col ml-8 text-xs w-10 text-center mr-12">
      <div className="mb-7">
        <img
          className="h-8 w-13"
          alt="Home icon"
          src="https://static.vecteezy.com/system/resources/previews/022/013/913/non_2x/home-icon-illustration-image-vector.jpg"
        />
        <div>Home</div>
      </div>
      <div className="mb-7">
        <img
          className="h-7 w-6"
          alt="Subscription icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzRU94lnEIdUS07kGLpc9etwNVNHVgt2s_RYHphdTOYoqTBQmVAX0kK_FVqLvenjV8Bo&usqp=CAU"
        />
        <div>Subscriptions</div>
      </div>
      <div className="mb-7">
        <img
          className="h-7 w-6"
          alt="Music icon"
          src="https://img.icons8.com/?size=512&id=BhQ1jBS6I2Bu&format=png"
        />
        <div>Music</div>
      </div>
      <div className="mb-7">
        <img
          className="h-7 w-6"
          src="https://cdn0.iconfinder.com/data/icons/technology-business-and-people/1000/file_light-15-512.png"
        />
        <div>Library</div>
      </div>
    </div>
  );
}

export default SidePanel;
