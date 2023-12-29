import React from "react";

const MainVideoTitle = ({title, overview}) => {

  return (
    <div className="pt-[22%]  w-full aspect-video absolute px-7  " >
      <div className="w-1/3">
      <h1 className="font-bold text-4xl text-white" >{title}</h1>
      <p className="text-slate-300 ">{overview}</p>
      </div>
      <div >
        <button className="bg-red-800 bg-opacity-50 rounded-md text-white px-8 py-2" >Play</button>
        <button className="bg-white mx-4 bg-opacity-50 rounded-md text-white px-4 py-2">More info</button>
      </div>
    </div>
  );
};

export default MainVideoTitle;