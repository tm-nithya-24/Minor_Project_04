function TodoItem({ task, onToggle, onEdit, onDelete }) {

    return (

        <div className="todo-item">

            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />

            <div className="todo-content">

                <h4 className={task.completed ? "completed" : ""}>
                    {task.title}
                </h4>

                <span>
                    Due: {task.dueDate || "No deadline"}
                </span>

                <span className={task.completed ? "done" : "pending"}>
                    {task.completed ? "Completed" : "Pending"}
                </span>

            </div>

            <div className="todo-actions">

                <button onClick={() => onEdit(task)}>
                    ✎
                </button>

                <button onClick={() => onDelete(task.id)}>
                    🗑
                </button>

            </div>

        </div>
    );
}

export default TodoItem;