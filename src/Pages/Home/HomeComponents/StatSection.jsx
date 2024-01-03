import React from "react";

function StatSection() {
	return (
		<section className="section stats__section">
			<div className="section__container stats grid grid__three">
				<div className="stats__data--one stats__data" data-value={90} data-symbol="K">
					<span>90K</span>
					<p className="stats__data--text margin__top--xsm">Affiliate promoters.</p>
				</div>
				<div className="stats__data--two stats__data" data-value={80} data-symbol="%">
					<span>80%</span>
					<p className="stats__data--text margin__top--xsm">Physical Product.</p>
				</div>
				<div
					className="stats__data--three stats__data"
					data-currency="₦"
					data-value={50}
					data-symbol="M"
				>
					<span>₦50M</span>
					<p className="stats__data--text margin__top--xsm">Transaction and payout.</p>
				</div>
			</div>
		</section>
	);
}

export default StatSection;
