import React from "react";

const MainVideoTitle = ({title, overview}) => {

  return (
    <div className="pt-[22%] w-screen aspect-video absolute px-7 bg-gradient-to-r from-black " >
      <div className="w-1/3">
      <h1 className="font-bold text-4xl text-white" >{title}</h1>
      <p className="text-slate-300 ">{overview}</p>
      </div>
      <div >
        <button className="bg-white hover:bg-opacity-80  rounded-md text-black px-10 py-2"> Play</button>
        <button className="bg-white mx-4 bg-opacity-50 rounded-md text-white px-4 py-2">More info</button>
      </div>
    </div>
  );
};

export default MainVideoTitle;