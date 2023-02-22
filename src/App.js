import React, { useRef, useState, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
    const [todos, setTodos] = useState([]);
    const todoRef = useRef();

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (stored.length !== 0) setTodos(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const toggleToDo = (id) => {
        const temp = [...todos];
        const todo = temp.find((item) => item.id === id);
        todo.complete = !todo.complete;
        setTodos(temp);
    };

    const handleClickAddToDo = (e) => {
        const text = todoRef.current.value;
        if (text === "") return;

        setTodos((prev) => [
            ...prev,
            { id: uuidv4(), name: text, complete: false },
        ]);
        todoRef.current.value = null;
    };

    const handleEnterAddToDo = (e) => {
        if (e.key !== "Enter") {
            return;
        }

        const text = e.target.value;
        if (text === "") return;

        setTodos((prev) => [
            ...prev,
            { id: uuidv4(), name: text, complete: false },
        ]);
        todoRef.current.value = null;
    };

    const handleClearToDo = () => {
        setTodos([]);
    };

    return (
        <div className="container-fluid">
            <h1>To-Do List</h1>
            <div>
                Active: {todos.filter((item) => item.complete === false).length}{" "}
                tasks
            </div>
            <br />
            <input ref={todoRef} onKeyDown={handleEnterAddToDo} type="text" />
            <div style={{ margin: "20px 0" }}>
                <button
                    className="btn btn-sm btn-outline-success"
                    onClick={handleClickAddToDo}
                    style={{ marginRight: "10px" }}
                >
                    Add Task
                </button>
                <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={handleClearToDo}
                >
                    Clear All Tasks
                </button>
            </div>
            <TodoList todos={todos} toggleToDo={toggleToDo} />
        </div>
    );
}

export default App;
