import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full">
      <div className="flex max-w-screen-xl gap-3 py-20 mx-auto ">
        <Card width = {'basis-1/3'} start={false} para={true}/>
        <Card width = {'basis-2/3'} start={true} para={false} hover={'bg-violet-500'}  />
      </div>
    </div>
  );
};

export default Cards;
