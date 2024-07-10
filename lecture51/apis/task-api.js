import { TaskApplicationBackend } from "./TaskApplicationApis"

export const getTaskForCurrentUser = async()=>{
    const{data} = await TaskApplicationBackend.get("/task/self");
    return data
}
