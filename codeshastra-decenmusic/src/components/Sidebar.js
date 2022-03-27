import React, { useState } from "react";
import { RiHome2Fill, RiHeart2Fill } from "react-icons/ri";
import { AiFillCompass } from "react-icons/ai";
import { HiTrendingUp } from "react-icons/hi";
import { MdFiberNew, MdPeople } from "react-icons/md";
import { RiCoupon3Fill } from "react-icons/ri";
import { BiCalendar } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const styles = {
    button:
      "p-4 rounded-lg md:flex items-center space-x-2 hover:cursor-pointer",
  };

  const [selectedIcon, setSelectedIcon] = useState("HOME");
  return (
    <div className="md:w-1/4 lg:w-1/5 px-8 pt-6 space-y-2 bg-white hidden md:block min-w-fit shadow-md">
      <div className="flex items-center space-x-2 mb-4">
        <img
          src="https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/24/5a/3f/245a3f5e-0b82-5011-895d-ea58b8226fa5/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.png"
          alt="DecenMusic"
          className="h-8 w-8 rounded-lg"
        />
        <span>
          <span className="text-xl font-bold text-orange-400">Decen</span>
          <span className="text-xl font-bold">Music</span>
        </span>
      </div>
      <div className="space-y-1">
        <div
          onClick={() => setSelectedIcon("HOME")}
          className={`${styles.button} ${
            selectedIcon === "HOME"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-slate-100"
          } `}
        >
          <RiHome2Fill className="w-5 h-5" />
          <div className="text-lg font-medium">Home</div>
        </div>
        <div
          onClick={() => setSelectedIcon("TRENDS")}
          className={`${styles.button} ${
            selectedIcon === "TRENDS"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-slate-100"
          } `}
        >
          <HiTrendingUp className="w-5 h-5" />
          <div className="text-lg font-medium">Trends</div>
        </div>
        <div
          onClick={() => setSelectedIcon("FEED")}
          className={`${styles.button} ${
            selectedIcon === "FEED"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-slate-100"
          } `}
        >
          <AiFillCompass className="w-5 h-5" />
          <div className="text-lg font-medium">Feed</div>
        </div>
      </div>
      <div className="space-y-1">
        <span className="p-4 text-sm">Discover</span>
        <div
          onClick={() => setSelectedIcon("NEW")}
          className={`${styles.button} ${
            selectedIcon === "NEW"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-slate-100"
          } `}
        >
          <MdFiberNew className="w-5 h-5" />
          <div className="text-lg font-medium">New and Notable</div>
        </div>
        <div
          onClick={() => setSelectedIcon("RELEASE CALANDER")}
          className={`${styles.button} ${
            selectedIcon === "RELEASE CALANDER"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-slate-100"
          } `}
        >
          <BiCalendar className="w-5 h-5" />
          <div className="text-lg font-medium">Release Calendar</div>
        </div>
        <div
          onClick={() => setSelectedIcon("EVENTS")}
          className={`${styles.button} ${
            selectedIcon === "EVENTS"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-slate-100"
          } `}
        >
          <RiCoupon3Fill className="w-5 h-5" />
          <div className="text-lg font-medium">Events</div>
        </div>
      </div>
      <div className="space-y-1 text-sm">
        <span className="p-4">Your Collection</span>
        <div
          onClick={() => setSelectedIcon("FAVOURITE SONGS")}
          className={`${styles.button} ${
            selectedIcon === "FAVOURITE SONGS"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-slate-100"
          } `}
        >
          <RiHeart2Fill className="w-5 h-5" />
          <div className="text-lg font-medium">Favourite Songs</div>
        </div>
        <div
          onClick={() => setSelectedIcon("ARTISTS")}
          className={`${styles.button} ${
            selectedIcon === "ARTISTS"
              ? "bg-black text-white"
              : "bg-white text-black hover:bg-slate-100"
          } `}
        >
          <MdPeople className="w-5 h-5" />
          <div className="text-lg font-medium">Artists</div>
        </div>
        <Link to="/upload">
          <div
            onClick={() => setSelectedIcon("UPLOAD")}
            className={`${styles.button} ${
              selectedIcon === "UPLOAD"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-slate-100"
            } `}
          >
            <FiUpload className="w-5 h-5" />
            <div className="text-lg font-medium">Upload</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
