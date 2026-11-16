import { NavLink } from "react-router-dom";

function Sidebar() {

    return (
        <aside className="sidebar">

            <div className="logo">
                <span>✦</span> TaskFlow
            </div>

            <p className="menu-title">MENU</p>

            <nav>

                <NavLink to="/" end>
                    <span>▦</span> Dashboard
                </NavLink>

                <NavLink to="/todos">
                    <span>✓</span> My Tasks
                </NavLink>

                <NavLink to="/notes">
                    <span>▤</span> My Notes
                </NavLink>

            </nav>

            <div className="sidebar-bottom">
                <h4>TaskFlow</h4>
                <p>Organize your life, one task at a time.</p>
            </div>

        </aside>
    );
}

export default Sidebar;