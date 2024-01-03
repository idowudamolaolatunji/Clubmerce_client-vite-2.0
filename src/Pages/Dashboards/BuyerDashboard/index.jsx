import React, { useState } from "react";
import '../../../Assets/css/dashboard.css';
import '../../../Assets/css/query_dashboard.css';
import DashboardUi from "./Components/DashboardUi";
import MainDashboard from "./Components/MainDashboard";

function index() {
    

	return (
		<DashboardUi>
            <MainDashboard />
        </DashboardUi>
	);
}

export default index;
