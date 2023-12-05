import React from "react";
import Image from "next/image";
import "./singleCard.css";

const singleCard = ({ cardItem, handleSwitch, flipped }) => {
  const handleImage = () => {
    handleSwitch(cardItem);
  };
  return (
    <>
      <div className="card">
        <div className={flipped ? "flipped" : ""}>
          <Image
            width={100}
            height={100}
            src={cardItem.image}
            alt="Food Image"
            className="border border-blue-600 img-content front"
          />
          <Image
            width={100}
            height={100}
            src="/witch.avif"
            alt="Witch Image"
            className="border border-blue-600 img-content back"
            onClick={handleImage}
          />
        </div>
      </div>
    </>
  );
};

export default singleCard;
