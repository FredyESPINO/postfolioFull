import React from "react";
import styles from "./slider.module.css";

const Silder = ({ arrayItems, heightContainer }) => {
  let arrayToRender = Array.isArray(arrayItems)
    ? arrayItems
    : Array(4).fill(arrayItems);

  return (
    // CAROUSEL CONTAINER
    <div
      className={`w-screen  relative border-2 border-black flex flex-row gap-16`}
      style={{ height: heightContainer ? heightContainer : "50px" }}
    >
      {/* CAROUSEL TRACK */}

      {/* CAROUSEL ITEMS */}

      {[...Array(5)].map((section, index) => (
        <div
          key={index}
          className="w-[100%] h-[100%] flex left-0 justify-center items-center gap-16 animate-slider "
        >
          {arrayToRender.map((item, i) => (
            <p key={i} className="text-black">
              {item}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Silder;
