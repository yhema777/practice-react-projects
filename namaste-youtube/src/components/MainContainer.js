import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";


function MainContainer(){
    return(
        <div className="flex flex-col">
            <ButtonsList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer;