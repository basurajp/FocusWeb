import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./Button";

const Card = ({ width, start, para, hover = "none" }) => {
  return (
    <div
      className={`${width} duration-200 p-5 bg-zinc-800 rounded-xl min-h-[30rem] flex flex-col  justify-between 
      hover:${hover}`}
    >
      <div className="w-full ">
        <div className="flex items-center justify-between w-full">
          <h3>One heading </h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="mt-10 text-3xl font-medium">whater hearing </h1>
      </div>

      <div className="w-full down ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight seleading-none">
              start a project
            </h1>
            <button className="px-5 py-2 mt-5 border rounded-full border-zinc-50 ">
              Contact us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm font-medium text-zinc-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, est?
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
