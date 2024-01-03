import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import { IoEllipsisVerticalSharp } from "react-icons/io5";
import Loading from '../../../../Components/Loading';
import { numberFormatter } from "../../../../utils/helper";
import { useAuthContext } from "../../../../Context/AuthContext";
import TableMessage from "../../../../Components/TableMessage";
import { tableCustomStyle }  from '../../../../utils/helper'

function DashboardTable() {
    const [isLoading, setIsLoading] = useState(false);
    const [commission, setCommissions] = useState([]);
    const [message, setMessage] = useState('');

    const { token } = useAuthContext();

    const columns = [
        {
            name: 'Product',
            selector: row => {
                return (
                    <span className="table-row-content table-row-product">
                        <img className="table-product__image" src="/asset/img/products" alt="" />
                        <span>
                            <p className="table-product__name">{row.product.name}</p>
                            <p className="table-product__niche">{row.product.category}</p>
                        </span>
                    </span>

                )
            }
        },
        {
            name: 'Commission amount',
            selector: row => `₦${numberFormatter(row.commissionAmount)}`
        },
        {
            name: 'Status',
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
    ]

    useEffect(() => {
        async function fetchCommissions() {
            try {
                console.log('I was logged!')
                setIsLoading(true);

                const res = await fetch('http://localhost:3000/api/commissions/my-commissions', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(res);

                const data = await res.json();
                console.log(data);

            } catch(err) {

            } finally {
                setIsLoading(false)
            }
        }
        fetchCommissions();
    }, []);

	return (
		<div class="dashboard__table">
            <div class="table-title">
                <h4 class="table-heading">Recent commission</h4>
            </div>

            
            <DataTable
                columns={columns}
                data={commission}
                pagination
                progressPending={isLoading}
                progressComponent={<Loading />}
                customStyles={tableCustomStyle}
                persistTableHead
                noDataComponent={<TableMessage message={message || 'There are no records to display, Check connection!'} />}
            />
		</div>
	);
}

export default DashboardTable;
