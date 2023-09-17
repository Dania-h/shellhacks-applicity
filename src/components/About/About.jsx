import "../About/About.scss";
import diagonalBot from "../../assets/images/diagonal-bot.png";

function About() {
    return (
        <section className="about">
            <img className="about__diagonalBot" src={diagonalBot} alt="bg design accent" />
            <h2 className="about__heading">ABOUT US</h2>
            <p className="about__paragraph">At Applicity, we're dedicated to simplifying your job search and empowering you to make informed career choices.</p>
        </section>
    );
}

export default About;