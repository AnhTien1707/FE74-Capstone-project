import React from 'react'
import { useParams } from 'react-router-dom'
import Booking from '../pages/BookingTicket/Booking';

const CheckOut = () => {
   const param =useParams()
   console.log(param.id);
  return (
    <div>
      <div className='mt-5'>
        <Booking id ={param.id}/>
      </div>
    </div>
  )
}

export default CheckOut