import React, { useState } from "react";
import CountrySelect from "../CountrySelect";
import Header from "../Headers/AuthHeader";
import AuthFooter from "../Footers/AuthFooter";

import SignupImage from "../../Assets/img/signup_new.jpg";
import "../../Assets/css/form.css";
import Alert from "../Alert";
import { AiFillCheckCircle, AiFillExclamationCircle, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import MainSpinner from "../MainSpinner";
import EmailVerifyModal from "../EmailVerifyModal";

function VendorSignup() {
	const [mobileCode, setMobileCode] = useState('1');
	const [isLoading, setIsLoading] = useState(false);
	const [showPass, setShowPass] = useState(false)
	const [showComPass, setShowComPass] = useState(false)
	const [message, setMessage] = useState('');
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [showModal, setShowModal] = useState(false)
	const [formData, setFormData] = useState({
		businessName: '',
		email: '',
		role: 'vendor',
		password: '',
		passwordConfirm: '',
		username: '',
		country: '',
		phone: '',
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	function handleShowPass() {
		setShowPass(!showPass)
	}
	function handleShowComPass() {
		setShowComPass(!showComPass)
	}

	function handleReset() {
		setMessage('');
		setIsError(false);
		setIsSuccess(false);
	}

	function handleError(mess) {
		setIsError(true);
		setMessage(mess);
		setTimeout(() => {
			setIsError(false);
			setMessage("");
		}, 2000);
	}

	function handleSuccess() {
		setMessage("Signup Successful!");
		setIsSuccess(true);
		setTimeout(() => {
			setIsSuccess(false);
			setMessage("");
		}, 2000);
		setShowModal(true)
	}

	async function handleSignup(e) {
		try {
			e.preventDefault();
			setIsLoading(true);
			handleReset();

			if(formData.password !== formData.passwordConfirm) {
				throw new Error('Passwords Must be the same');
			}

			const res = await fetch('http://localhost:3000/api/users/signup-affiliate', {
				method: 'POST',
				headers: { 
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData),
		   	});
			console.log(res);

			if(!res.ok) throw new Error('Something went wrong!');
			const data = await res.json();
			console.log(data);

			if(data.status !== 'success') {
				throw new Error(data.message);
			}

			handleSuccess();

		} catch(err) {
			handleError(err.message)
		} finally {
			setIsLoading(false)
		}
	}


	return (
		<>
			{ showModal && <EmailVerifyModal /> }
			{ isLoading && <MainSpinner /> }
			
			<Header />
			<div className="signup__form">
				<div className="signup__container grid">
					<div className="signup__form--image">
						<img className="form__image" src={SignupImage} alt={SignupImage} />
					</div>
					<form className="signup" onSubmit={handleSignup}>
						<h3 className="form__heading">
							Create a vendor account with{" "}
							<span className="form__extra">Clubmerce</span>
						</h3>
						<div className="signup__grid signup__name">
							<div className="form__item">
								<label className="form__item--label" htmlFor="businessName">
									Brand Name
								</label>
								<input
									className="form__item--input signup__businessName"
									type="text"
									id="businessName"
									placeholder="Enter your Brand name"
									required
									name="businessName"
									value={formData.fullName}
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div className="form__item">
								<label className="form__item--label" htmlFor="username">
									Username
								</label>
								<input
									className="form__item--input signup__username"
									type="text"
									id="username"
									placeholder="Choose a Username"
									name="username"
									required
									value={formData.username}
									onChange={(e) => handleChange(e)}
								/>
							</div>
						</div>
						<div className="form__item signup__once">
							<label className="form__item--label" htmlFor="email">
								Email Address
							</label>
							<input
								className="form__item--input signup__email"
								type="email"
								id="email"
								name="email"
								placeholder="max123@example.com"
								required
								value={formData.email}
								onChange={(e) => handleChange(e)}
							/>
							{/* <input className="none" id="role" value="vendor" /> */}
						</div>
						<div className="signup__grid signup__password">
							<div className="form__item">
								<label className="form__item--label" htmlFor="password">
									Password
								</label>
								<div className="form--password">
									<input
										className="form__item--input signup__passwordMain"
										type={showPass ? 'text' : 'password'}
										id="password"
										name="password"
										placeholder="••••••••••••"
										required
										minLength={8}
										onChange={(e) => handleChange(e)}
										value={formData.password}
									/>
										
									{ showPass ? <AiOutlineEye className="pass-icon" onClick={handleShowPass} /> : <AiOutlineEyeInvisible className="pass-icon" onClick={handleShowPass} /> }
								</div>
							</div>
							<div className="form__item">
								<label className="form__item--label" htmlFor="passwordConfirm">
									Confirm Password
								</label>
								<div className="form--password">
									<input
										className="form__item--input signup__passwordconfirm"
										type={showComPass ? 'text' : 'password'}
										id="passwordConfirm"
										name="passwordConfirm"
										placeholder="••••••••••••"
										required
										minLength={8}
										onChange={(e) => handleChange(e)}
										value={formData.passwordConfirm}
									/>

									{ showComPass ? <AiOutlineEye className="pass-icon" onClick={handleShowComPass} /> : <AiOutlineEyeInvisible className="pass-icon" onClick={handleShowComPass} /> }
								</div>
							</div>
						</div>
						<div className="signup__grid">
							<div className="form__item select">
								<label className="form__item--label" htmlFor="country">
									Country
								</label>
								<CountrySelect handleChange={handleChange} formData={formData} setMobileCode={setMobileCode} />							</div>

							<div className="form__item phone__input--box">
								<label className="form__item--label" htmlFor="phone">
									Phone Number
								</label>
								<div className="phone__input--box">
                                    <input
                                        className="phone__input form__item--input signup__phone"
										id="phone"
										name="phone"
										type="number"
										placeholder="908632572"
										required
										value={formData.phone}
										onChange={(e) => handleChange(e)}
                                    />
                                    <input
                                        className="country__code form__item--input select--input"
										value={`+${mobileCode}`}
                                        readonly="readonly"
                                    />
                                </div>
                            </div>
						</div>
						<div className="form__check">
							<input
								className="agree"
								type="checkbox"
								required="required"
								id="check"
							/>
							<label className="form__help" htmlFor="check">
								I Agree to the{" "}
								<a className="form__extra" href="#">
									terms and conditions
								</a>{" "}
								for membership.
							</label>
						</div>
						<div className="form__submit">
							<button className="form__button" type="submit">
								Submit and Signup
							</button>
							<p className="form__text">
								<span> Already have an account? </span>
								<a className="form__extra" href="/login">
									Login here.
								</a>
							</p>
						</div>
					</form>
				</div>
			</div>

			<AuthFooter />

			{(isSuccess || isError) &&
				<Alert alertType={`${isSuccess ? "success" : isError ? "error" : ""}`}>
					{isSuccess ? (
						<AiFillCheckCircle className="alert--icon" />
					) : isError ? (
						<AiFillExclamationCircle className="alert--icon" />
					) : (
						""
					)}
					<p>{message}</p>
				</Alert>
			}
		</>
	);
}

export default VendorSignup;
