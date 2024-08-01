import '../css/card.css';


function Card({data}) {
  const {title, ingredients, calories,id} = data;
  return (
    <div className="container">
      <div className="card" key={id}>
        <div><strong>{title}</strong></div>
        <ol>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ol>
        <div><strong>Calories: </strong>{calories}</div>
      </div>
    </div>
  );
}

export default Card;