import React, { useState } from "react";
import DashboardUi from "./DashboardUi";
import { numberFormatter, tableCustomStyle } from "../../../../utils/helper";
import { useAuthContext } from "../../../../Context/AuthContext";
import Loading from "../../../../Components/Loading";
import DataTable from "react-data-table-component";
import TableMessage from "../../../../Components/TableMessage";



function Transactions() {
    const [isLoading, setIsLoading] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [message, setMessage] = useState('');

    const { user } = useAuthContext();

    const columns = [
        {
            name: 'Transaction ID',
            selector: row => row.transactionId
        },
        {
            name: 'Type',
            selector: row => row.purpose
        },
        {
            name: 'Amount',
            selector: row => `₦${numberFormatter(row.amount)}`
        },
        {
            nae: 'Status',
            selector: row => {
                return (
                    <span className={`status status--${row.status}`}>
                        <p>{row.status}</p>
                    </span>
                )
            }
        },
        {
            name: 'Date',
            selector: row => row.paidAt
        }
    ];

	return (
		<DashboardUi>
			<h3 className="dashboard__heading">
				Transactions and Wallet
            </h3>
            <div className="dashboard__transaction">
                <div className="wallet__card">
                    <h3 className="dashboard__heading">My wallet </h3>
                    <p className="wallet__type">Available Balance</p>
                    <p className="wallet__amount">
                        ₦<span className="amount">{numberFormatter(user.availableAmountWallet)}</span>
                    </p>
                    <span className="wallet__info">
                        Total Accessable Amount (limit: ₦15,000)
                    </span>
                </div>
                <div className="withdrawal__card">
                    <h3 className="dashboard__heading">Withdrawal Form</h3>
                    <form className="withdraw__form" />
                    <div className="form__body-ungeneric">
                        <input
                            className="form__input-ungeneric"
                            id="bank__details"
                            type="radio"
                        />
                        <label className="form__label-ungeneric" htmlFor="bank__details">
                            <p className="bank__holder-name">{user.bankHolderName}</p>
                            <p className="bank__name">{user.bankName}</p>
                            <p className="bank__number">{user.bankAccount}</p>
                        </label>
                    </div>
                    <div className="form__grid-generic">
                        <div className="form__body-generic">
                            <label className="form__label" htmlFor="amount">
                                Amount
                            </label>
                            <input
                                className="form__input"
                                id="amount"
                                type="number"
                                name="amount"
                                placeholder="Withdrawal amount"
                            />
                        </div>
                        <div className="form__body-generic">
                            <label className="form__label" htmlFor="enter__password">
                                Confirm your password
                            </label>
                            <input
                                className="form__input"
                                id="enter__password"
                                type="password"
                                name="enter__password"
                                placeholder="••••••••••••"
                            />
                        </div>
                        <button className="btn form__submit form__submit-generic" type="submit">
                            Withdraw
                        </button>
                    </div>
                </div>
            </div>
			
            <div class="dashboard__table">
                <div class="table-title">
                    <h4 class="table-heading">Recent transaction</h4>
                </div>

                
                <DataTable
                    columns={columns}
                    data={transactions}
                    pagination
                    customStyles={tableCustomStyle}
                    progressPending={isLoading}
                    progressComponent={<Loading />}
                    persistTableHead
                    noDataComponent={<TableMessage message={message || 'There are no records to display, Check connection!'} />}
                />
            </div>
		</DashboardUi>
	);
}

export default Transactions;
