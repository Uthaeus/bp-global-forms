import { NavLink } from "react-router-dom";

function MainNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "main-nav-link active" : "main-nav-link"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/new-order" className={({ isActive }) => isActive ? "main-nav-link active" : "main-nav-link"}>New Order</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;