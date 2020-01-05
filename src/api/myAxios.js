import axios from 'axios';
import {BASE_URL} from '../config'
let instance = axios.create({
    baseURL:BASE_URL,
    timeout:20000
  })

//请求拦截器
instance.interceptors.request.use((config)=>{
  return config
})

//响应拦截器

instance.interceptors.response.use((response)=>{
  return response.data
},(error)=>{
  console.log(error)
  return new Promise(()=>{})
})


export default instance