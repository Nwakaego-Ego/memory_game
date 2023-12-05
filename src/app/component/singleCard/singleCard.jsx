import React from "react";
import Image from "next/image";
import "./singleCard.css";

const singleCard = ({ cardItem, handleSwitch }) => {
  const handleImage = () => {
    handleSwitch(cardItem);
  };
  return (
    <>
      <div className="img">
        <Image
          width={100}
          height={100}
          src={cardItem.image}
          alt="Food Image"
          className="border border-blue-600 img-content"
        />
        <Image
          width={100}
          height={100}
          src="/witch.avif"
          alt="Witch Image"
          className="border border-blue-600 img-content"
          onClick={handleImage}
        />
      </div>
    </>
  );
};

export default singleCard;
