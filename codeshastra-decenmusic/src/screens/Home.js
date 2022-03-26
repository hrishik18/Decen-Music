import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import Songs from "../components/Songs";
import Recents from "../components/Recents";
import NowPlaying from "../components/NowPlaying";

const Home = () => {
  const [song, setSong] = useState("");
  return (
    <div className="max-h-screen bg-slate-100 overflow-x-hidden flex overflow-y-hidden">
      <Sidebar />
      <div className="flex-1 w-full flex-col pb-6 overflow-y-auto">
        <Searchbar />
        <div className="pt-6 pl-4 md:pl-8">
          <span className="font-light md:text-md">What's hot 🔥</span>
          <div className="text-2xl md:text-3xl font-semibold">Trending</div>
        </div>
        <Songs setSong={setSong} />
        <div className="pt-6 pl-4 md:pl-8">
          <div className="text-2xl md:text-3xl font-semibold">
            Recently Played
          </div>
          <Recents setSong={setSong} />
          {song && <NowPlaying song={song} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
