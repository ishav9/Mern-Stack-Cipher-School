import React, { useContext , useEffect, useState} from "react";
import Task from "../Component/task";
import AddTask from "../Component/AddTask";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { getTaskForCurrentUser } from "../apis/task-api";
import { addTask } from "../apis/task-api";

const TodoScreen = () => {
    // Use context to get the task list
    const { taskList } = useContext(TaskContext) || { taskList: [] };
    const [setTaskList] = useState([]);
    const fetchTasks = async()=>{
        const tasks = await getTaskForCurrentUser();
        setTaskList([...tasks]);
    }
    const navigate = useNavigate();
    useEffect(()=>{
        fetchTasks();
    },[]);
    let addnewTask =async (task) => {
        try{
        await addTask({...task});
        setTaskList([...taskList,{
            ... task, isComplete:false
        }])
        }
        catch(err){
            console.error(err);
        }
    //   setTaskList([...taskList,{...task, createDate: new Date()
    //   }])
    };

    return (
        
            <div className="screen">
                <h1 className="ui-heading center">To Do List</h1>
                <div>
                   
                    <section>
                        <div className="ui cards">
                            {taskList && taskList.length > 0 ? (
                                taskList.map((task) => (
                                    <Task key={task.taskId} task={task} />
                                ))
                            ) : (
                                <p>No tasks available</p>
                            )}
                        </div>
                    </section>
                    <AddTask onSubmit={addnewTask} validator={(title,description)=>{
                        if(title?.length && description?.length){
                            console.log(`IS VALID`);
                            return true;
                        }
                        else{
                            console.log(`Invalid`);
                            return false;
                        }
                    }} />
                </div>
            </div>
        
    );
}

export default TodoScreen;
