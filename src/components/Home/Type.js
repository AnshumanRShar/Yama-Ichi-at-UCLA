import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "An internet you can touch, smell, and haggle with.",
          "The Internet Yami-Ichi is a flea market-style event where people deal with “Internet-ish” items in real space. It was started in Tokyo in 2012.",
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
