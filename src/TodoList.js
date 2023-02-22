import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleToDo }) {
    return (
        <div>
            {todos.map((item) => {
                return (
                    <Todo key={item.id} todo={item} toggleToDo={toggleToDo} />
                );
            })}
        </div>
    );
}
