"use client";

import React, { useState, useEffect } from "react";
import SingleCard from "../component/singleCard/singleCard";
import "./memory_card.css";

const cardSet = [
  { image: "/jollof_rice.png" },
  { image: "/nkwobi.png" },
  { image: "/palm_wine.png" },
  { image: "/garri.png" },
  { image: "/egusi.png" },
  { image: "/fufu.png" },
];

let idCounter = 1;

const Memory_card = () => {
  const [card, setCard] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceone, setChoiceOne] = useState();
  const [choicetwo, setChoiceTwo] = useState();

  const shuffleCard = () => {
    const shuffle = [...cardSet, ...cardSet]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    //   .map((card) => ({ ...card, id: idCounter++ }));

    setCard(shuffle);
  };

  //   useEffect(() => {
  //     console.log(card);
  //   }, [card]);

  const handleSwitch = (cardItem) => {
    choiceone ? setChoiceTwo(cardItem) : setChoiceOne(cardItem);
  };

  useEffect(() => {
    if (setChoiceOne && choicetwo) {
      if (choiceone.image === choicetwo.image) {
        console.log("same");
        reset();
      } else {
        console.log("not same");
        reset();
      }
    }
  }, [choiceone, choicetwo]);

  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn((prevTurn) => prevTurn + 1);
  };

  return (
    <div className="memory-card-container">
      <div>Memory Card</div>
      <button
        onClick={shuffleCard}
        className="w-20 h-10 bg-[#8AA4E9] rounded-xl cursor-pointer"
      >
        Shuffle
      </button>

      <div className="grid-img">
        {card.map((cardItem) => (
          <div key={cardItem.id} className="img">
            <SingleCard cardItem={cardItem} handleSwitch={handleSwitch} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memory_card;
