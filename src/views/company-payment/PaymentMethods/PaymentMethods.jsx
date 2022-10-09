import DataTable from 'react-data-table-component'
import dumyRequestPayments from '../../../data/dumyData'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BinRequestServices from '../../../services/BinRequestServices'
import React, { useState, useEffect } from 'react'
import readMore from '../../../assets/images/table-icon/read-more.png'
import edit from '../../../assets/images/table-icon/table_edit _icon.png'
import removeRecord from '../../../assets/images/table-icon/remove_record.png'
// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr

const Export = ({ onExport }) => (
  <button className="btn btn-secondary " onClick={(e) => onExport(e.target.value)}>
    <i class="fas fa-plus-circle fa-lg me-2" style={{ color: '#ffffff' }}></i>
    Add Method
  </button>
)

const PaymentMethods = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState('')
  const [paymentIdS, setPaymentIds] = useState([])
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const actionsMemo = React.useMemo(
    () => <Export onExport={() => navigate(`/user/payment/add-payment-method`)} />,
    [],
  )

  const viewMore = (requestId) => {
    navigate(`/admin-company-payments/viewonepayment/${requestId}`)
  }
  const columns = [
    {
      name: 'CARD NO:',
      selector: (row) => row.cardNumber,
      sortable: true,
    },

    {
      name: 'TYPE',
      selector: (row) => row.methodType,
      sortable: true,
    },
    {
      name: 'DATE ADDED',
      selector: (row) => row.expirationDate,
      sortable: true,
    },
    {
      name: 'LAST USED',
      selector: (row) => row.expirationDate,
      sortable: true,
    },

    {
      name: 'TOTAL PAYMENT',
      selector: (row) => row.expirationDate,
      sortable: true,
    },
    {
      cell: (row) => <p>{row.activeStatus}</p>,
      name: 'STATUS',
      ignoreRowClick: true,
      allowOverflow: true,
      button: false,
    },
    {
      cell: (row) => (
        <div className="d-flex me-3">
          <button className="mx-auto btn" onClick={() => viewMore(row.requestId)}>
            <span className="material-icons">
              <img src={edit} alt="" />
            </span>
          </button>
          <button className="mx-auto btn" onClick={() => viewMore(row.requestId)}>
            <span className="material-icons">
              <img src={removeRecord} alt="" />
            </span>
          </button>
        </div>
      ),
      name: 'ACTION',
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ]
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/paymentmethod/`)
      .then(function (response) {
        console.log(response.data.data)
        setData(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
  }, [])
  useEffect(() => {
    const result = filteredData.filter((dataItem) => {
      if (search === '') {
        return dataItem
      } else if (dataItem.requestId.toLowerCase().includes(search.toLowerCase())) {
        return dataItem
      }
    })
    setData(result)
  }, [search])
  return (
    <>
      <h4 className="content-title mt-5">All Payment Methods</h4>
      <hr />
      <div className="main shadow-lg mb-5 rounded-3 mt-5">
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
            </div>
          }
          actions={actionsMemo}
        />
      </div>
    </>
  )
}
export default PaymentMethods
