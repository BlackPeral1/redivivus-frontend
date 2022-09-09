import './admin-customer-payments.css'
import DataTable from 'react-data-table-component'
import dumyRequestPayments from '../../../data/dumyData'
import { useNavigate } from 'react-router-dom'

import React, { useState } from 'react'
import readMore from '../../../assets/images/table-icon/read-more.png'
// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function convertArrayOfObjectsToCSV(array) {
  let result

  const columnDelimiter = ','
  const lineDelimiter = '\n'
  const keys = Object.keys(dumyRequestPayments[0])

  result = ''
  result += keys.join(columnDelimiter)
  result += lineDelimiter

  array.forEach((item) => {
    let ctr = 0
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter

      result += item[key]

      ctr++
    })
    result += lineDelimiter
  })

  return result
}
const Export = ({ onExport }) => (
  <button className="btn btn-secondary " onClick={(e) => onExport(e.target.value)}>
    <i class="fa-light fa-file-arrow-down"></i>
    Generate Report
  </button>
)
// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr
function downloadCSV(array) {
  const link = document.createElement('a')
  let csv = convertArrayOfObjectsToCSV(array)
  if (csv == null) return

  const filename = 'export.csv'

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`
  }

  link.setAttribute('href', encodeURI(csv))
  link.setAttribute('download', filename)
  link.click()
}
const AdminCompanyPayments = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [data, setData] = useState([...dumyRequestPayments])
  const actionsMemo = React.useMemo(() => <Export onExport={() => downloadCSV(data)} />, [])

  const viewMore = (requestId) => {
    navigate(`/admin-customer-payments/viewonepayment/${requestId}`)
  }
  const columns = [
    {
      name: 'PAYMENT ID',
      selector: (row) => row.payment.paymentId,
      sortable: true,
    },
    {
      name: 'CUSTOMER NAME',
      selector: (row) => row.requestedBy.customerName,
      sortable: true,
    },
    {
      name: 'REQUEST ID',
      selector: (row) => row.requestId,
      sortable: true,
    },
    {
      name: 'RECEIVED DATE',
      selector: (row) => row.payment.receivedDate,
      sortable: true,
    },
    {
      name: 'COMPANY PAID',
      selector: (row) => row.payment.companyPaid,
      sortable: true,
    },

    {
      name: "CUSTOMER'S CUT",
      selector: (row) => row.payment.customerEarned,
      sortable: true,
    },

    {
      name: 'PROFIT',
      selector: (row) => row.payment.profit,
      sortable: true,
    },
    {
      cell: (row) => (
        <button
          className="mx-auto btn"
           onClick={()=>viewMore(row.requestId)}
        >
          <span class="material-icons">
            <img src={readMore} alt="" />
          </span>
        </button>
      ),
      name: 'ACTION',
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ]
  return (
    <div className="main shadow-lg mb-5 rounded-3">
      <DataTable
        columns={columns}
        data={data}
        pagination
        fixedHeaderScrollHeight="450px"
        selecttableRowsHighlighted
        highlightOnHover
        // onRowClicked={onRowClicked}
        data-tag="allowRowEvents"
        subHeader
        subHeaderComponent={
          <div className="w-100">
            {' '}
            <input
              type="text"
              className="w-25 form-control font-color float-center mt-0.5 me-2"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button className="btn font-color topbar-hover tcontainerbtn" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        }
        actions={actionsMemo}
      />
    </div>
  )
}

export default AdminCompanyPayments