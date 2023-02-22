import React from "react";

export default function Todo({ todo, toggleToDo }) {
    const handleClick = () => {
        toggleToDo(todo.id);
    };

    const badgeColor = todo.complete
        ? "badge rounded-pill bg-secondary"
        : "badge rounded-pill bg-primary";

    return (
        <div className="form-check form-switch fs-5">
            <input
                className="form-check-input"
                type="checkbox"
                checked={todo.complete}
                onChange={handleClick}
            />
            <label className="form-check-label">
                <span className={badgeColor}> {todo.name}</span>
            </label>
        </div>
    );
}
