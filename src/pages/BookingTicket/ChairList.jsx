import React from "react";
import {useSelector } from "react-redux";
import Chair from "./Chair";
import "./booking.css"

const ChairList = (props) => {
  const { chairList } = useSelector((state) => state.quanLyDatVe);

  return (
    <div className="grid grid-cols-10 gap-0 pl-5 pr-10 bg-[#201f2d]">
      {chairList.map((item)=>{
        return (
          <div key={item.maGhe}>
            <Chair chair ={item}/>
          </div>
        )
      })}
    </div>
  );
};

export default ChairList;
