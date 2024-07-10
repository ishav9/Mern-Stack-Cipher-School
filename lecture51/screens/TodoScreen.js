import React, { useContext , useEffect, useState} from "react";
import Task from "../Component/task";
import AddTask from "../Component/AddTask";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { getTaskForCurrentUser } from "../apis/task-api";

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
    const addnewTask = (title, description) => {
        if (title && description) {
            const newTask = {
                taskId: new Date().getTime().toString(),
                title,
                description,
            };
            addnewTask(newTask);
            navigate("/"); // navigate to the main screen after adding a task
        }
    };

    return (
        
            <div className="screen">
                <h1 className="ui-heading center">To Do List</h1>
                <div>
                    <button
                        onClick={(e) => {
                            // Handle Add Task button click
                            navigate("/add-task");
                        }}
                        className="ui secondary button"
                    >
                        Add Task
                    </button>
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
