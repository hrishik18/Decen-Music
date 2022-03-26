import Sidebar from "../components/Sidebar";
import React from "react";
import Searchbar from "../components/Searchbar";
import Hero from "../components/Hero";
import FetchRandomUser from "../components/FetchApi";


const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100 overflow-x-hidden flex overflow-y-hidden">
      <Sidebar />
      <div className="flex-1 w-full flex-col">
        <Searchbar  />
        <div className="pt-6 pl-4 md:pl-8">
          <span className="font-light md:text-md">What's hot 🔥</span>
          <div className="text-2xl md:text-3xl font-semibold">Trending</div>
        </div>
        {/* <Songs /> */}
        <Hero />
        <FetchRandomUser/>
      </div>
    </div>
  );
};

export default Home;
