import { useState } from "react";

const AddTask = ({onSubmit}) => {
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const handleInputChange = (e) => {
        setTask({
            ...task, [e.target.name]: e.target.value,
        });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        onSubmit(task);
        
    }
//    const refresh = (e) =>{
//     window.location.reload();
//    }
    return (
        <>
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
        </>
    );
}

export default AddTask;
