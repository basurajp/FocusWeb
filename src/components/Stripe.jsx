import React from "react";

const Stripe = ({ data }) => {
  return (
    <div className="w-[16.66%] px-10 py-5 border-t-[1.4px] border-b-[1.4px] border-r-[1.4px] border-zinc-700    flex items-center justify-between ">
      <img src={data.url} alt="stripe image " />
      <span className="font-semibold">{data.number}</span>
    </div>
  );
};

export default Stripe;
