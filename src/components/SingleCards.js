import React from 'react'
import '../components/SingleCards.css'

const SingleCards = ( {card, cover, handleChoice, flipped, disabled} ) => {

    const handleClick = () => {
      if(!disabled) {
        handleChoice(card)  
      }
    }

  return (
    <div className='card'>
        <div className={flipped ? "flipped" : ""}>
        <img className='front' src={card.src} alt="card front"/>
        <img onClick={handleClick} className='back' src={cover} alt="card back"/>
        </div>
    </div>
  )
}

export default SingleCards