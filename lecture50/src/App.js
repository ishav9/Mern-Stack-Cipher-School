// import { Component } from "react";
import { useContext, useState } from "react";
import AddTask from "./Component/AddTask";
import TodoScreen from "./Screens/TodoScreen";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TaskContext from "./context/TaskContext";
import { TaskProvider } from "./context/TaskContext";
import LoginScreen from "./Screens/loginScreen";

const router = createBrowserRouter([
  {
    path:"/login",
    element:<LoginScreen/>
  },
    {
    path:"/",
    element:<TodoScreen/> ,// the page u want to render
},
 {
    path:"/add-task",
    element:<AddTask/>,
 }
])

const App = ()=>{
    // const {taskList , addnewTask} = useContext(TaskContext);
    
    // return <RouterProvider router = {router} />;
    return (
      <TaskProvider>
        <RouterProvider router = {router}/>
      </TaskProvider>
    )
}
export default App;

// CDN stands for content Distribution Network
