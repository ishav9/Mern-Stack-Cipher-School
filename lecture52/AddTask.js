import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";


const AddTask = ({onSubmit,validator}) => {
        const {addnewTask} = useContext(TaskContext);
    const navigate = useNavigate();
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const [showError, setShowError] = useState(false)

    const handleInputChange = (e) => {
        setTask({
            ...task, [e.target.name]: e.target.value,
        });
    }
    

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        addnewTask(task);
       if( validator(task)){
        onSubmit(task);
        setShowError(false);
       }else{
        setShowError(true)
       }
        setTask({});
        navigate("/");
        
        
    }
//    const refresh = (e) =>{
//     window.location.reload();
//    }
    return (
        <>
        <section className="screen">
            <h3 className="ui heading center">Add New Task</h3>
            <div className="ui form">
                <form onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input
                            type="text"
                            spellCheck={false}
                            placeholder="Task Title"
                            name="title"
                            onChange={handleInputChange}
                            value = {task.title}
                        />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea
                            rows="2"
                            spellCheck={false}
                            placeholder="Description"
                            name="description"
                            onChange={handleInputChange}
                            value = {task.description}
                        ></textarea>
                    </div>
                    <button type="submit" className="ui primary button" >
                        Submit
                    </button>
                </form>
      
            </div>        
            { showError && (<div className="ui error message">
    <div className="header">Error in form</div>
    <p>Please enter valid feilds</p>
  </div>)
  }
            </section>
        </>
    );
}

export default AddTask;
