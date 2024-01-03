import React from "react";

import { GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";
import { MdOutlineSell } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { MdOutlineAdsClick } from "react-icons/md";
import { numberFormatter } from '../../../../utils/helper'
import { useAuthContext } from "../../../../Context/AuthContext";


function DashboardInsights() {
    const { user } = useAuthContext();

	return (
		<div className="dashboard__insights">
			<div className="insight insight__one">
				<div className="icon__box">
                    <GiMoneyStack className="insight__icon" />
				</div>
				<span>
					<p className="insight__title">All Time Earnings</p>
					<p className="insight__text">₦{numberFormatter(user.totalAmountWallet)}</p>
				</span>
			</div>
			<div className="insight insight__two">
				<div className="icon__box">
					<GiTakeMyMoney className="insight__icon" />
				</div>
				<span>
					<p className="insight__title">Avail. Profit</p>
					<p className="insight__text">₦{numberFormatter(user.availableAmountWallet)}</p>
				</span>
			</div>
			<div className="insight insight__four">
				<div className="icon__box">
					<GrMoney className="insight__icon" />
				</div>
				<span>
					<p className="insight__title">Pending Profit</p>
					<p className="insight__text">₦{numberFormatter(user.pendingAmountWallet)}</p>
				</span>
			</div>
			<div className="insight insight__two">
				<div className="icon__box">
					<MdOutlineSell className="insight__icon" />
				</div>
				<span>
					<p className="insight__title">Product Sold</p>
					<p className="insight__text">{Number(Math.trunc(user.productSold))}</p>
				</span>
			</div>
			<div className="insight insight__three">
				<div className="icon__box">
					<MdOutlineAdsClick className="insight__icon" />
				</div>
				<span>
					<p className="insight__title">Link clicks</p>
					<p className="insight__text">{user.clicks}</p>
				</span>
			</div>
			<div className="insight insight__four">
				<div className="icon__box">
					<FiExternalLink className="insight__icon" />
				</div>
				<span>
					<p className="insight__title">Promotion url</p>
					<p className="insight__text">{user.affiliateLinks.length}</p>
				</span>
			</div>
		</div>
	);
}

export default DashboardInsights;
