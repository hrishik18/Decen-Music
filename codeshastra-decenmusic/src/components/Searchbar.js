import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import SpotifyWebApi from "spotify-web-api-node";
import useAuth from "../hooks/useAuth";

const Searchbar = ({ code }) => {
  const [search, setSearch] = useState("");
  const spotifyApi = new SpotifyWebApi({
    clientId: "ca2dd41cbe3045cfa0c744d4e4dec6c4",
  });
  const accessToken = useAuth(code);
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
  }

  useEffect(() => {
    if (!accessToken) return;
    else spotifyApi.setAccessToken(accessToken);
    return;
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

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

export default Searchbar;
