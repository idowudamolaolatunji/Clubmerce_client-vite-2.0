import React from "react";

function EmailVerifyModal({ email }) {
	return (
		<div className="email__drop-down drop-down__shadow">
			<div className="email-verify__modal modal">
				<i className="fa-solid fa-close close__icon verify__close--icon"> </i>
				<div className="modal__container">
					<h3 className="extra__heading">Successful signup!</h3>
					<picture className="welcome">
						<source
							srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3fc/512.webp"
							type="image/webp"
						/>
						<img
							src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44d_1f3fc/512.gif"
							alt="👍"
							width={32}
							height={32}
						/>
					</picture>
					<p className="modal__text">
						A link has been sent! Please click the link in your email and verify your
						email.
						<br />
						<span className="user__email">{email}</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default EmailVerifyModal;
