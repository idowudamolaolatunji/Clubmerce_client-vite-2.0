import React, { useState } from "react";

function DashboardInsights() {
    const [orders, setOrders] = useState([]);
	const currentOrders = orders.filter(order => order.orderStatus === 'pending');
	const deliveredOrders = orders.filter(order => order.orderStatus === 'delivered');

	return (
		<div className="dashboard__insights">
			<div className="insight insight__one">
				<div className="icon__box">
					<i className="fa-solid fa-shopping-cart insight__icon"></i>
				</div>
				<span>
					<p className="insight__title">Cart Item</p>
					<p className="insight__text dashboard-cart">0</p>
				</span>
			</div>

			<div className="insight insight__three">
				<div className="icon__box">
					<i className="fa-solid fa-basket-shopping insight__icon"></i>
				</div>
				<span>
					<p className="insight__title">Current Orders</p>
					<p className="insight__text dashboard-cart">{currentOrders.length}</p>
				</span>
			</div>

			<div className="insight insight__two">
				<div className="icon__box">
					<i className="fa-solid fa-gift insight__icon"></i>
				</div>
				<span>
					<p className="insight__title">Products Bought </p>
					<p className="insight__text dashboard-cart">{deliveredOrders.length}</p>
				</span>
			</div>
		</div>
	);
}

export default DashboardInsights;
