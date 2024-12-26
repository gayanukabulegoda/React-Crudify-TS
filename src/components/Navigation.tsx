import {Link} from "react-router";
import "./Navigation.css";

export function Navigation() {
    return (
        <header className="navbar-container">
            <div className="navbar-content">
                <nav className="py-4">
                    <ul className="flex justify-center list-none p-0 m-0">
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/">Dashboard</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/add">Add</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/update">Update</Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="navbar-link" to="/delete">Delete</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}