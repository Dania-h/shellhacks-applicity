import "../Navbar/Navbar.scss";
import logo from "../../assets/logo.png";
import arrowUpright from "../../assets/icons/arrow-upright.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <Link to={"/"}>
                    <img className="navbar__logo" src={logo} alt="logo" />
                </Link>
                <input className="navbar__search" type="text" placeholder="Search Companies..." />
                <Link className="navbar__link" to="/login">
                    <p className="navbar__link-text">Login</p>
                    <img className="navbar__link-icon" src={arrowUpright} alt="login arrow" />
                </Link>
            </nav>
        </header>

    )
}

export default Navbar;