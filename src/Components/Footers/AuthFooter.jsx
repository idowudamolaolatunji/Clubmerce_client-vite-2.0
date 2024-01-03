import React from "react";
import { Link } from "react-router-dom";

function AuthFooter() {
	return (
		<footer className="footer__auth">
			<div className="auth__container">
				<ul className="auth__lists">
					<li className="auth__item">
						<p className="cp">&copy; Clubmerce 2023 </p>
					</li>
					<li className="auth__item">|</li>
					<li className="auth__item">
						<Link className="auth__link" to="/terms-of-use">
							Terms of Use
						</Link>
					</li>
					<li className="auth__item">|</li>
					<li className="auth__item">
						<Link className="auth__link" to="/our-policy">
							Our Policy
						</Link>
					</li>
				</ul>
				<p className="auth__text">
					Clubmerce is not a chartered bank or trust company, or depository institution.
					Clubmerce is not authorized to accept deposits or trust accounts and is not
					licensed or regulated by any state or federal banking authority.
				</p>
			</div>
		</footer>
	);
}

export default AuthFooter;
