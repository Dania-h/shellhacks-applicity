import "../Hero/Hero.scss";

function Hero() {
    return (
        <section className="hero">
            <h1 className="hero__heading">WELCOME TO YOUR NEXT JOB</h1>
            <h4 className="hero__subheading">One stop for tracking your applications and findin the best company for you.</h4>
            <button className="hero__button">GET STARTED</button>
        </section>
    );
}

export default Hero;