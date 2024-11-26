import { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

function VideoContainer(){
   const getVideos = async() =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
   }
    useEffect(()=>{
        getVideos();

    }, []);
    return(
        <div>
           <VideoCard />
        </div>
    )
}
export default VideoContainer;