import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quanLyDatVeAction } from "../../store/quanLyDatVe/slice";
import { ticketBooking } from "../../store/quanLyDatVe/thunkAction";
import { Modal } from "antd";

const ResultBooking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { chairBookingList, ID } = useSelector((state) => state.quanLyDatVe);
  const dispatch = useDispatch();
  const handlePurchase = (chairBookingList) => {
    let bookedTicket = {
      maLichChieu: ID,
      danhSachVe: [],
    };
    chairBookingList.forEach((item) => {
      bookedTicket.danhSachVe.push({ maGhe: item.maGhe, giaVe: item.giaVe });
    });
    console.log(bookedTicket);
    dispatch(ticketBooking(bookedTicket));
    dispatch(quanLyDatVeAction.chairPurchase(bookedTicket));
  };
  return (
    <div>
      <h2>Danh sach ghe da chon</h2>
      <div className="mt-3">
        <div className="d-flex">
          <button className="btn btn-secondary chair hover-none "></button>
          <p className="ml-1">Ghe con trong</p>
        </div>
        <div className="d-flex">
          <button className="btn btn-secondary chair booking "></button>
          <p className="ml-1">Ghe da chon</p>
        </div>
        <div className="d-flex">
          <button className="btn btn-secondary chair booked hover:bg-none "></button>
          <p className="ml-1">Ghe da dat</p>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Mã Ghế</th>
            <th>Giá vé (VND)</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {chairBookingList.map((chair) => {
            return (
              <tr key={chair.maGhe}>
                <td>{chair.tenGhe}</td>
                <td>{chair.giaVe} Đồng</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(quanLyDatVeAction.chairDelete(chair.maGhe));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Tong tien</td>
            <td className="">
              {chairBookingList
                .reduce((sum, chair) => {
                  return (sum += chair.giaVe);
                }, 0)
                .toFixed(1)}{" "}
              Đồng
            </td>
          </tr>
        </tfoot>
      </table>
      <div>
        <button
          className="btn btn-info"
          onClick={showModal}
        >
          Đặt Vé
        </button>
        <Modal
          title="Xác Nhận Đặt Vé"
          open={isModalOpen}
          onOk={() => {
            handlePurchase(chairBookingList);
            handleCancel()
          }}
          onCancel={handleCancel}
        >
          <p>Nhấn OK để tiếp tục</p>
        </Modal>
      </div>
    </div>
  );
};

export default ResultBooking;
