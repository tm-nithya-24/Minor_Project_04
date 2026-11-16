import { useState } from "react";
import TodoItem from "../components/TodoItem";

function TodoPage({ tasks, setTasks }) {

    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [filter, setFilter] = useState("All");
    const [editId, setEditId] = useState(null);

    function handleSubmit(e) {

        e.preventDefault();

        if (!title.trim()) {
            alert("Please enter a task!");
            return;
        }

        if (editId) {

            setTasks(prev =>
                prev.map(task =>
                    task.id === editId
                        ? { ...task, title, dueDate }
                        : task
                )
            );

            setEditId(null);

        } else {

            const newTask = {
                id: Date.now(),
                title,
                dueDate,
                completed: false
            };

            setTasks(prev => [newTask, ...prev]);
        }

        setTitle("");
        setDueDate("");
    }

    function toggleTask(id) {

        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    }

    function deleteTask(id) {

        if (window.confirm("Delete this task?")) {
            setTasks(prev =>
                prev.filter(task => task.id !== id)
            );
        }
    }

    function editTask(task) {

        setTitle(task.title);
        setDueDate(task.dueDate);
        setEditId(task.id);
    }

    const filteredTasks = tasks.filter(task => {

        if (filter === "Completed") return task.completed;

        if (filter === "Pending") return !task.completed;

        return true;
    });

    return (

        <div className="page-container">

            <div className="page-intro">
                <h1>My Tasks 📋</h1>
                <p>Organize your day and achieve your goals.</p>
            </div>

            <form className="task-form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="What needs to be done?"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <input
                    type="date"
                    value={dueDate}
                    onChange={e => setDueDate(e.target.value)}
                />

                <button type="submit" className="primary-btn">
                    {editId ? "Update Task" : "+ Add Task"}
                </button>

            </form>

            <div className="filter-section">

                {["All", "Pending", "Completed"].map(item => (

                    <button
                        key={item}
                        className={filter === item ? "active-filter" : ""}
                        onClick={() => setFilter(item)}
                    >
                        {item}
                    </button>

                ))}

            </div>

            <div className="todo-list">

                {filteredTasks.map(task => (

                    <TodoItem
                        key={task.id}
                        task={task}
                        onToggle={toggleTask}
                        onEdit={editTask}
                        onDelete={deleteTask}
                    />

                ))}

                {filteredTasks.length === 0 && (
                    <div className="empty-state">
                        <h2>Nothing here yet! 🌱</h2>
                        <p>Add a task to get started.</p>
                    </div>
                )}

            </div>

        </div>
    );
}

export default TodoPage;