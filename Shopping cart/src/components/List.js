import "../css/List.css";
import mockdata from "../utilitis/mockdata";
import Card from "./Card";

function List() {
  return (
    <div>
      <div className="header">
        <h2>GeeksforGeeks Shopping Cart</h2>
        <input
          type="text"
          className="searchbox"
          placeholder="Search for GFG Products..."
        />
      </div>
      <div className="body">
        {mockdata.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default List;


// import "../css/List.css";
// import mockdata from '../utilitis/mockdata';
// import Card from './Card';

// function List() {
//   return (
//     <div>
//       <div className="header">
//         <h2>GeeksforGeeks Shopping Cart</h2>
//         <input
//           type="text"
//           className="searchbox"
//           placeholder="Search for GFG Products..."
//         />
//       </div>
//       <div className="body">
//         {mockdata.map((data) => (
//           <Card key={data.id} data={data} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default List;
