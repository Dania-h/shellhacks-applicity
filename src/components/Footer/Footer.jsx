import "../Footer/Footer.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <section className="footer">
            <p className="footer__copyright">©2023 www.applicity.com</p>
            <Link to={"/"}>
                <img className="footer__logo" src={logo} alt="Applicity Logo" />
            </Link>
        </section>
    );
}

export default Footer;