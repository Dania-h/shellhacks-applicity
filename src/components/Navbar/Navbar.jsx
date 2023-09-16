import "../Navbar/Navbar.scss";
import logo from "../../assets/logo.png";

function Navbar() {
    return (
        <nav className="navbar">
            <img className="navbar__logo" src={logo} alt="logo" />
            <input className="navbar__search" type="text" placeholder="Search Companies..." />
            <p>Login</p>
        </nav>
    )
}

export default Navbar;