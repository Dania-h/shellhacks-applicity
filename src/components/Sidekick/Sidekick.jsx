import "../Sidekick/Sidekick.scss";
import diagonalBot from "../../assets/images/diagonal-bot.png";
import keepTrack from "../../assets/images/keep-track.png";
import standards from "../../assets/images/standards.png";

function Sidekick() {
    return (
        <section className="sidekick">
            <img className="sidekick__diagonalBot" src={diagonalBot} alt="bg design accent" />
            <h2 className="sidekick__heading">WHAT CAN WE DO FOR YOU?</h2>
            <div className="sidekick__features">
                <div className="sidekick__feature">
                    <div className="sidekick__feature-info">
                        <h5 className="sidekick__feature-info-heading">Keep Track</h5>
                        <p className="sidekick__feature-info-paragraph">We provide you with advanced tools to help you effectively organize and manage your job applications. This enables you to maintain a well-structured overview effortlessly, giving you the freedom to focus on what truly matters in your career journey.</p>
                    </div>
                    <img className="sidekick__feature-image" src={keepTrack} alt="organizing jobs" />
                </div>
                <div className="sidekick__feature">
                    <img className="sidekick__feature-image" src={standards} alt="rating companies" />
                    <div className="sidekick__feature-info">
                        <h5 className="sidekick__feature-info-heading">Raise the Standards</h5>
                        <p className="sidekick__feature-info-paragraph">We collect comprehensive company data, enabling you to easily identify top-rated organizations known for their ethical and fair hiring practices. Additionally, we champion accountability by highlighting companies with less favorable practices, ensuring you make informed decisions in your job search.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sidekick;