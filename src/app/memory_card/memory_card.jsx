"use client";

import React, { useState, useEffect } from "react";
import SingleCard from "../component/singleCard/singleCard";
import "./memory_card.css";

const cardSet = [
  { image: "/jollof1.png", matched: false },
  { image: "/palm_wine.png", matched: false },
  { image: "/nkwobi3.png", matched: false },
  { image: "/garri.png", matched: false },
  { image: "/egusi.png", matched: false },
  { image: "/fufu.png", matched: false },
];

let idCounter = 1;

const Memory_card = () => {
  const [card, setCard] = useState([]);
  const [turn, setTurn] = useState(0);
  const [choiceone, setChoiceOne] = useState();
  const [choicetwo, setChoiceTwo] = useState();
  const [disabled, setDisabled] = useState(false);

  const shuffleCard = () => {
    const shuffle = [...cardSet, ...cardSet]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    //   .map((card) => ({ ...card, id: idCounter++ }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCard(shuffle);
  };

  const handleSwitch = (cardItem) => {
    choiceone ? setChoiceTwo(cardItem) : setChoiceOne(cardItem);
  };

  useEffect(() => {
    shuffleCard();
  }, []);

  useEffect(() => {
    if (setChoiceOne && choicetwo) {
      setDisabled(true);

      if (choiceone.image === choicetwo.image) {
        setCard((prevCard) => {
          return prevCard.map((cardItem) => {
            if (cardItem.image === choiceone.image) {
              return { ...cardItem, matched: true };
            } else {
              return cardItem;
            }
          });
        });
        reset();
      } else {
        setTimeout(() => reset(), 2000);
      }
    }
  }, [choiceone, choicetwo]);

  console.log(card);

  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurn((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  return (
    <div className="text-center p-8 text-lg text font-bold text-white">
      <div className="">
        <div className="text-[#352549]">Memory Card</div>
        <p className="text-[#352549]">Nigeria Local Dish Edition</p>
        <button
          onClick={shuffleCard}
          className=" text-white bg-[#352A4B] w-32 h-12 rounded-xl cursor-pointer"
        >
          Shuffle
        </button>
        <div className="text-black">{turn}</div>
      </div>

      <div className="grid-img">
        {card.map((cardItem) => (
          <div key={cardItem.id} className="">
            <SingleCard
              cardItem={cardItem}
              handleSwitch={handleSwitch}
              flipped={
                cardItem === choiceone ||
                cardItem === choicetwo ||
                cardItem.matched
              }
              disabled={disabled}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memory_card;
