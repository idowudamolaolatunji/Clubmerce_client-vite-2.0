import React, { useState } from "react";

import MainDashboard from "./Components/MainDashboard";
import DashboardUi from "./Components/DashboardUi";



function index() {
	return (
        <DashboardUi>
            <MainDashboard />
        </DashboardUi>
	);
}

export default index;
