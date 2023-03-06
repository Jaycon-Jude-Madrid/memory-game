import React from "react";
import Cover from "../assets/cover.png";
import "./SingleCard.css";
interface CardsProps {
  disabled: boolean;
  handleChoice: (card: any) => void;
  flipped: any;
  cards: {
    id: number;
    src: string;
  };
}
const SingleCard = ({ cards, handleChoice, flipped, disabled }: CardsProps) => {
  const handleCLick = () => {
    if (!disabled) {
      handleChoice(cards);
    }
  };
  return (
    <div key={cards.id} className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={cards.src} alt="card front" />
        <img className="back" src={Cover} onClick={handleCLick} />
      </div>
    </div>
  );
};

export default SingleCard;
