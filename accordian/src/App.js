import './App.css';
import { useState } from 'react';

function App() {
   const [visibleIndex, setVisibleIndex] = useState(0);

   function handleClick(index){
    setVisibleIndex(index);
   }
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-1/2 text-red-800">
        <Accordian heading="Heading 1" 
         content="Bali is known for its elaborate, traditional dancing. The dancing is
          inspired by its Hindi beliefs. Most of the dancing portrays tales of
          good versus evil. To watch the dancing is a breathtaking experience.
          Lombok has some impressive points of interest – the majestic Gunung
          Rinjani is an active volcano." onClick={()=>handleClick(0)} visible={visibleIndex === 0}
          />
        <Accordian heading="Heading 2" 
         content="Bali and Lombok are neighbouring islands; both are part of the
          Indonesian archipelago. It is easy to appreciate each island as an
          attractive tourist destination – majestic scenery; rich culture; white
          sands and warm, azure waters draw visitors like magnets every year." 
          onClick={()=>handleClick(1)} visible={visibleIndex === 1}
          />
      </div>
    </div>
  );
}

 
function Accordian({heading, content, onClick, visible}){
 
  return (
    <div className="w-25">
        <div className="flex items-center">
          <h3 className="m-5">{heading} </h3>
          <button className='ml-10' onClick={onClick}>▼</button>
        </div>
       {visible &&  <p className="mr-5 ml-5">
         {content}
        </p>}
      </div>
  )
}





export default App;
