import { configureStore } from "@reduxjs/toolkit";
import {quanLyNguoiDungReducer} from "./quanLyNguoiDung/slice"
import { quanLyDatVeReducer } from "./quanLyDatVe/slice";
import { quanLyPhimReducer } from "./quanLyPhim/slice";
import { quanLyRapReducer } from "./quanLyRap/slice";
export const store = configureStore({
  reducer:{
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyDatVe: quanLyDatVeReducer,
    quanLyPhim: quanLyPhimReducer,
    quanLyRap: quanLyRapReducer,
  }
});