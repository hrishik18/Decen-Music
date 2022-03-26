import Sidebar from "../components/Sidebar";
import React from "react";
import Searchbar from "../components/Searchbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100 overflow-x-hidden flex overflow-y-hidden">
      <Sidebar />
      <div className="flex-1 w-full flex-col">
        <Searchbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
