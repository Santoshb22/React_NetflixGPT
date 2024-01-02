import React from "react";

const MainVideoTitle = ({title, overview}) => {

  return (
    <div className="  pt-[18%] sm:pt-[21%] w-screen aspect-video absolute px-2 sm:px-7 bg-gradient-to-r from-black " >
      <div className="w-1/3">
      <h1 className="font-bold  text-sm sm:text-md md:text-4xl xl:text-4xl text-white" >{title}</h1>
      <p className="text-slate-300 text-[7px] sm:text-xs md:text-xl lg:text-xl ">{overview}</p>
      </div>
      <div >
        <button className="bg-white hover:bg-opacity-80  rounded-md text-black font-semibold text-xs px-3 sm:px-6 sm:text-lg md:px-10 py-1 md:py-2 md:text-lg "> Play</button>
        <button className="bg-white mx-4 bg-opacity-50 rounded-md text-white text-xs px-2 sm:text-lg md:px-4 py-1 md:py-2 md:text-lg">More info</button>
      </div>
    </div>
  );
};

export default MainVideoTitle;