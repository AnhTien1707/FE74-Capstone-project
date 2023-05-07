import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getChairList } from "../../store/quanLyDatVe/thunkAction";
import ChairList from "./ChairList";
import ResultBooking from "./ResultBooking";
import { Navigate, useNavigate } from "react-router-dom";
import { quanLyDatVeAction } from "../../store/quanLyDatVe/slice";
const Booking = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChairList());
  }, [dispatch]);
  useEffect(()=>{
    dispatch(quanLyDatVeAction.getID(props.id))
  },[dispatch])
  if(!localStorage.getItem('user')){
    return <Navigate to={'/login'}/>
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-7 col-sm-12">
          <h1 className="text-center">DAT VE XEM PHIN CYBERLEARN.VN</h1>
          <div className="screen bg-black  w-3/4 m-auto p-2 ">
            SCREEN
          </div>
            <ChairList />
        </div>
        <div className="col-xl-5 col-sm-12">
          <ResultBooking/>
        </div>
      </div>
    </div>
  );
};

export default Booking;
