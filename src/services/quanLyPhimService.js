import http from "../constant/api";
export const quanLyPhimServices = {
    getBannerList: () => http.get(`QuanLyPhim/LayDanhSachBanner`),
    getMovieList: (query = '') => http.get(`QuanLyPhim/LayDanhSachPhim${query}`),
    getMovieDetail: (query) => http.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${query}`),
};

