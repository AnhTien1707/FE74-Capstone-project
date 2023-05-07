import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapServices } from "../../services/quanLyRapService";

export const getTheaterSystem = createAsyncThunk(
    "quanLyRap/gettheatersystem",
    async (_, {rejectWithValue}) => {
        try{
            const res = await quanLyRapServices.getTheaterSystem("?maNhom=GP03");     
            return res.data.content
            
        }catch(error){
            rejectWithValue(error);
        }
    }
)

export const getShowTimeByMovie = createAsyncThunk(
    "quanlyrap/getshowtimebymovie",
    async (query, {rejectWithValue}) => {
        try{
            const res = await quanLyRapServices.getShowTimeByMovie(query);
            return res.data.content
        }catch(error){
            rejectWithValue(error)
        }
    }
)