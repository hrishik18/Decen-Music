import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [results, setresults] = useState([]);
  useEffect(() => {
    //feth and store
    //  (async function () {
    //    const res = await getGlobalTopArtists();
    //    setresults(res.json());
    //  });

    fetch("https://ws.audioscrobbler.com/2.0/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [search]);

  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    if (!search) return;
    const fetch = async () => {
      const res = await axios.get(
        `https://apg-saavn-api.herokuapp.com/result/?q=${search}`
      );
      const data = res.json();
      console.log(data);
      //setResults(data);
      console.log(results);
    };
    fetch();
    return () => (cancel = true);
  }, [search]);

  return (
    <div className="flex md:px-8 px-6">
      <div className="mt-2 w-full flex justify-center items-center bg-white rounded-full px-4">
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
