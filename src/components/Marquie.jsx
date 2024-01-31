import React from "react";

const Marquie = ({ imagesUrl }) => {
  return (
    <div className="flex w-full gap-20 py-8 overflow-hidden">
      {imagesUrl.map((image, link) => (
        <img className="flex-shrink-0 w-52" src={image} alt="marque image " />
      ))}
      {imagesUrl.map((image, link) => (
        <img className="flex-shrink-0 w-52" src={image} alt="marque image " />
      ))}
    </div>
  );
};

export default Marquie;
