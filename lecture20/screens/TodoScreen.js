// import { Component } from "react";
// class TodoScreen extends Component{
//     state = {
//         taskcount : 0 ,
//     }
//     render(){
//         return(
//             <div className="screen">
//             <h1 className="ui-heading center">To Do List</h1>
//             <div>
//                 <button onClick={(e)=>{
//                     this.setState({...this.state, taskcount: this.state.taskcount+1,});                    console.log(this.state.taskcount);
//                     console.log("Add Task button was clicked.");
                    
//                 }} className="ui secondary button">Add Task</button>
//                 <p>The number of Tasks are: {this.state.taskcount}</p>
//             </div>
//             </div>
//         );
//     }
// }

import {useState} from "react";
import Task from "../Component/task";
// const TodoScreen = () => {
//     const  [taskcount, settaskcount] = useState(0);
//     return(
//         <div className="screen">         <h1 className="ui-heading center">To Do List</h1>             <div>
//                        <button onClick={(e)=>{
//                             settaskcount(taskcount+1);
                            
//                         }} className="ui secondary button">Add Task</button>
//                         <p>The number of Tasks are: {taskcount}</p>
//                     </div>
//                     </div>
//     )
// }


const TodoScreen = () => {
    const  [taskList, settaskList] = useState([]);
    return(
        <div className="screen">         
        <h1 className="ui-heading center">To Do List</h1>      
               <div>
                       <button onClick={(e)=>{
                        settaskList([...taskList,{
                            title:"Go to gym",
                            discription: "Going to gym is good for muscle grow",
                        },
                    ]);
                            
                    }} 
                    className="ui secondary button">Add Task</button>
   {taskList.map((task)=>(
    <Task />
   ))}           
                    </div>
                    </div>
    )
}
export default TodoScreen;