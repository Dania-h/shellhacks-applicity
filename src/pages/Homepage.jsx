import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

function Homepage() {
  return (
    <>
      <header className="App-header">
        <Navbar mess={'LOGIN'} />
      </header>
      <Hero />
    </>
  );
}

export default Homepage;
