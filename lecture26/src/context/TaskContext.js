import { createContext , useState} from "react";

const TaskContext = createContext();

const TaskProvider = ({children}) =>{
    const [taskList, setTaskList] = useState([]);
    const addnewTask = (task) => {
        setTaskList([...taskList,{...task,createDate: new Date()}])
    }
    return(
        <TaskContext.Provider value={(taskList,addnewTask)}>
            {children}
        </TaskContext.Provider>
    )
}
export {TaskProvider};
export default TaskContext;
