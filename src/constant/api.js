import axios from 'axios'
import { message } from 'antd'

const TokenCyberSoft =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3NCIsIkhldEhhblN0cmluZyI6IjE2LzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDgyMjQwMDAwMCIsIm5iZiI6MTY2ODI3MjQwMCwiZXhwIjoxNjk0OTcwMDAwfQ.3TXoqM7cOKUQgRGc0plbpUsV406snlZBBeHlA7RxJYk'
const baseURL = 'https://movienew.cybersoft.edu.vn/api/'

const http = axios.create()
let token = "";
export const checkToken = () => {
   if(JSON.parse(localStorage.getItem('user') === null)){
      token = ""
   }else{
      token = `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
   }
   return token
}
http.interceptors.request.use((config) => {
   
    return {
        ...config,
        headers: {
            TokenCyberSoft,
            Authorization : checkToken()
        },
        baseURL,
    }
})
http.interceptors.response.use(
    (response)=>{
        return response
    },
    (error)=>{
        if(error?.response?.status === 403){
            message.error('ban ko co quyen truy cap')
        }
        if( error?.response?.status === 400) {
            message.error(error.response.data.content)
        }
        if( error?.response?.status === 404) {
            message.error(error.response.data.content)
        }
    }
)
export default http;