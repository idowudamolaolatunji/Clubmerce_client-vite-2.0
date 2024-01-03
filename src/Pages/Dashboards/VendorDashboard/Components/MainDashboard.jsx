import React from "react";
import { useAuthContext } from "../../../../Context/AuthContext";
import DashboardInsights from "./DashboardInsights";
import DashboardTable from "./DashboardTable";

function MainDashboard() {
    const { user } = useAuthContext();
    
	return (
		<div class="main__dashboard--container">
			<span class="heading">
				<h3 class="dashboard__heading margin__left--xsm">Welcome back to {user.businessName}</h3>
				<span>
					<picture>
						<source
							srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fe/512.webp"
							type="image/webp"
						/>
						<img
							src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fe/512.gif"
							alt="👋"
							width="32"
							height="32"
						/>
					</picture>
				</span>
			</span>

			<DashboardInsights />
            <DashboardTable />
		</div>
	);
}

export default MainDashboard;
