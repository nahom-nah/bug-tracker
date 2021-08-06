import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div>
      <Sidebar>
        <Navbar />
      </Sidebar>
    </div>
  );
};

export default Dashboard;
