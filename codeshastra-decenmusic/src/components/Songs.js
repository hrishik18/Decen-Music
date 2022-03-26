import React from "react";
import SongCard from "./SongCard";

const Songs = ({ songs, chooseTrack }) => {
  return (
    <div className="w-full flex overflow-x-auto pl-4 md:pl-8 pt-4 scrollbar-hide space-x-4">
      {songs.map((track) => (
        <SongCard
          track={track}
          key={track.uri}
          chooseTrack={chooseTrack}
          artist={track.artist}
          image={track.albumUrl}
          title={track.title}
        />
      ))}
    </div>
  );
};

export default Songs;
