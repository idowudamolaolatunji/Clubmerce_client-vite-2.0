import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import CountrySelect from "../CountrySelect";
import SignupImg from '../../Assets/img/signup2_reduced.jpg'
import Alert from "../Alert";
import { AiFillCheckCircle, AiFillExclamationCircle, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import MainSpinner from "../MainSpinner";
import EmailVerifyModal from "../EmailVerifyModal";

function AffiliateSignup() {
	const [mobileCode, setMobileCode] = useState('1');
	const [isLoading, setIsLoading] = useState(false);
	const [showPass, setShowPass] = useState(false)
	const [showComPass, setShowComPass] = useState(false)
	const [message, setMessage] = useState('');
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [showModal, setShowModal] = useState(false)
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		role: 'affiliate',
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
			{ showModal && <EmailVerifyModal />}
			{ isLoading && <MainSpinner />}
			<div className="signup__container grid">
				<div className="signup__form--image">
					<img className="form__image" src={SignupImg} alt={SignupImg} />
				</div>
				<form className="signup" onSubmit={handleSignup}>
					<h3 className="form__heading">
						Create an affiliate account with <span className="form__extra">Clubmerce</span>
					</h3>
					<div className="signup__grid signup__name">
						<div className="form__item">
							<label className="form__item--label" htmlFor="fullName">
								Fullname
							</label>
							<input
								className="form__item--input signup__fullname"
								type="text"
								id="fullName"
								name="fullName"
								placeholder="Enter your Full Name"
								required
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
								name="username"
								placeholder="Choose a Username"
								required
								value={formData.username}
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
					<div className="form__item signup__one">
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
						{/* <input className="none" id="role" defaultValue="affiliate" /> */}
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
							<CountrySelect handleChange={handleChange} formData={formData} setMobileCode={setMobileCode} />
						</div>

						<div className="form__item">
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
						<input className="agree" type="checkbox" required="required" id="check" />
						<label className="form__help" htmlFor="check">
							I Agree to the{" "}
							<Link className="form__extra" to="/">
								terms and conditions
							</Link>{" "}
							for membership.
						</label>
					</div>
					<div className="form__submit">
						<button className="form__button" type="submit">
							Become An Affilliate Today
						</button>
						<p className="form__text">
							<span> Already have an account? </span>
							<Link className="form__extra" to="/login">
								Login here.
							</Link>
						</p>
					</div>
				</form>
			</div>

			{ (isSuccess || isError) &&
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

export default AffiliateSignup;
