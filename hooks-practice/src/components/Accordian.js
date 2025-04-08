import React from "react";
import { useState } from "react";
function Accordian() {
  const [content, setContent] = useState({ 1: false, 2: false, 3: false });
  const data = [
    {
      heading: "Header1",
      data: "Any of several monetary units of the Turkish Empire b a coin representing one para Serbian & Croatian, from Turkish see dinar at Money Table",
      key: 1,
    },
    {
      heading: "Header2",
      data: "Organize your digital life in seconds with the PARA Method. The simple, intuitive system to find any information right when you need it.",
      key: 2,
    },
    {
      heading: "Header3",
      data: "Para (पर) refers to “supreme”, according to the 11th century Jñānārṇava, a treatise on Jain Yoga in roughly 2200 Sanskrit verses composed.",
      key: 3,
    },
  ];

  function toggleContent(key) {
    setContent((prev) => ({ ...prev, [key]: !prev[key] }));
  }
  console.log(content);
  return (
    <div>
      {data.map((item) => (
        <div key={item.key}>
          <div onClick={() => toggleContent(item.key)}>{item.heading}</div>
          {content[item.key] && <div>{item.data}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordian;
