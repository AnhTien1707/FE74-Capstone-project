import React, { useEffect, useState } from "react";
import { Radio, Space, Tabs } from "antd";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShowTimeByMovie } from "../store/quanLyRap/thunkAction";
import TabPane from "antd/es/tabs/TabPane";
import { GetShowTimeDetail } from "../services/quanLyRapService";
import moment from "moment";

const ShowTimeDetailByMovie = () => {
  const [tabPosition, setTabPosition] = useState("left");
  const { showTimeDetail } = useSelector((state) => state.quanLyRap);
  const param = useParams();
  const dispatch = useDispatch();

  console.log(param);

  useEffect(() => {
    if (param?.id) {
      dispatch(getShowTimeByMovie(param.id));
    }
  }, [dispatch, param?.id]);

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  console.log(showTimeDetail);

  return (
    <Tabs defaultActiveKey="1" centered className="w-4/5 m-auto">
      <TabPane tab="SHOWTIMES" key="1">
        <div className="border rounded pt-5 my-5 w-3/5 m-auto h-[500px] overflow-y-scroll">
          <Tabs tabPosition={tabPosition}>
            {showTimeDetail?.heThongRapChieu?.map((theaterList) => (
              <TabPane
                tab={
                  <img
                    src={theaterList.logo}
                    alt={theaterList.maHeThongRap}
                    className="w-12 h-12"
                  />
                }
                key={theaterList.maHeThongRap}
              >
                {theaterList?.cumRapChieu?.map((showTimeList) => (
                  <div className="p-5">
                    <div className="flex mb-1">
                      <img
                        src={showTimeList.hinhAnh}
                        alt={showTimeList.tenCumRap}
                        className="w-12 h-12"
                      />
                      <div className="text-left px-5">
                        <h1>{showTimeList.tenCumRap}</h1>
                        <p>{showTimeList.diaChi}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-x-1">
                      {showTimeList?.lichChieuPhim?.map((showtime, index) => (
                        <NavLink
                          to={`/checkout/${showtime.maLichChieu}`}
                          key={index}
                          className="text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm mb-[10px]"
                        >
                          {moment(showtime.ngayChieuGioChieu).format("hh:mm A")}
                        </NavLink>
                      ))}
                    </div>
                    <hr />
                  </div>
                ))}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </TabPane>
      <TabPane tab="TRAILER" key="2">
        <div className="flex justify-center p-10">
          <iframe
            width="560px"
            height="315px"
            src={showTimeDetail?.trailer}
          ></iframe>
        </div>
      </TabPane>
    </Tabs>
  );
};

export default ShowTimeDetailByMovie;
