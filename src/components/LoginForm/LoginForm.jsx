import "../LoginForm/LoginForm.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const LoginForm = ({ SignIn }) => (
    <section className="login">
        <div className="login__bg">
            <Link to={"/"}>
                <img className="login__logo" src={logo} alt="Applicity logo" />
            </Link>
            <div className="login__content">
                <SignIn />
            </div>
        </div>
    </section>
);

export default LoginForm;
