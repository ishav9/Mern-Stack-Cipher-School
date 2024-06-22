// import { Component } from "react";
import { useState } from "react";
import AddTask from "./Component/AddTask";
import TodoScreen from "./Screens/TodoScreen";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
    {
    path:"/",
    element:<TodoScreen/> ,// the page u want to render
},
 {
    path:"/add-task",
    element:<AddTask/>,
 }
])
// class App extends Component{
//     render(){
//         return <TodoScreen/>;
//     }
// } we are changing class base component to the functional component
// const App = () => {
//     return <TodoScreen/>;
// };
const App = ()=>{
  const [task,setTask] = useState([]);
    return <RouterProvider router = {router} />;
}
export default App;

// CDN stands for content Distribution Network
