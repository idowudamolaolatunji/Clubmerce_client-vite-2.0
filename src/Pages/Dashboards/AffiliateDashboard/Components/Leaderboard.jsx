import React, { useEffect, useState } from "react";
import DashboardUi from "./DashboardUi";
import { dateConverter, formattedEmail, numberFormatter } from "../../../../utils/helper";
import DataTable from "react-data-table-component";
import Loading from "../../../../Components/Loading";
import TableMessage from '../../../../Components/TableMessage'
import { useAuthContext } from "../../../../Context/AuthContext";
import { tableCustomStyle }  from '../../../../utils/helper'



function Leaderboard() {
	const [isLoading, setIsLoading] = useState(false);
	const [affiliates, setAffiliates] = useState([]);
    const [message, setMessage] = useState('');

	const { user, token } = useAuthContext();

	useEffect(function () {
		async function fetchAffiliatesLeaderboard() {
            setMessage('')
			setIsLoading(true);
			try {
				const res = await fetch("http://localhost:3000/api/users/affiliates-leaderboard", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				});
				if (!res.json) throw new Error("Something went wrong, Check connection!");
				const data = await res.json();

				if (data.status !== "success") {
					throw new Error('There are no records to display, Check connection!');
				}
                if(data.data.affiliateLeaderboard.length === 0) {
                    throw new Error('No recent transactions...')
                }
				console.log(res, data);
				setAffiliates(data.data.affiliateLeaderboard);
			} catch (err) {
                setMessage(err.message)
			} finally {
				setIsLoading(false);
			}
		}
		fetchAffiliatesLeaderboard();
	}, []);

	const columns = [
		{
			name: "User",
			selector: (row) => {
				return (
					<span className="table-row-content table-row-product">
						<img className="table-product__image" src="/asset/img/products" alt="" />
						<span>
							<p className="table-product__name">
								{row.email === user.email ? "YOU" : row.fullName}
							</p>
							<p className="table-product__niche">{row.username}</p>
						</span>
					</span>
				);
			},
			width: "250px",
		},
		{
			name: "Email",
			selector: (row) => formattedEmail(row.email),
			width: "250px",
		},
		{
			name: "Earned",
			selector: (row) => row.clicks,
		},
		{
			name: "Clicks",
			selector: (row) => `₦${numberFormatter(row.totalAmountWallet)}`,
		},
		{
			name: "Promoting",
			selector: (row) => Number(Math.trunc(row.promotionLinksCounts)),
		},
		{
			name: "Sales",
			selector: (row) => Number(Math.trunc(row.productSold)),
		},
	];

	return (
		<DashboardUi>
			<h3 className="dashboard__heading">Leaderboard</h3>

			<div className="dashboard__table">
				<div className="table-title">
					<h4 className="table-heading">Affiliate Leaderboard</h4>
				</div>

				<DataTable
					columns={columns}
					data={affiliates}
                    customStyles={tableCustomStyle}
					pagination
					progressPending={isLoading}
					progressComponent={<Loading />}
                    persistTableHead
                    noDataComponent={<TableMessage message={message} />}
				/>
			</div>
		</DashboardUi>
	);
}

export default Leaderboard;
