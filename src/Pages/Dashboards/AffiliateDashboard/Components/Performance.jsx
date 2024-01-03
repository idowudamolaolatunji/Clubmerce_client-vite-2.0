import React, { useState } from 'react'
import DashboardUi from './DashboardUi'
import Loading from '../../../../Components/Loading'
import DataTable from 'react-data-table-component';
import TableMessage from '../../../../Components/TableMessage';
import { tableCustomStyle } from '../../../../utils/helper';


function Performance() {
    const [isLoading, setIsLoading] = useState(false)
    const [performance, setPerformance] = useState([]);
    const [message, setMessage] = useState('')

    const columns = [
        {
            name: 'Product',
            selector: row => {
                return (
                    <span className="table-row-content table-row-product">
                        <img className="table-product__image" src={`/asset/img/products/${row.product.image}`} alt={`${row.product.name} image`} />
                        <span>
                            <p className="table-product__name">{row.product.name}</p>
                            <p className="table-product__niche">{row.product.niche || row.product.category}</p>
                        </span>
                    </span>
                )
            }
        },
        {
            name: 'Commission',
            selector: row => `₦${numberFormatter(row.commission)}`
        },
        {
            name: 'Link purchase',
            selector: row => Number(Math.trunc(row.purchases))
        },
        {
            name: 'Link clicks',
            selector: row => Number(Math.trunc(row.clicks))
        },
        {
            name: 'Promotion link',
            selector: row => 1
        },
    ];

  return (
    <DashboardUi>
        <h3 className="dashboard__heading">Performance</h3>

        <div className="dashboard__table">
            <div className="table-title">
                <h4 className="table-heading">Affiliate Performance</h4>
            </div>

            <DataTable
                columns={columns}
                data={performance}
                customStyles={tableCustomStyle}
                pagination
                progressPending={isLoading}
                progressComponent={<Loading />}
                persistTableHead
                noDataComponent={<TableMessage message={message || 'There are no records to display, Check connection!'} />}
            />
           
        </div>
    </DashboardUi>
  )
}

export default Performance
