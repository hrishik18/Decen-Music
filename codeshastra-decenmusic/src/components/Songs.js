import React from "react";
import SongCard from "./SongCard";

const Songs = ({ setSong }) => {
  const songs = [
    {
      id: 1,
      title: "Oh My God",
      artist: "Alec Benjamin",
      duration: "3:08",
      image:
        "https://images.squarespace-cdn.com/content/v1/58ab2fce20099e7487a18b2a/1581805885946-RUZYPN83A8XQN8TI7WEI/cover+alec+benjamin+oh+my+god.jpg?format=750w",
    },
    {
      id: 2,
      title: "All Night",
      artist: "The Vamps",
      duration: "3:18",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/97/TheVampsNight%26Day.jpg",
    },
    {
      id: 3,
      title: "Youngblood",
      artist: "5 Seconds Of Summer",
      duration: "3:23",
      image: "https://m.media-amazon.com/images/I/81r0+JP4fFL._SL1500_.jpg",
    },
    {
      id: 4,
      title: "Mood",
      artist: "Igor L.D.T.",
      duration: "3:09",
      image: "https://i.ytimg.com/vi/LsVZlbsLLHs/hqdefault.jpg",
    },
    {
      id: 5,
      title: "Better",
      artist: "Khalid",
      duration: "3:50",
      image:
        "https://upload.wikimedia.org/wikipedia/en/8/82/Better_Khalid_Single_Cover.png",
    },
    {
      id: 6,
      title: "No Lie",
      artist: "Sean Paul",
      duration: "3:41",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/de/Sean_Paul_ft_Dua_Lipa_-_No_lie.jpg",
    },
    {
      id: 7,
      title: "Sweater Weather",
      artist: "The Neighbourhood",
      duration: "3:58",
      image: "https://i.ytimg.com/vi/cULQhvuq1Zc/maxresdefault.jpg",
    },
    {
      id: 8,
      title: "My Way",
      artist: "Calvin Harris",
      duration: "3:38",
      image: "https://i.scdn.co/image/ab67616d0000b2738d12bc5e3ea5c9f4a967de32",
    },
    {
      id: 9,
      title: "Let her go",
      artist: "Passenger",
      duration: "4:12",
      image: "https://i.scdn.co/image/ab67616d0000b273a7c10595167c713a2df0f187",
    },
  ];

  return (
    <div className="w-full flex overflow-x-scroll pl-4 md:pl-8 pt-2 scrollbar-hide space-x-4">
      {songs.map((song) => {
        return (
          <div onClick={() => setSong(song)} className="min-w-fit">
            <SongCard
              key={song.id}
              title={song.title}
              artist={song.artist}
              duration={song.duration}
              image={song.image}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Songs;
