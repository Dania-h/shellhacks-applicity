import { useLocation } from "react-router-dom";
import DashboardNav from "../components/DashboardNav/DashboardNav";
import SideBar from "../components/SideBar/SideBar";
import TrackerTable from "../components/TrackerTable/TrackerTable";
import { useState, useEffect } from "react";
import Reviews from "../components/Reviews/Reviews";

function Dashboard() {
  const location = useLocation();
  const [ trackerTable, setTrackerTable ] = useState(true);

  useEffect(() => {
    // Check the current pathname from the location object
    if (location.pathname === '/dashboard') {
      setTrackerTable(true);
    } else {
      setTrackerTable(false);
    }
  }, [location.pathname]);
  
  return (
    <article style={{ display: "flex", overflow: "hidden" }}>
      <SideBar />
      <div>
        <DashboardNav />
        {trackerTable ? <TrackerTable /> : <Reviews />}
      </div>
    </article>
  );
}

export default Dashboard;
