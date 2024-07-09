import { createContext , useState} from "react";
import {v4 as randomUUID} from "uuid"; 
const TaskContext = createContext();
const TASK_EDITABLE_FEILD_LIST = ["title","description"];


const TaskProvider = ({children}) =>{
    const [taskList, setTaskList] = useState([]);
    const addnewTask = (task) => {
        setTaskList([...taskList,{...task,createDate: new Date(), taskId: randomUUID}])
    }
    const deleteTask = (taskId) =>{
       setTaskList (taskList.filter((task)=>task.taskId !== taskId));
    }
    const editTask = (task) =>{
        let temptask = {...taskList};
        for(let t of taskList){
            if(t.taskId===task.taskId){
                TASK_EDITABLE_FEILD_LIST.forEach((field) => (t[field]= task[field]));
            }
        }setTaskList(taskList);
    }
    return(
        <TaskContext.Provider value={{taskList,addnewTask,deleteTask, editTask}}>
            {children}
        </TaskContext.Provider>
    )
}
export {TaskProvider};
export default TaskContext;
