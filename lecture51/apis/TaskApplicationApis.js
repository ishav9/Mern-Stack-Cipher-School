import axios from "axios";
import { getUserToken } from "../utils/LoginUtil";
export const TaskApplicationBackend = axios.create({
    baseURL:`http://localhost:3000`,

});
TaskApplicationBackend.interceptors.request.use((config)=>{
    const token = getUserToken();
    if(token){
        config.headers = {Authorization:`Bearer ${token}`};
        console.log("Inside interceptor");
    }
    
},(error)=>{
    return Promise.reject(error);
})