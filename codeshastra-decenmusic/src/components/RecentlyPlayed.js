import React from "react";

const RecentlyPlayed = ({ image, title, artist, duration }) => {
  return (
    <div className="flex items-center mr-6 bg-white rounded-2xl p-2 text-black hover:cursor-pointer justify-between">
      <div className="flex items-center space-x-4">
        <img src={image} alt={title} className="w-12 h-12 rounded-lg" />
        <div className="font-semibold text-lg min-w-fit">{title}</div>
      </div>
      <div className="flex space-x-4">
        <div className="text-md">{artist}</div>
        <div className="text-md font-light">{duration}</div>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
