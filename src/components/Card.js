import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const suitMap = {
  hearts: '❤️',
  spades: '♠️',
  clubs: '♣️',
  diamonds: '♦️',
};

export default function Card({ card, player }) {
  function handleCardClick() {
    setFrom(player);
    setSelectedCard(card);
  }

  const {
    setSelectedCard,
    selectedCard,
    setFrom,
  } = useContext(GameContext);
  
  const thisIsTheSelectedCard = selectedCard && selectedCard.value === card.value && selectedCard.suit === card.suit;


  return (
    <div className={`${thisIsTheSelectedCard ? 'selected' : ''} card`} 
      onClick={handleCardClick}>
      <div>{suitMap[card.suit]}</div>
      <div>{card.value}</div>
    </div>
  );
}
