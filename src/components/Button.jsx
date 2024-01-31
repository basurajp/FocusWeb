import React from "react";
import { IoIosReturnRight } from "react-icons/io";


const Button = () => {
  return (
    <div className="min-w-36 px-5 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">Get Started </span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;