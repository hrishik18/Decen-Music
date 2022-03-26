import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import getGlobalTopArtists from "";


const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [results,setresults] = useState([]);
 useEffect(() => {
   //feth and store
  //  (async function () {
  //    const res = await getGlobalTopArtists();
  //    setresults(res.json());
  //  });
  
   fetch('https://ws.audioscrobbler.com/2.0/')
     .then(response => response.json())
     .then(data => console.log(data))
 },[search])

  return (
    <div className="flex justify-center">
      <div className="mt-4 w-4/5 flex justify-center items-center bg-white rounded-full px-4">
        <BiSearchAlt className="h-6 w-6" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for Artists/Songs"
          className="flex-1 p-4 rounded-full focus:border-0 focus:outline-none"
        />
      </div>
    
    </div>
  );
};
  //drop down results
export default Searchbar;
