import { useEffect, useState } from 'react';
import './App.css';
import capa from './assets/capa.png'
import cover from './assets/cover.png'
import SingleCards from './components/SingleCards';

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
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleCards)
    setTurns(0)
    setShowCapa(false)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // verifica se as cartas selecionais são iguais ou não
  useEffect(() => {
    if(choiceOne && choiceTwo) {

      if(choiceOne.src === choiceTwo.src) {
        console.log('cartas iguais')
        resetTurn()
      } else{
        console.log('essas cartas não são iguais')
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  // reseta as chances e aumenta um turno
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className='App'>
      <h1>Own My Block Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      {showCapa && <div className='capa'>
      <img className='img-capa' src={capa}></img>
      </div>}

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCards key={card.id} card={card} cover={cover} handleChoice={handleChoice} />
        ))}
      </div>

    </div>
  );
}

export default App;
