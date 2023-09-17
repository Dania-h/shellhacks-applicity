import "../Hero/Hero.scss";
import arrowUpright from "../../assets/icons/arrow-upright-primarydark.png";
import diagonalTop from "../../assets/images/diagonal-top.png";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <h1 className="hero__heading">WELCOME TO YOUR NEXT JOB</h1>
            <h4 className="hero__subheading">One stop for tracking your applications and finding the best company for you.</h4>
            <Link to={"/dashboard"}>
                <button className="hero__button">GET STARTED
                    <img className="hero__button--arrow" src={arrowUpright} alt="arrow icon" />
                </button>
            </Link>
            <img className="hero__diagonalTop" src={diagonalTop} alt="background design accent" />
        </section>
    );
}

export default Hero;