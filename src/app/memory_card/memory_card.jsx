"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const cardSet = [
  { image: "/egusi.png" },
  { image: "/fufu.png" },
  { image: "/garri.png" },
  { image: "/jollof_rice.png" },
  { image: "/nkwobi.png" },
  { image: "/palm_wine.png" },
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
    <>
      <div>Memory Card</div>
      <button
        onClick={shuffleCard}
        className=" w-40 h-12   bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold p rounded-lg "
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
              />
            </div>
            <div>
              <Image
                width={100}
                height={100}
                src="/card_back.png"
                alt="Card Back"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Memory_card;
