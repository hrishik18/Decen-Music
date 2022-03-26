import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
const Searchbar = () => {
  const [search, setSeatch] = useState("");
  return (
    <div className="flex justify-center">
      <div className="mt-4 w-4/5 flex justify-center items-center bg-white rounded-full px-4">
        <BiSearchAlt className="h-6 w-6" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSeatch(e.target.value)}
          placeholder="Search for Artists/Songs"
          className="flex-1 p-4 rounded-full focus:border-0 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Searchbar;
