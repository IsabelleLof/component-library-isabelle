//import React from 'react';
import Button from "./Button";
import Picture from "./Picture";

export const CardComponent = ({
  title,
  description,
  backgroundColor,
  imgScr,
  imgAlt,
}) => {
  const cardStyle = {
    backgroundColor: "white", // Set your desired background color here
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Add a box shadow for a nice effect
  };

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg gap-4">
        <div style={cardStyle}>
          {/* <Picture
          color={"#ffff"}
          size={210}
          imgSrc="https://source.unsplash.com/random/200x200?sig=1"
          imgAlt="Image of Zac Efron "
          href="https://www.google.com/"
          className="m-2 mt-8 mb-10"
        /> */}
          <img src={imgScr} alt={imgAlt} />
          <h1>{title}</h1>
          <p>{description}</p>
          <Button color="grey" height={60} width={110} disabled={false} />
        </div>
      </div>
    </>
  );
};
