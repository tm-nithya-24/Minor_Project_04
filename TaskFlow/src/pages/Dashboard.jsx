import { Link } from "react-router-dom";
import StatsCard from "../components/StatsCard";

function Dashboard({ tasks, notes }) {

    const completed = tasks.filter(
        task => task.completed
    ).length;

    const pending = tasks.filter(
        task => !task.completed
    ).length;

    return (

        <div className="dashboard">

            <div className="welcome-card">

                <div>
                    <h1>Welcome to TaskFlow! 👋</h1>

                    <p>
                        Stay organized and make every day productive.
                    </p>

                    <Link to="/todos" className="primary-btn">
                        Manage Tasks →
                    </Link>
                </div>

                <div className="welcome-icon">
                    ✨
                </div>

            </div>

            <h2 className="section-heading">
                Your Overview
            </h2>

            <div className="stats-grid">

                <StatsCard
                    title="Total Tasks"
                    value={tasks.length}
                    icon="📋"
                    color="#e8eaff"
                />

                <StatsCard
                    title="Completed"
                    value={completed}
                    icon="✅"
                    color="#d9f8e8"
                />

                <StatsCard
                    title="Pending"
                    value={pending}
                    icon="⏳"
                    color="#fff0d5"
                />

                <StatsCard
                    title="Total Notes"
                    value={notes.length}
                    icon="📝"
                    color="#f3e3ff"
                />

            </div>

            <div className="dashboard-bottom">

                <div className="overview-box">

                    <h3>Recent Tasks</h3>

                    {tasks.slice(0, 5).map(task => (

                        <div className="recent-item" key={task.id}>

                            <span>
                                {task.completed ? "✅" : "⏳"}
                            </span>

                            {task.title}

                        </div>

                    ))}

                    {tasks.length === 0 && (
                        <p>No tasks added yet.</p>
                    )}

                    <Link to="/todos">View all tasks →</Link>

                </div>

                <div className="overview-box">

                    <h3>Recent Notes</h3>

                    {notes.slice(0, 5).map(note => (

                        <div className="recent-item" key={note.id}>
                            📝 {note.title}
                        </div>

                    ))}

                    {notes.length === 0 && (
                        <p>No notes created yet.</p>
                    )}

                    <Link to="/notes">View all notes →</Link>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;