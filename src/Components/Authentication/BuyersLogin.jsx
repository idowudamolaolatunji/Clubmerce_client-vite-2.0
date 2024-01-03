import React, { useEffect, useState } from "react";

import Alert from '../Alert';
import MainSpinner from '../MainSpinner';
import "../../Assets/css/form.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { AiFillCheckCircle, AiFillExclamationCircle, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function BuyersLogin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [showPass, setShowPass] = useState(false);

	const { user, handleChange } = useAuthContext();
	const navigate = useNavigate();

	function handleShowPass() {
		setShowPass(!showPass)
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

	async function handleLogin(e) {
		try {
			e.preventDefault();
			setIsLoading(true);
			handleReset();

			const res = await fetch('http://localhost:3000/api/users/login', {
				method: 'POST',
				headers: { 
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ email, password }),
		   	});
			console.log(res);

			if(!res.ok) throw new Error('Something went wrong!');
			const data = await res.json();
			console.log(data);

			if(data.status !== 'success') {
				throw new Error(data.message);
			}

			if(data.data.user.isEmailVerified === false) {
				setMessage('Email address not verified, Verification email has been resent!')
				setShowModal(true);
			}

			setMessage("Login Successful!");
			setIsSuccess(true);
			setTimeout(() => {
				setIsSuccess(false);
				setMessage("");
				handleChange(data.data.user, data.token);
			}, 2000);

		} catch(err) {
			handleError(err.message)
		} finally {
			setIsLoading(false)
		}
	}


	useEffect(function() {
		if(user) {
			if(user.role === 'buyer') {
				navigate('/buyers/dashboard')
			}
		}
	}, [user]);


	return (

		<>
			{ isLoading && <MainSpinner />}
			<div className="login__form">
				<form id="buyer-login" onSubmit={handleLogin}>
					<h3 className="form__heading">
						Login into your <span className="form__extra">Clubmerce Buyer</span> account
					</h3>
					<div className="form__item">
						<label className="form__item--label" htmlFor="email">
							Email Address
						</label>
						<input
							className="form__item--input"
							id="buyer-email"
							name="email"
							type="email"
							placeholder="example@gmail.com"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="form__item">
						<label className="form__item--label" htmlFor="password">
							Password
						</label>
						<div className="form--password">
							<input
								className="form__item--input"
								id="buyer-password"
								name="password"
								placeholder="••••••••••••"
								required
								minLength="8"
								value={password}
								type={showPass ? 'text' : 'password'}
								onChange={(e) => setPassword(e.target.value)}
							/>

							{ showPass ? <AiOutlineEye className="pass-icon" onClick={handleShowPass} /> : <AiOutlineEyeInvisible className="pass-icon" onClick={handleShowPass} /> }
						</div>
					</div>
					<button className="form__button" type="submit">
						Login
					</button>
					<div className="form__end">
						<p className="form__help">Need Help?</p>
						<span className="form__text">
							<Link className="form__text" to="/buyers/signup">
								SignUp
							</Link>
							{''}|{' '}
							<span className="form__extra forgot open__modal">Forgot Password</span>
						</span>
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

export default BuyersLogin;
