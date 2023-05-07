import http from "../constant/api";

export const quanLyDatVeService = {
  chairList: (query= '') => http.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${query}`),
  ticketBooking:(payload) => http.post(`QuanLyDatVe/DatVe`, payload)
}