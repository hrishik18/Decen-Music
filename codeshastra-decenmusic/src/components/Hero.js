import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="pt-6 pl-4 md:pl-8">
        <span className="font-light md:text-md">What's hot 🔥</span>
        <div className="text-2xl md:text-3xl font-semibold">Trending</div>
      </div>
      <div className="w-full bg-black flex overflow-x-scroll mt-4">
        <div className="text-white">
          <div>
            <img src="" alt="" />
          </div>
          <div>Song Name</div>
          <div>Artist Name</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
