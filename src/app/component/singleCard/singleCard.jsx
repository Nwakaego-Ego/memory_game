import React from "react";
import Image from "next/image";
import "./singleCard.css";

const singleCard = ({ cardItem, handleSwitch, flipped, disabled }) => {
  const handleImage = () => {
    if (!disabled) {
      handleSwitch(cardItem);
    }
  };
  return (
    <>
      <div className="card img">
        <div className={flipped ? "flipped" : ""}>
          <Image
            width={100}
            height={100}
            src={cardItem.image}
            alt="Food Image"
            className=" img-content front front-img"
          />

          <Image
            width={100}
            height={100}
            src="/witch.avif"
            alt="Witch Image"
            className=" img-content back"
            onClick={handleImage}
          />
        </div>
      </div>
    </>
  );
};

export default singleCard;
