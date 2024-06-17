import { formatDate } from "../utils/DateUtil";
const Task = ({task: {title, description , createDate}}) =>{
    // (props)
    // return <h6>Task</h6>
    // console.log(props);
    return (
        <div className="card">
        <div className="content">
         
          <div className="header">
          {title}
          </div>
          <div className="meta">
           {/* {createDate.toLocaleTimeString()} */ formatDate(createDate)}
          </div>
          
          <div className="description">
                {description}
          </div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Edit</div>
            <div className="ui basic red button">Delete</div>
          </div>
        </div>
      </div>
    )
};
export default Task;