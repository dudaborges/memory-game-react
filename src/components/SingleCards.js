import React from 'react'
import '../components/SingleCards.css'

const SingleCards = ( {card, cover, handleChoice} ) => {

    const handleClick = () => {
      handleChoice(card)  
    }

  return (
    <div className='card'>
        <div>
        <img className='front' src={card.src} alt="card front"/>
        <img onClick={handleClick} className='back' src={cover} alt="card back"/>
        </div>
    </div>
  )
}

export default SingleCards