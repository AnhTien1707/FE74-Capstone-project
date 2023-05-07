import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimServices } from "../../services/quanLyPhimService";

export const getMovieList = createAsyncThunk(
  "quanlyphim/getMovieList",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyPhimServices.getMovieList('?maNhom=GP03');
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getBannerList = createAsyncThunk(
  "quanlyphim/getBannerList",
  async (_, { rejectWithValue }) => {
    try {
      const res = await quanLyPhimServices.getBannerList();
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getMovieDetail = createAsyncThunk(
  "quanlyphim/getmoviedetail",
  async (query, { rejectWithValue }) => {
    try {
      const res = await quanLyPhimServices.getMovieDetail(query);
      return res.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
