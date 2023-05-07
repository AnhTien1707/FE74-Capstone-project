import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyNguoiDungServices } from "../../services/quanLyNguoiDung.services";
import {  message } from "antd"

export const login = createAsyncThunk(
  "quanLyNguoiDung/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await quanLyNguoiDungServices.login(payload);
      console.log(res.data);
      if (res.data.statusCode !== 400) {
        message.success("Đăng nhập tài khoản thành công");
        
      }
      return res.data.content

    } catch (error) {
      return rejectWithValue(error)
    }
  }
);
