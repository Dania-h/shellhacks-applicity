import "./SideBar.scss";
import logo from "../../assets/logo.png";
import { ReactComponent as TableIcon } from "../../assets/icons/ph_table-thin.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/mdi_star-outline.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/clarity_user-line.svg";
import { ReactComponent as GearIcon } from "../../assets/icons/ph_gear-thin.svg";

function SideBar() {
  return (
    <section className="sidebar">
      <nav className="sidebar__nav">
        <img className="sidebar__logo" src={logo} alt="Applicity"></img>
        <ul className="sidebar__ul">
          <li className="sidebar__ul--li">
            <TableIcon className="icon--margin" />
            Tracker
          </li>
          <li className="sidebar__ul--li">
            <StarIcon className="icon--margin" />
            Reviews
          </li>
          <li className="sidebar__ul--li">
            <UserIcon className="icon--margin" />
            Profile
          </li>
        </ul>
      </nav>
      <div className="sidebar__bottom">
        <GearIcon className="icon--margin" />
        <p>Settings</p>
      </div>
    </section>
  );
}

export default SideBar;
