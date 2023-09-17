import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Sidekick from "../components/Sidekick/Sidekick";
import Footer from "../components/Footer/Footer";

function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Sidekick />
            <Footer />
        </>
    );
}

export default Homepage;
