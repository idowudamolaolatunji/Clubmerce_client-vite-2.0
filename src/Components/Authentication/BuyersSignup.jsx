import React from "react";
import { Link } from "react-router-dom";

function BuyersSignup() {
	return (
		<div className="signup__form" id="buyer">
			<form id="buyer-signup">
				<h3 className="form__heading">
					Create a Buyer account with <span className="form__extra">Clubmerce</span>
				</h3>
				<div className="signup__grid signup__name">
					<div className="form__item">
						<label className="form__item--label" htmlFor="fullName">
							Fullname
						</label>
						<input
							className="form__item--input buyer-signup__fullname"
							type="text"
							id="fullName"
							placeholder="Enter your Full Name"
							required
						/>
					</div>
					<div className="form__item">
						<label className="form__item--label" htmlFor="username">
							Username
						</label>
						<input
							className="form__item--input buyer-signup__username"
							type="text"
							id="username"
							placeholder="Choose a Username"
							required
						/>
					</div>
				</div>
				<div className="form__item">
					<label className="form__item--label" htmlFor="email">
						Email Address
					</label>
					<input
						className="form__item--input buyer-signup__email"
						type="email"
						id="email"
						placeholder="max123@example.com"
						required
					/>
				</div>
				<div className="signup__grid signup__password">
					<div className="form__item">
						<label className="form__item--label" htmlFor="password">
							Password
						</label>
						<input
							className="form__item--input buyer-signup__passwordMain"
							type="password"
							id="password"
							placeholder="••••••••••••"
							required
							minLength="8"
						/>
					</div>
					<div className="form__item">
						<label className="form__item--label" htmlFor="passwordConfirm">
							Confirm Password
						</label>
						<input
							className="form__item--input buyer-signup__passwordconfirm"
							type="password"
							id="passwordConfirm"
							placeholder="••••••••••••"
							required
							minLength="8"
						/>
					</div>
				</div>
				<div className="form__submit">
					<button className="form__button" type="submit">
						Submit and Signup
					</button>
					<p className="form__text">
						<span>Already have an account? </span>
						<Link className="form__extra" to="/buyers/login">
							Login here.
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}

export default BuyersSignup;
