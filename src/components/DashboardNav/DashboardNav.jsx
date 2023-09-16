import arrowUpright from '../../assets/icons/arrow-upright-primarydark.png'

function DashboardNav() {
  return (
    <header>
      <input type="text" placeholder="Search Companies..." />
      <button>
        SIGN OUT
        <img
          className="navbar__link-icon"
          src={arrowUpright}
          alt="login arrow"
        />
      </button>
    </header>
  );
}

export default DashboardNav;
