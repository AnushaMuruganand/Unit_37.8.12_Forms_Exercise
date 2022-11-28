import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
    }
    
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    // update a todo with updatedTask
    const updateTodo = (id, updatedTask) => {
        setTodos(todos =>
        todos.map(todo =>
            todo.id === id ? { ...todo, task: updatedTask } : todo
        )
        );
    };

    const todoComponents = todos.map(todo => (
        <Todo
          removeTodo={removeTodo}
          key={todo.id}
          id={todo.id}
          task={todo.task}
          updateTodo={updateTodo}
        />
      ));
    
      return (
        <div>
            <h2>Todo List</h2>  
            <NewTodoForm addTodo={addTodo} />
            <ul>{todoComponents}</ul>
        </div>
      );
};

export default TodoList;