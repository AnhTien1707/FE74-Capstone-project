import { createSlice } from "@reduxjs/toolkit";
import {GetMovieDetail } from "../../services/quanLyPhimService";
import { getBannerList, getMovieDetail, getMovieList } from "./thunkAction";


const initialState = {
    movieList: [],
    bannerList: [],
    movieDetail: null,
}

export const {reducer: quanLyPhimReducer, actions: quanLyPhimActions} = createSlice({
    name: 'quanLyPhim',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getMovieList.fulfilled, (state, action) => {
            state.movieList = action.payload;
        })
        .addCase(getBannerList.fulfilled, (state, action) => {
            state.bannerList = action.payload;
        })
        .addCase(getMovieDetail.fulfilled, (state, action) => {
            state.movieDetail = action.payload;
        })
    },
})