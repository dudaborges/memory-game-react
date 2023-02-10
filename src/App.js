import { useEffect, useState } from 'react';
import './App.css';
import capa from './assets/capa.png'
import cover from './assets/cover.png'
import SingleCards from './components/SingleCards';

const cardImages = [
  {"src": "/assets/monse-1.png", matched: false},
  {"src": "/assets/cesar-1.png", matched: false},
  {"src": "/assets/jamal-1.png", matched: false},
  {"src": "/assets/ruby-1.png", matched: false},
  {"src": "/assets/jasmin-1.png", matched: false},
  {"src": "/assets/own-my-block-1.png", matched: false}

]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [showCapa, setShowCapa] = useState(true)
  const [showTurns, setShowTurns] = useState(false)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffleCards)
    setTurns(0)
    setShowCapa(false)
    setShowTurns(true)
  }

  const handleChoice = (card) => {
    if (card.id === choiceOne?.id){
      return
    }
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

  }

  // verifica se as cartas selecionais são iguais ou não
  useEffect(() => {
    if(choiceOne && choiceTwo) {
      setDisabled(true)

      if(choiceOne.src === choiceTwo.src) {
        // console.log('cartas iguais')
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched: true}
            }else{
              return card
            }
          })
        })
        resetTurn()
      } else{
        // console.log('essas cartas não são iguais')
        setTimeout(() => resetTurn(), 1000) 
      }
    }
  }, [choiceOne, choiceTwo])


  // reseta as chances e aumenta um turno
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  // começa um novo jogo
  // useEffect(() => {
  //   shuffleCards()
  // }, [])

  return (
    <div className='App'>
      <h1>Own My Block Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      {showCapa && <div className='capa'>
      <img className='img-capa' src={capa}></img>
      </div>}

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCards
           key={card.id} 
           card={card} 
           cover={cover} 
           handleChoice={handleChoice}
           flipped={card === choiceOne || card === choiceTwo || card.matched}
           disabled={disabled}
            />
        ))}
      </div>

      {showTurns && <p>Turns: {turns}</p>}
          
    </div>
  );
}

export default App;
