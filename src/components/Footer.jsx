import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex max-w-screen-xl gap-32 py-10 mx-auto">
        <div className="basis-1/2">
          <h1 className="text-[11rem] leading-none tracking-tighter font-semibold ">
            Refokus.
          </h1>
        </div>

        <div className="flex gap-10 basis-1/2">
          <div className="flex flex-col basis-1/3 ">
            <h4 className="mb-6 capitalize">Socials</h4>
            {["instagram", "twitter", "Linkdin"].map((item, index) => (
              <a key={index} className="mt-2 capitalize text-zinc-500" href="">
                {item}
              </a>
            ))}
          </div>

          
          <div className="flex flex-col basis-1/3 ">
            <h4 className="mb-6 capitalize">sitemap</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a key={index} className="mt-2 capitalize text-zinc-500" href="">
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-end basis-1/2">
            <p className="mb-8 text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro repellat assumenda, quos rerum aspernatur labore !</p>
            <Button />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
