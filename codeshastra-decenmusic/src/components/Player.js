import { useState, useEffect } from "react";

export default function Player() {
  const [play, setPlay] = useState(false);

  return (
    <div className="mt-4 w-full justify-center flex">
      <audio
        src="https://open.spotify.com/track/6XHVuErjQ4XNm6nDPVCxVX?si=06ea52f6d2c34363"
        controls
        autoPlay
        className="w-52 md:w-3/4"
      />
    </div>
  );
}
