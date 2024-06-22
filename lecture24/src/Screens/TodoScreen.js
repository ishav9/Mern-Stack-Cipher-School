

import {useState} from "react";
import Task from "../Component/task";
import AddTask from "../Component/AddTask";



const TodoScreen = () => {
    const  [taskList, settaskList] = useState([]);
    let addNewTask = (task) => {
        settaskList([...taskList, {...task, createDate: new Date()}]);
    };
    return(
        <>
        <div className="screen">         
        <h1 className="ui-heading center">To Do List</h1>      
               <div>
                       <button onClick={(e)=>{
                        settaskList([...taskList,{
                            title:"Go to gym",
                            discription: "Going to gym is good for muscle grow",
                            createDate: new Date(),
                        },
                    ]);
                            
                    }} 
                    className="ui secondary button">Add Task</button>
                    <section>
                    <div className="ui cards">
                     {taskList.map((task, index)=>(
                                   <Task task={task} keys={index} />
                            ))
                    }        
                    </div>
                    </section>
                    <AddTask onSubmit ={addNewTask}
                     />
                    </div>
                    </div>
                    
                    </>
    )
}
export default TodoScreen;
