import React from "react";
import DashboardInsights from "./DashboardInsights";
import DashboardTable from "./DashboardTable";
import { useAuthContext } from "../../../../Context/AuthContext";

function Dashboard() {
	const { user } = useAuthContext()
	return (
		<div class="main__dashboard--container">
			<span class="heading">
				<h3 class="dashboard__heading margin__left--xsm">Welcome back, {user.fullName.split(' ')[0]}</h3>
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

export default Dashboard;
