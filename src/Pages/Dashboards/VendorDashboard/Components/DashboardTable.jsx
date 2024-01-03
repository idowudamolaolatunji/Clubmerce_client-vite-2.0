import React, { useState } from 'react'
import DataTable from 'react-data-table-component';
import TableMessage from '../../../../Components/TableMessage';
import Loading from '../../../../Components/Loading';
import { tableCustomStyle } from '../../../../utils/helper';

function DashboardTable() {
  const [isLoading, setIsLoading] = useState(false);
	const [productOrders, setProductOrders] = useState([]);
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
            width: '180px'
		},
		{
			name: "Total price",
			selector: (row) => {
				return (
					<span className="price-quantity">
						<p className="price">₦{numberFormatter(row.vendorProfit)}</p>
						<P className="table-quantity">x {row.quantity}</P>
					</span>
				);
			},
		},
		{
			name: "Phone No.",
			selector: (row) => row.buyer.phone
		},
		{
			name: "Location",
			selector: (row) => `${order.buyer.state ? order.buyer.state + ', ' : ''}${order.buyer.country ? order.buyer.country : ''}`,
		},
		{
			name: "Status",
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
			name: "Chat Buyer",
			selector: (row) => {
				return (
					<Link className="card__chat--btn" to={`/vendors/chat/${row.buyer._id}`}>
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
								row.isDelevered ? "not-clickable-and-disabled" : ""
							}`}
						>
							Delivered
						</button>
					</span>
				);
			},
		},
	];

    // No order at the moment...

  return (
    <div class="dashboard__table">
			<div class="table-title">
				<h4 class="table-heading">Product orders</h4>
			</div>

			<DataTable
				columns={columns}
				data={productOrders}
				pagination
				progressPending={isLoading}
				progressComponent={<Loading />}
				customStyles={tableCustomStyle}
				persistTableHead
				noDataComponent={
					<TableMessage message={message || "There are no records to display, Check connection!"} />
				}
			/>
		</div>
  )
}

export default DashboardTable
