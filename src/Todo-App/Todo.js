import React, {useState} from "react";

const Todo = ({ task, id, removeTodo, updateTodo }) => {
    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const toggleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = evt => {
        setEditTask(evt.target.value);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo(id, editTask);
        setIsEditing(false);
    };

    const handleComplete = (e) => {
        setIsComplete(!isComplete);
    }
    
    // default todo view
    let jsx = (
        <div>
            {isComplete ?
                <li style={{textDecoration:"line-through"}} onClick={handleComplete}>{task}</li> :
                <li onClick={handleComplete}>{task}</li>
            }
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={()=>removeTodo(id)}>X</button>
        </div>
    );

    // todo view when editing
    if (isEditing) {
        jsx = (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" value={editTask} onChange={handleChange} />
                <button>Update!</button>
            </form>
        </div>
        );
    }

    return jsx;
    
};

export default Todo;