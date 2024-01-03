import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../../Context/AuthContext";
import { numberFormatter } from "../../../../utils/helper";

function DashboardInsights() {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const productClicks = products.reduce((acc, product) => acc + product.clicks, 0);
    const currentOrderCount = orders.filter(order => order.orderStatus === 'pending');
    const productSold = products.reduce((acc, product) => acc + product.purchasesCount, 0);
    const productGravity = products.reduce((acc, product) => acc + product.productGravity, 0);

	const { user } = useAuthContext();

    useEffect(function() {
        async function fetchInsightData() {
            try {

            } catch(err) {
                
            }
        }
        fetchInsightData();
    }, []);
	return (
		<div className="dashboard__insights">
			<div className="insight insight__one">
				<div className="icon__box">
					<i className="fa-solid fa-money-bill-1-wave insight__icon" />
				</div>
				<span>
					<p className="insight__title">All Time Earnings</p>
					<p className="insight__text">₦{numberFormatter(user.totalAmountWallet)}</p>
				</span>
			</div>
			<div className="insight insight__two">
				<div className="icon__box">
					<i className="fa-solid fa-comments-dollar insight__icon" />
				</div>
				<span>
					<p className="insight__title">Avail. Balance</p>
					<p className="insight__text">₦{numberFormatter(user.availableAmountWallet)}</p>
				</span>
			</div>
			<div className="insight insight__four">
				<div className="icon__box">
					<i className="fa-solid fa-coins insight__icon" />
				</div>
				<span>
					<p className="insight__title">Pending Profit</p>
					<p className="insight__text">₦{numberFormatter(user.pendingAmountWallet)}</p>
				</span>
			</div>
			<div className="insight insight__two">
				<div className="icon__box">
					<i className="fa-solid fa-list-check insight__icon" />
				</div>
				<span>
					<p className="insight__title">My Products</p>
					<p className="insight__text">{products.length}</p>
				</span>
			</div>
			<div className="insight insight__four">
				<div className="icon__box">
					<i className="fa-solid fa-arrow-up-right-from-square insight__icon" />
				</div>
				<span>
					<p className="insight__title">Clicks</p>
					<p className="insight__text">{productClicks}</p>
				</span>
			</div>
			<div className="insight insight__three">
				<div className="icon__box">
					<i className="fa-solid fa-shopping-cart insight__icon" />
				</div>
				<span>
					<p className="insight__title">Orders</p>
					<p className="insight__text">{currentOrderCount.length}</p>
				</span>
			</div>
			<div className="insight insight__two">
				<div className="icon__box">
					<i className="fa-solid fa-arrow-up-right-from-square insight__icon" />
				</div>
				<span>
					<p className="insight__title">Product Sold</p>
					<p className="insight__text">{productSold.length}</p>
				</span>
			</div>
			<div className="insight insight__one">
				<div className="icon__box">
					<i className="fa-solid fa-bullhorn insight__icon" />
				</div>
				<span>
					<p className="insight__title">Affiliate Gravity</p>
					<p className="insight__text">{productGravity.length}</p>
				</span>
			</div>
		</div>
	);
}

export default DashboardInsights;
