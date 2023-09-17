import "./DashboardNav.scss";
import arrowUpright from "../../assets/icons/arrow-upright-primarydark.png";
import { Link } from "react-router-dom";

function DashboardNav() {
  return (
    <header className="dashboard-header">
      <input
        className="dashboard-header__search"
        type="text"
        placeholder="Search Companies..."
      />
      <div className="dashboard-header__right-div">
        <Link to='/'>
          <button className="dashboard-header__button">
            SIGN OUT
            <img
              className="navbar__link-icon"
              src={arrowUpright}
              alt="login arrow"
            />
          </button>
        </Link>
        <div className="dashboard-header__avatar-div"></div>
      </div>
    </header>
  );
}

export default DashboardNav;
