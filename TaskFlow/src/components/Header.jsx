import { useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();

    const titles = {
        "/": "Dashboard",
        "/todos": "My Tasks",
        "/notes": "My Notes"
    };

    return (
        <header className="header">

            <div>
                <h2>{titles[location.pathname]}</h2>
                <p>Manage your productivity efficiently.</p>
            </div>

            <div className="profile">
                <div className="avatar">U</div>

                <div>
                    <h4>User</h4>
                    <span>Personal Workspace</span>
                </div>
            </div>

        </header>
    );
}

export default Header;