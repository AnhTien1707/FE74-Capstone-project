import { createSlice } from "@reduxjs/toolkit";
import { getShowTimeByMovie, getTheaterSystem } from "./thunkAction";




const initialState = {
    theaterList: [],
    showTimeDetail: null
}


export const {reducer: quanLyRapReducer, actions: quanLyRapActions} = createSlice({
    name: 'quanLyRap',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getTheaterSystem.fulfilled, (state, action) => {
            state.theaterSystem = action.payload;
        })
        .addCase(getShowTimeByMovie.fulfilled, (state, action) => {
            state.showTimeDetail = action.payload;
        })
    }
})