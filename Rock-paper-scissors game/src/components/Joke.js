import { useState } from 'react';
import '../css/Joke.css'
function Joke() {

    const [Joke, setJoke] = useState("");

    function fetchAPI() {
        fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    }

    return (
        <div className='main'>
            <h2>Joke Generator using React and Joke API</h2>
            <button onClick={fetchAPI}>Click to generate a joke</button>
            <div className='joke'>{Joke}</div>
        </div>
    );
}

export default Joke;
