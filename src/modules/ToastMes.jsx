import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ToastMes = () => {
    const ToastClone ={
      error: (message) =>{ toast(message, {type:'error'})},
      success: (message) =>{toast(message,{type:'success'})}
    }
    Object.assign(message, ToastClone)
  
  return (
    <div>
      <ToastContainer position='top-center'/>
    </div>
  )
}
export const message = {}
export default ToastMes