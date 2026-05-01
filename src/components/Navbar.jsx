import { NavLink } from "react-router-dom";
function Navbar() {
    const navStyle = ({ isActive }) => {
        return {
            color: isActive ? "#0782DA" : "black",
            fontSize: isActive ? "20px" : "16px"
        }
    }

    return (
        <nav>
            <h1>Gaf.com</h1>
            <div className="link-container">
                <NavLink style={navStyle} className="link" to="/">Home</NavLink>
                <NavLink style={navStyle} className="link" to="/about">About</NavLink>
                <NavLink style={navStyle} className="link" to="/dashboard">Dashboard</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;