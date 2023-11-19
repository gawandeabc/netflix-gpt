import React from "react";
import { GrPlayFill, GrCircleInformation } from "react-icons/gr";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden sm:inline-block py-6 text-lg w-1/3">
        {overview.length > 120 ? `${overview.substring(0, 120)}...` : overview}
      </p>
      <div className="flex md-4 md:m-0">
        <button className="flex items-center bg-white text-black py-1 md:py-3 px-2 md:px-12 text-xl rounded-lg hover:bg-opacity-80">
          <GrPlayFill className="m-1 items-center" /> Play
        </button>
        <button className="hidden md:inline-block mx-2 items-center bg-gray-400 text-black py-1 md:py-3 px-2 md:px-12 text-xl bg-opacity-60 rounded-lg hover:bg-opacity-100">
          {/* <GrCircleInformation className="m-1 items-center" /> More Info */}
          More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
