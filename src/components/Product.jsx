import React from "react";
import Button from "./Button";

const Product = ({data}) => {
  return (
    <div className="w-full py-20 px-32">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{data.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-6">
           {data.description}
          </p>
       <div className="flex gap-5 items-center">
       {data.live && <Button/>}
          {
            data.case && <Button title="Case Study" />
          }
       </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
