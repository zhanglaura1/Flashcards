import './App.css';
import { useState } from 'react';

const App = () => {
  const card_set = [['Agnolotti','Pasta'], ['Ambrosini','Composer'], ['Bellini','Composer'], ['Catalani','Composer'], ['Chifferi','Pasta'], ['Dallapiccola','Pasta'], ['Fagottini','Pasta'], ['Franchetti','Composer'], ['Gemelli','Pasta'], ['Lagane','Pasta'], 
    ['Mazzochi','Composer'], ['Mostaccioli','Pasta'], ['Pennoni','Pasta'], ['Rampollini','Composer'], ['Rota','Composer'], ['Sacchettoni','Pasta'], ['Sagnarelli','Pasta'], ['Spontini','Composer'], ['Strozzi','Composer'], ['Tartini','Composer'], ['Veracini','Composer']];
  const [side, flipSide] = useState(0);
  const [index, setIndex] = useState(0);
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
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Pasta or Composer?</h1>
        <h3>How well do you know your pastas and composers?</h3>
        <h3>Number of cards: 20</h3>
      </div>
      <div className='container'>
        <div className='card' onClick={updateSide}>
          <h2>{card_set[index][side]}</h2>
        </div>
        <button onClick={newCard}>&rarr;</button>
      </div>
    </div>
  )
}

export default App