import "../About/About.scss";
import diagonalBot from "../../assets/images/diagonal-bot.png";
import Aos from "aos";
import 'aos/dist/aos.css'

function About() {

    Aos.init({
        duration: 800
    });

    return (
        <section className="about">
            <img className="about__diagonalBot" src={diagonalBot} alt="bg design accent" />
            <h2 className="about__heading" data-aos="fade-up">ABOUT US</h2>
            <p className="about__paragraph" data-aos="fade-up" data-aos-delay="200">At Applicity, we're dedicated to simplifying your job search and empowering you to make informed career choices.</p>
        </section>
    );
}

export default About;