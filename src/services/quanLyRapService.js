import http from "../constant/api";
export const quanLyRapServices = {
    getTheaterSystem: (query = '') => http.get(`QuanLyRap/LayThongTinLichChieuHeThongRap${query}`),
    getShowTimeByMovie: (query) => http.get(`https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${query}`)
}