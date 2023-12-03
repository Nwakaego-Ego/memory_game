"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./memory_card.css";

const cardSet = [
  { image: "/blue.svg" },
  { image: "/green1.svg" },
  { image: "/red.svg" },
  { image: "/blue.svg" },
  { image: "/green1.svg" },
  { image: "/red.svg" },
];

const Memory_card = () => {
  const [card, setCard] = useState([]);
  const [turn, setTurn] = useState(0);

  const shuffleCard = () => {
    const shuffle = [...cardSet, ...cardSet]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCard(shuffle);
  };

  console.log(card, turn);

  //   useEffect(() => {
  //     console.log(card);
  //   }, [card]);

  return (
    <div className="bg-[#1C1525]">
      <div>Memory Card</div>
      <button
        onClick={shuffleCard}
        className="w-20 h-10  bg-[#8AA4E9] rounded-xl cursor-pointer"
      ></button>

      {card.map((cardItem) => (
        <div key={cardItem.id}>
          <div className="flex">
            <div>
              <Image
                width={100}
                height={100}
                src={cardItem.image}
                alt="Food Image"
                className="border border-blue-600  "
              />
            </div>
            <div>
              <Image
                width={100}
                height={100}
                src="/card.svg"
                alt="Food Image"
                className="border border-blue-600  "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Memory_card;
