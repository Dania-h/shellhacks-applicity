import DashboardNav from "../components/DashboardNav/DashboardNav";
import SideBar from "../components/SideBar/SideBar";
import TrackerTable from "../components/TrackerTable/TrackerTable";

function Dashboard() {
  return (
    <article style={{ display: "flex" }}>
      <SideBar />
      <div>
        <DashboardNav />
        <TrackerTable />
      </div>
    </article>
  );
}

export default Dashboard;
