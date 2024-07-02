import React, { useContext } from "react";
import Task from "../Component/task";
import AddTask from "../Component/AddTask";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

const TodoScreen = () => {
    // Use context to get the task list
    const { taskList } = useContext(TaskContext) || { taskList: [] };
    const navigate = useNavigate();

  

    return (
        <>
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
                    {/* <AddTask onSubmit={addNewTask} /> */}
                </div>
            </div>
        </>
    );
}

export default TodoScreen;
