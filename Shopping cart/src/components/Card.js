function Card({ data }) {
  const { itemname, price } = data;
  return (
    <div id="container">
      <div>
        <p>{itemname}</p>
        <p>{price}</p>
        <button>Add to Shopping Cart</button>
      </div>
    </div>
  );
}

export default Card;
