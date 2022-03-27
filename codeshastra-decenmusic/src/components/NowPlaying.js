import React from "react";

const NowPlaying = ({ song }) => {
  return (
    <div className="sticky bottom-0 bg-black text-white rounded-full flex items-center space-x-4 shadow-lg px-4 py-2 justify-between">
      <div className="flex space-x-4">
        <img
          src={song.image}
          alt={song.title}
          className="h-12 w-12 rounded-full"
        />
        <div className="min-w-fit">
          <div className="font-bold text-xl">{song.title}</div>
          <div>{song.artist}</div>
        </div>
      </div>
      <audio src={song.uri} controls autoPlay className="flex-1 md:max-w-lg" />
    </div>
  );
};

export default NowPlaying;
