import "../Sidekick/Sidekick.scss";
import diagonalBot from "../../assets/images/diagonal-bot.png";

function Sidekick() {
    return (
        <section className="sidekick">
            <img className="sidekick__diagonalBot" src={diagonalBot} alt="bg design accent" />
            <h2 className="sidekick__heading">WHAT CAN WE DO FOR YOU?</h2>
            <div className="sidekick__features">
                <div className="sidekick__feature1">
                    <div className="sidekick__feature-info">
                        <h5 className="sidekick__feature-info-heading">Something Here</h5>
                        <p className="sidekick__feature-info-paragraph">Blah bksajdlsadfh osf sladkfh sidf nskdf nsdfh sodf sdjn fsldfh so</p>
                    </div>
                    <div className="sidekick__feature-image">
                    </div>
                </div>
                <div className="sidekick__feature2">
                    <div className="sidekick__feature-info">
                        <h5 className="sidekick__feature-info-heading">Something Here</h5>
                        <p className="sidekick__feature-info-paragraph">Blah bksajdlsadfh osf sladkfh sidf nskdf nsdfh sodf sdjn fsldfh so</p>
                    </div>
                    <div className="sidekick__feature-image">
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sidekick;