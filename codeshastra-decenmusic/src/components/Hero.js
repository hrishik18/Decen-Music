import React from "react";
import Player from "./Player";

const Hero = () => {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-semibold pt-6 pl-4 md:pl-8">
        Now Playing
      </div>
      <div className="w-full flex space-x-4 mt-4 pl-4 md:pl-8">
        <div className="w-1/2 md:w-2/5 flex flex-col p-4 bg-white justify-center items-center rounded-2xl shadow-md">
          <img
            src="https://m.media-amazon.com/images/I/610plIc00yL._SS500_.jpg"
            alt=""
            className="h-28 w-28"
          />
          <div className="font-bold text-md">Everything</div>
          <div className="text-sm">Diamond Eyes</div>

          <Player />
        </div>
        <div className="w-1/2 md:w-3/5 bg-black">Recently Played</div>
      </div>
    </div>
  );
};

export default Hero;
