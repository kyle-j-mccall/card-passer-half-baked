import { createContext, useState } from 'react';
import initialCards from '../cards-data';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  const gameState = {
    deck,
    setDeck,
    playerOneHand,
    setPlayerOneHand,
    selectedCard, 
    setSelectedCard,
    playerTwoHand,
    setPlayerTwoHand,
    playerThreeHand,
    setPlayerThreeHand,
    from, 
    setFrom,
    to,
    setTo
  };

  return <GameContext.Provider value={{ ...gameState }}>{children}</GameContext.Provider>;

};

export { GameProvider, GameContext };