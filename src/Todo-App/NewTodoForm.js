import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ addTodo }) => {
    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({task:formData, id:uuid()});
        setFormData("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task :</label>
                <input
                    id="task"
                    name="task"
                    type="text"
                    onChange={handleChange}
                    value={formData}
                />
                <button>Add a todo!</button>
            </form>
        </div>
    );
};

export default NewTodoForm;