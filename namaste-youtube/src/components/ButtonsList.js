import Button from "./Button";
function ButtonsList(){
    const buttons=["All", "Music", "Movies", "News", "Live", "Podcasts", "Thrillers", "WebSeries", "Cricket", "Gaming"];
    return(
        <div className="flex">
         {
             buttons.map(button=>
                <Button name={button} />
             ) 
         }
        </div>
    )
}

export default ButtonsList;