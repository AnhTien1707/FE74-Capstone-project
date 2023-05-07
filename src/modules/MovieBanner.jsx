import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBannerList } from "../store/quanLyPhim/thunkAction";
import { Carousel } from 'antd';

const MovieBanner = () => {
  const {bannerList} = useSelector((state)=>state.quanLyPhim)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannerList())
  }, [dispatch])

  const contentStyle = {
    height: '640px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <Carousel effect="fade">
    
      {
        bannerList ?.map((banner,index)=>{
          return(
            <div key={index}>
            <div style={contentStyle}  >
              <img className="w-full" src={banner.hinhAnh}></img>
            </div>
            </div>
          )
        })
      }
    
    
  </Carousel>
  );
};

export default MovieBanner;