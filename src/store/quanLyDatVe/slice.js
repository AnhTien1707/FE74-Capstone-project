import { createSlice } from "@reduxjs/toolkit";
import { getChairList, ticketBooking } from "./thunkAction";
const initialState = {
  chairList: [],
  chairBookingList: [],
  ID: null

};
export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeAction } =
  createSlice({
    name: "quanLyDatVe",
    initialState,
    reducers: {
      chairBooking: (state, action) => {
        const index = state.chairBookingList.findIndex(
          (item) => item.maGhe === action.payload.maGhe
        );
        if (index !== -1) {
          state.chairBookingList.splice(index, 1);
        } else {
          state.chairBookingList.push(action.payload);
        }
      },
      chairPurchase: (state, aciton) => {
        const newChair = JSON.parse( localStorage.getItem('chairList'))
        const newChairBooking = state.chairBookingList.map((e)=> e.maGhe)
        console.log(aciton.payload.danhSachVe);
        newChair.forEach((item) => {
          if(newChairBooking.includes(item.maGhe)){
            item.daDat = true
          }
          return item
        });
        state.chairList = newChair;
        state.chairBookingList =[]
      },
      chairDelete: (state, action) => {
        const index = state.chairBookingList.findIndex(
          (item) => item.maGhe === action.payload
        );
        if (index !== -1) {
          state.chairBookingList.splice(index, 1);
        }
      },
      getID: (state, action) => {
        state.ID = action.payload
        console.log(action.payload);
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getChairList.fulfilled, (state, action) => {
          state.chairList = action.payload;
          localStorage.setItem('chairList', JSON.stringify(action.payload))
        })
        .addCase(ticketBooking.fulfilled, (state, action) => {
        });
    },
  });
