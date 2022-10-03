import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext';
import CardList from './CardList';

export default function Player({ hand, player }) {

  const {
    setTo,
    setFrom,
    setSelectedCard,
    selectedCard,
    to,
  } = useContext(GameContext);

  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
      />
    </div>
  );
}
