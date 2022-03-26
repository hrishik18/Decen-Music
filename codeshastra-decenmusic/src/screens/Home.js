import Sidebar from "./components/Sidebar";
import React from "react";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-slate-100"></div>
    </div>
  );
};

export default Home;
