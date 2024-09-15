import "./DashboardNav.scss";
import { UserButton } from "@clerk/clerk-react";

function DashboardNav() {
  return (
    <header className="dashboard-header">
      <input
        className="dashboard-header__search"
        type="text"
        placeholder="Search Companies..."
      />
      <div className="dashboard-header__right-div">
        <p className="dashboard-header__p">Account</p>
        <UserButton />
        {/* <div className="dashboard-header__avatar-div"></div> */}
      </div>
    </header>
  );
}

export default DashboardNav;
