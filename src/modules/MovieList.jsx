import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import { getMovieList } from "../store/quanLyPhim/thunkAction";


const MovieList = () => {
  const navigate = useNavigate();
  const {movieList} = useSelector((state) => state.quanLyPhim)
  // console.log(movieList);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   (async () => {
  //     const res = await quanLyPhimServices.getMovieList("?maNhom=GP03");
  //     // console.log(res.data.content);
  //     setMovieList(res.data.content);
  //     // console.log(movieList);
  //   })();
  // }, []);

  useEffect(() => {
    dispatch(getMovieList());
  }, [dispatch])

  const sliderRef = React.useRef(null);

  const sliderMovie = {
    rows: 1,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    
  };

  return (
    <div className="p-10 text-2xl text-center bg-[#fdfcf0]">
      <h1 className="font-bold text-4xl p-5">MOVIE SELECTION</h1>
      <div className="flex justify-center">  
    <div onClick={() => {sliderRef?.current?.slickPrev()}} className="flex items-center justify-center"><LeftOutlined  className="text-5xl"/></div>
    <Slider ref={sliderRef} {...sliderMovie} className="w-9/12">
      {movieList?.map((movie) => {
        return (
          <div key={movie.maPhim}>
            <div className="p-[5px]" onClick={() => {navigate(`/moviedetail/${movie.maPhim}`)}}>
              <img
                src={movie.hinhAnh}
                alt={movie.tenPhim}
                className="h-[350px] w-[250px] rounded object-cover object-center"
              />
              <div className="mb-2 text-left h-10 py-1">
                <p className="text-lg font-bold">{movie.tenPhim}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
    <div onClick={() => {sliderRef?.current?.slickNext()}} className="flex items-center justify-center"><RightOutlined className="text-5xl" /></div>
    </div>
    </div>
  );
};

export default MovieList;


