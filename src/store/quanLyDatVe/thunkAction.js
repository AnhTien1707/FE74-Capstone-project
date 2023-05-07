import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeService } from "../../services/quanLyDatVeService";
import {  message } from "antd"
export const getChairList = createAsyncThunk(
  'quanLyDatVe/chairList',
  async (_, {rejectWithValue})=>{
    try {
      const res = await quanLyDatVeService.chairList('46725')
      console.log('res', res.data);
      return res.data.content.danhSachGhe
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
export const ticketBooking = createAsyncThunk(
  'quanLyDatVe/ticketBooking',
  async (payload, {rejectWithValue} ) =>{
    try {
      const res = await quanLyDatVeService.ticketBooking(payload);
      if (res.data.statusCode !== 400) {
        message.success("Đặt vé thành công");
        
      }
      return res.data.content
    } catch (error) {
      return {rejectWithValue} 
    }
  }
)