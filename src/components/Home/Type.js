import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "An internet you can touch, smell, and haggle with.",
          "EDA room at Broad",
          "Oct 22nd, 2025",
        ],
        autoStart: true,
        loop: true,
        delay: 30, // typing delay in ms (lower = faster)
        deleteSpeed: 30, // deletion speed in ms
      }}
    />
  );
}

export default Type;
