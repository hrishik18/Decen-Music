import React from "react";
import SongCard from "./SongCard";

const Songs = () => {
  return (
    <div className="w-full flex overflow-x-auto pl-4 md:pl-8 pt-4 scrollbar-hide space-x-4">
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
      <SongCard />
    </div>
  );
};

export default Songs;
