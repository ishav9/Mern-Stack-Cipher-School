import axios from "axios";
export const TaskApplicationBackend = axios.create({
    baseURL:`http://localhost:3000`,

});
// TaskApplicationBackend.interceptors.request.use((config)=>{
//     console.log("Run this config");
//     console.log(config);
// },(error)=>{
//     return Promise.reject(error);
// })
