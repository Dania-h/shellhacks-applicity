import "../Footer/Footer.scss";
import logo from "../../assets/logo.png";

function Footer() {
    return (
        <section className="footer">
            <p className="footer__copyright">©2023 www.applicity.com</p>
            <img className="footer__logo" src={logo} alt="Applicity Logo" />
        </section>
    );
}

export default Footer;