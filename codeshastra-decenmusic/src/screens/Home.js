import Sidebar from "../components/Sidebar";
import React, { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import Hero from "../components/Hero";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const Home = ({ code }) => {
  const spotifyApi = new SpotifyWebApi({
    clientId: "8b945ef10ea24755b83ac50cede405a0",
  });
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();
  const [lyrics, setLyrics] = useState("");

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
    setLyrics("");
  }

  useEffect(() => {
    if (!playingTrack) return;

    axios
      .get("http://localhost:3001/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then((res) => {
        setLyrics(res.data.lyrics);
      });
  }, [playingTrack]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
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
