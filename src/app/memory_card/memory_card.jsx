"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
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

  const shuffleCard = () => {
    const shuffle = [...cardSet, ...cardSet]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    //   .map((card) => ({ ...card, id: idCounter++ }));

    setCard(shuffle);
  };

  console.log(card, turn);

  //   useEffect(() => {
  //     console.log(card);
  //   }, [card]);

  return (
    <div className="">
      <div>Memory Card</div>
      <button
        onClick={shuffleCard}
        className="w-20 h-10  bg-[#8AA4E9] rounded-xl cursor-pointer"
      ></button>

      {card.map((cardItem) => (
        <div key={cardItem.id}>
          <div className="flex flex-row">
            <div>
              <Image
                width={100}
                height={100}
                src={cardItem.image}
                alt="Food Image"
                className="border border-blue-600  img"
              />
            </div>
            <div>
              <Image
                width={100}
                height={100}
                src="/witch.avif"
                alt="Food Image"
                className="border border-blue-600  img"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Memory_card;
