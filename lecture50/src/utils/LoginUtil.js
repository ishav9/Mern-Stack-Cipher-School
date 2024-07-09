import { TaskApplicationBackend } from "../apis/TaskApplicationApis"
import { loginUserApi } from "../apis/user-api"

export const loginUser = async({email,password})=>{
   const {token} = await loginUserApi({email, password});
   localStorage.setItem("token", token);
};
export const getUserToken =()=> {
    localStorage.getItem("token");
}
