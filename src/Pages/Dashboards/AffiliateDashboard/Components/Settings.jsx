import React, { useState } from "react";
import DashboardUi from "./DashboardUi";
import { useAuthContext } from "../../../../Context/AuthContext";

function Settings() {
    const [bank, setBank] = useState('');
    const [acctNumber, setAcctNumber] = useState('');
    const [holderName, setHolderName] = useState('');

    const { user } = useAuthContext();
	return (
		<DashboardUi>
			<h3 className="dashboard__heading">Your Account Settings</h3>
			<form className="form__data form-payment-data">
				<h3 className="dashboard__heading">Add a payment account</h3>
				<div className="form--item">
					<label className="form--label" htmlFor="paymentBankName">
						Payment Bank Name
					</label>
					<select className="form--input" id="paymentBankName" value={`${user.bankName ? user.bankName : bank}`} onChange={(e) => setBank(e.target.value)}>
					{/* <select className="form--nput" id="paymentBankName" value={`${bank}`} onChange={(e) => setBank(e.target.value)}> */}
                        {(user.bankName || bank) && <option>Select a bank</option>}
						<option value="Access Bank">Access Bank</option>
						<option value="Citi Bank">Citi Bank</option>
						<option value="Coronation Merchant Bank">Coronation Merchant Bank</option>
						<option value="EcoBank">EcoBank</option>
						<option value="Fidelity Bank">Fidelity Bank</option>
						<option value="First Bank of Nigeria">First Bank of Nigeria</option>
						<option value="First City Monument Bank (FCMB)">First City Monument Bank (FCMB)</option>
						<option value="FSDH Merchant Bank">FSDH Merchant Bank</option>
						<option value="Globus Bank">Globus Bank</option>
						<option value="Greenwich Merchant Bank">Greenwich Merchant Bank</option>
						<option value="Guarantee Trust Bank (GTB)">Guarantee Trust Bank (GTB)</option>
						<option value="Heritage Bank">Heritage Bank</option>
						<option value="Jaiz Bank">Jaiz Bank</option>
						<option value="Keystone Bank">Keystone Bank</option>
						<option value="Kuda MFB">Kuda MFB</option>
						<option value="Lotus Bank">Lotus Bank</option>
						<option value="Nova Merchant Bank">Nova Merchant Bank </option>
						<option value="Opay">OPAY</option>
						<option value="Polaris Bank">Polaris Bank</option>
						<option value="Providus Bank">Providus Bank</option>
						<option value="Rand Merchant Bank">Rand Merchant Bank </option>
						<option value="Stanbic IBTC Bank">Stanbic IBTC Bank</option>
						<option value="Standard Chartered Bank">Standard Chartered Bank</option>
						<option value="Sterling Bank">Sterling Bank </option>
						<option value="Suntrust Bank">Suntrust Bank </option>
						<option value="Taj Bank">Taj Bank</option>
						<option value="Titan Trust Bank">Titan Trust Bank</option>
						<option value="Union Bank Plc">Union Bank Plc</option>
						<option value="United Bank for Africa (UBA)">United Bank for Africa (UBA)</option>
						<option value="Unity Bank">Unity Bank</option>
						<option value="Wema Bank">Wema Bank</option>
						<option value="Zenith Bank">Zenith Bank</option>
					</select>
				</div>
				<div className="form--item">
					<label className="form--label" htmlFor="paymentAcctNum">
						Payment Account Number
					</label>
					<input
						className="form--input"
						id="paymentAcctNum"
						type="number"
						required="required"
						placeholder="Bank Number"
						minLength={10}
						maxLength={10}
                        value={`${user.bankAccountNumber || acctNumber}`}
                        onChange={e => setAcctNumber(e.target.value)}
					/>
				</div>
				<div className="form--item">
					<label className="form--label" htmlFor="holdersName">
						Holder's Name
					</label>
					<input
						className="form--input"
						id="holdersName"
						type="text"
						name="holdersName"
						placeholder="Name As On Bank Document"
						required="required"
                        value={`${user.bankHolderName || holderName}`}
                        onChange={e => setHolderName(e.target.value)}
					/>
				</div>
				<div className="form--item right">
					<button className="btn form-btn btn--save-bank">Add payment account</button>
				</div>
			</form>
			<form className="form__data form-password-data">
				<h3 className="dashboard__heading">Update Account Password</h3>
				<div className="form--item">
					<label className="form--label" htmlFor="password-current">
						Current Password
					</label>
					<input
						className="form--input signup__password"
						id="password-current"
						name="password-current"
						type="password"
						placeholder="••••••••••••"
						required="required"
						minLength={8}
					/>
				</div>
				<div className="form--item">
					<label className="form--label" htmlFor="password">
						New Password
					</label>
					<input
						className="form--input signup__password"
						id="password"
						name="password"
						type="password"
						placeholder="••••••••••••"
						required="required"
						minLength={8}
					/>
				</div>
				<div className="form--item">
					<label className="form--label" htmlFor="password-confirm">
						Confirm New Password
					</label>
					<input
						className="form--input signup__passwordconfirm"
						id="password-confirm"
						name="password-confirm"
						type="password"
						placeholder="••••••••••••"
						required="required"
						minLength={8}
					/>
				</div>
				<div className="form--item right">
					<button className="btn form-btn btn--save-password">Save password</button>
				</div>
			</form>
			<form className="delete-data">
				<h4>Delete My Account </h4>
				<span>
					Every info about this account, transactions, affiliate links, sold product
					histories, personal details and other sensitive informations would be removed as
					you click <strong style={{ color: "#f15a29" }}>Delete My Account!</strong>
				</span>
				<button className="btn delete-account" type="submit">
					Delete My Account
				</button>
			</form>
		</DashboardUi>
	);
}

export default Settings;
