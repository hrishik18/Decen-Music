import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";

const access_token = "BQDomUGTuIlezVCQbGPr_-iWzrJjwuiZzn-1LrFBXKTVceK_usUMjdjXEgpB9-XCh2BCAcpXRmLQs2Sfr9mQPOmtlhmmJzivkEGIOPAmJQfJLnq4k3wE-Bh9ewkyzCICEJ6keYHWvYEmJpMieqPZbV-2lXfhd-4cV9AjY0nAtRUDyrLDQbuFCLbsTexTa83X0nE1w5jxnRXINpNqrAYs";
const refresh_token = "AQDtq6oWAx_aPxbCj1wmbHFBGR47Z9NJuiN7r3F8skzsW-ElI5xEKNrqWQWfAA52K7hyPtwWB5_Xk5p0-gbgtiNq22_HrX9jW6BnweQOe5JgLgEGIPymGPTVTPYqmeG0txA";
const Searchbar = () => {
  const [search, setSearch] = useState(null);
  const [results,setresults] = useState(null);
 useEffect(() => {
   var spotifyApi = new SpotifyWebApi({
     clientId: 'fcecfc72172e4cd267473117a17cbd4d',
     clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
     redirectUri: 'http://www.example.com/callback'
   });
 },[search])

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
      <div className="mt-2 w-full md:w-4/5 flex justify-center items-center bg-white rounded-full px-4">
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
}
  //drop down results
export default Searchbar;
