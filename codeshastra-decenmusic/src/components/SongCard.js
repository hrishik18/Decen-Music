import React from "react";

const SongCard = ({ track, title, uri, albumUrl, artist, chooseTrack }) => {
  return (
    <div className="text-slate-700 rounded-lg space-y-1 hover:cursor-pointer transition hover:-translate-y-2 duration-300 flex-shrink-0">
      <img
        src={albumUrl}
        alt={title}
        className="w-36 h-36 rounded-lg shadow-md"
      />
      <div className="flex flex-col min-w-fit">
        <span className="font-medium text-lg">{title}</span>
        <span className="text-md">{artist}</span>
      </div>
    </div>
  );
};

export default SongCard;
