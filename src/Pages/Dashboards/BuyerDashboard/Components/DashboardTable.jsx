import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Loading from "../../../../Components/Loading";
import TableMessage from "../../../../Components/TableMessage";
import { tableCustomStyle } from "../../../../utils/helper";
import { Link } from "react-router-dom";

function DashboardTable() {
	const [isLoading, setIsLoading] = useState(false);
	const [orders, setOrders] = useState([]);
	const [message, setMessage] = useState("");

	const columns = [
		{
			name: "Product",
			selector: (row) => {
				return (
					<span className="table-row-content table-row-product">
						<img className="table-product__image" src="/asset/img/products" alt="" />
						<span>
							<p className="table-product__name">{row.product.name}</p>
							<p className="table-product__niche">{row.product.niche}</p>
						</span>
					</span>
				);
			},
		},
		{
			name: "Total price",
			selector: (row) => {
				return (
					<span className="price-quantity">
						<p className="price">₦{numberFormatter(row.commissionAmount)}</p>
						<P className="table-quantity">x {row.quantity}</P>
					</span>
				);
			},
		},
		{
			name: "Location",
			selector: (row) => `${row.buyer.state}, ${row.buyer.country}`,
		},
		{
			nae: "Status",
			selector: (row) => {
				return (
					<span className={`status status--${row.status}`}>
						<p>{row.status}</p>
					</span>
				);
			},
		},
		{
			name: "Date",
			selector: (row) => row.orderedAt,
		},
		{
			name: "Chat Vendor",
			selector: (row) => {
				return (
					<Link className="card__chat--btn" to={`/buyers/chat/${row.vendor._id}`}>
						<i className="fa-solid fa-comment"></i>
						chat
					</Link>
				);
			},
		},
		{
			name: "Action",
			selector: (row) => {
				return (
					<span className="button_actions">
						<button
							data-buyerOrderId={row._id}
							className={`actions recieved recieved__order ${
								row.isRecieved === true ? "not-clickable-and-disabled" : ""
							}`}
						>
							Recieved
						</button>
					</span>
				);
			},
		},
	];

	return (
		<div class="dashboard__table">
			<div class="table-title">
				<h4 class="table-heading">Product orders</h4>
			</div>

			<DataTable
				columns={columns}
				data={orders}
				pagination
				progressPending={isLoading}
				progressComponent={<Loading />}
				customStyles={tableCustomStyle}
				persistTableHead
				noDataComponent={ <TableMessage message={message || "There are no records to display, Check connection!"} />}
			/>
		</div>
	);
}

export default DashboardTable;
