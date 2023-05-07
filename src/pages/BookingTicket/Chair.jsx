import React from 'react'
import clsx from "clsx";
import { useDispatch, useSelector } from 'react-redux';
import "./booking.css"
import {quanLyDatVeAction} from '../../store/quanLyDatVe/slice'
const Chair = (props) => {
  const {chairBookingList} = useSelector((state)=> state.quanLyDatVe)
  const dispatch = useDispatch()
  const {chair} = props
  return (
    <div>
       <button
          className={clsx("btn btn-secondary chair m-2", {
            booked: chair.daDat, // NaN, null, undefined, 0, '', false, document.all
            //find tra ve chair neu co da dat, ko tim thay thi tra ve undefine
            booking: chairBookingList.find(
              (item) => item.maGhe === chair.maGhe
            ),
          })}
          disabled={chair.daDat}
          onClick={()=>{dispatch(quanLyDatVeAction.chairBooking(chair))}}
        >
          {chair.tenGhe}

        </button>
    </div>
  )
}

export default Chair