import { useState } from 'react';
import './App.css';
import capa from './assets/capa.png'
import cover from './assets/cover.png'

const cardImages = [
  {"src": "/assets/monse-1.png"},
  {"src": "/assets/cesar-1.png"},
  {"src": "/assets/jamal-1.png"},
  {"src": "/assets/ruby-1.png"},
  {"src": "/assets/jasmin-1.png"},
  {"src": "/assets/own-my-block-1.png"}

]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [showCapa, setShowCapa] = useState(true)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleCards)
    setTurns(0)
    setShowCapa(false)
  }

  console.log(cards, turns)


  return (
    <div className='App'>
      <h1>Own My Block Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      {showCapa && <div className='capa'>
      <img className='img-capa' src={capa}></img>
      </div>}

      <div className='card-grid'>
        {cards.map(card => (
          <div className='card' key={card.id}>
            <img className='front' src={card.src}/>
            <img className='back' src={cover}/>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
