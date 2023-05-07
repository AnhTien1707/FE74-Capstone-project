import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getMovieDetail } from "../store/quanLyPhim/thunkAction";

const MovieDetail = () => {
  const { movieDetail } = useSelector((state) => state.quanLyPhim);
  // const [movieDetail, setMovieDetail] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  console.log(param);

  useEffect(() => {
    if (param?.id) {
      dispatch(getMovieDetail(param.id));
    }
  }, [dispatch, param?.id]);
  console.log(movieDetail);

  return (
    <div className="" style={{backgroundImage:'url(https://www.bhdstar.vn/wp-content/themes/bhd/assets/images/movie-details-bg.jpg)' , backgroundPosition : 'center' , backgroundSize:'cover'}}>
          <div className="w-3/4 m-auto p-10">
      <div className="mb-5">
        <h1 className="text-4xl text-white">Movie Detail</h1>
        <hr className="border-2 border-black border-opacity-50 my-1" />
      </div>
      <div className="flex justify-between">
        <img
          src={movieDetail?.hinhAnh}
          alt={movieDetail?.biDanh}
          className="h-[400px] w-[300px] rounded object-cover object-center"
        />
        <div className="pl-5">
          <div className="mb-5">
            <h1 className="text-3xl text-white">{movieDetail?.tenPhim}</h1>
            <hr className="my-1 " />
            <p className="flex">
              <span className="font-bold text-white">Detail: </span>
              <p className="text-white ml-4">{movieDetail?.moTa}</p>
            </p>
            <p className="flex">
              <span className="font-bold text-white">Release Date: </span>
              <p className="text-white ml-4">{moment(movieDetail?.ngayKhoiChieu)?.format("MM/DD/YYYY")}</p>
            </p>
          </div>
         <NavLink to='/booking'>
         <button className="text-white bg-green-500 border border-gray-300 rounded focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium text-sm px-3 py-[10px]">
            BOOKING
          </button>
         </NavLink>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MovieDetail;
