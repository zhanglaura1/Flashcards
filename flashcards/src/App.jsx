import './App.css';
import { useState } from 'react';

const App = () => {
  const card_set = [['Agnolotti','Pasta'], ['Ambrosini','Composer'], ['Bellini','Composer'], ['Catalani','Composer'], ['Chifferi','Pasta'], ['Dallapiccola','Pasta'], ['Fagottini','Pasta'], ['Franchetti','Composer'], ['Gemelli','Pasta'], ['Lagane','Pasta'], 
    ['Mazzochi','Composer'], ['Mostaccioli','Pasta'], ['Pennoni','Pasta'], ['Rampollini','Composer'], ['Rota','Composer'], ['Sacchettoni','Pasta'], ['Sagnarelli','Pasta'], ['Spontini','Composer'], ['Strozzi','Composer'], ['Tartini','Composer'], ['Veracini','Composer']];
  const [side, flipSide] = useState(0);
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [correct_guess, setCorrectGuess] = useState("")

  const updateSide = () => {
    if (side == 0) {
      flipSide(1);
    } else {
      flipSide(0);
    }
  }

  const newCard = () => {
    setIndex(Math.floor(Math.random() * (19 - 0 + 1)));
    flipSide(0);
    setGuess("");
  }

  const onCheckAnswer = () => {
    if (card_set[index][1] != guess) {
      setCorrectGuess('wrong');
    } else {
      setCorrectGuess('correct');
    }
  }

  return (
    <div className="App">
      <div className="header">
        <img src='https://t3.ftcdn.net/jpg/02/39/18/98/360_F_239189802_HRC5bhaYW1rUqZIWpnK5Dba66Rp5zF97.jpg'/>
        <h1>Pasta or Composer?</h1>
        <h3>How well do you know your pastas and composers?</h3>
        <h3>Number of cards: 20</h3>
      </div>
      <div className="container">
        <div className={`card ${side === 1 ? 'flipped' : ''}`} onClick={updateSide}>
          <div className="card-inner">
            <div className="card-front">
              <h2>{card_set[index][0]}</h2>
            </div>
            <div className="card-back">
              <h2>{card_set[index][1]}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h3>Guess the answer here: </h3>
        <form onSubmit={onCheckAnswer}>
          <input
            type="text"
            placeholder=""
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className={correct_guess}
          />
        </form>
        <button onClick={onCheckAnswer}>Submit Guess</button>
        <button onClick={newCard}>&rarr;</button>
      </div>
    </div>
  )
}

export default App