import React from "react";

function Cart() {
	return (
		<div class="shopping__cart">
			<h4 class="dashboard__heading checkout__heading">Cart</h4>
			<div class="checkout__box"></div>
			<div class="checkout__box--controls">
				<span class="checkout__box--controls-info">
					<p>Sub Total</p>
					<span class="total-checkout">₦0</span>
				</span>
				<div class="controls">
					<button class="order__checkout--button" data-token="false">
						Proceed to checkout
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;
