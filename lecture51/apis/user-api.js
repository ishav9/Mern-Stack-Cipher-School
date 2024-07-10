import { TaskApplicationBackend } from "./TaskApplicationApis";

export const loginUserApi = ({email,password})=> TaskApplicationBackend.post("/user/login",{email,password})
