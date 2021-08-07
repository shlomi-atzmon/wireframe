import { Link } from "react-router-dom";

const DashboardStats = () => {
  return (
    <div>
      <Link to="/new-campaign">
        New Campaign
      </Link>
      <div>Dashboard Stats</div>
    </div>
  );
};

export default DashboardStats;
