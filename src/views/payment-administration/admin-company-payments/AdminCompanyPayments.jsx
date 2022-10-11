import DataTable from 'react-data-table-component'
import dumyRequestPayments from '../../../data/dumyData'
import { useNavigate } from 'react-router-dom'
import BinRequestServices from '../../../services/BinRequestServices'
import React, { useState, useEffect } from 'react'
import readMore from '../../../assets/images/table-icon/read-more.png'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
const Export = ({ onExport }) => (
  <button className="btn btn-secondary " onClick={onExport}>
    <i class="fas fa-download fa-lg me-2" style={{ color: '#ffffff' }}></i>
    Generate Report
  </button>
)
const customStyles = {
  table: {
    style: {
      height: '650px', // override the row height
    },
  },
  rows: {
    style: {
      height: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '16px', // override the cell padding for head cells
      paddingRight: '16px',
    },
  },
  cells: {
    style: {
      paddingLeft: '16px', // override the cell padding for data cells
      paddingRight: '16px',
    },
  },
}
const AdminCompanyPayments = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const actionsMemo = React.useMemo(() => <Export onExport={() => generatePdf()} />, [])

  useEffect(() => {
    BinRequestServices.getAllBinreuests()
      .then((resp) => {
        const actualData = resp.data.data.filter(
          (oneRequest) =>
            oneRequest['requestReceivedBy'] != null &&
            oneRequest['requestedBy'] != null &&
            oneRequest['payment'],
        )
        setData(actualData)
        setFilteredData(actualData)
        console.log(actualData)
      })
      .catch((e) => {
        console.log(e.meesage)
      })
  }, [])
  const viewMore = (requestId) => {
    navigate(`/admin/admin-company-payments/viewonepayment/${requestId}`)
  }
  const columns = [
    {
      name: 'PAYMENT ID',
      selector: (row) => row.payment.paymentId,
      sortable: true,
    },
    {
      name: 'COMPANY NAME',
      selector: (row) => row.requestReceivedBy.name,
      sortable: true,
    },
    {
      name: 'REQUEST ID',
      selector: (row) => row.requestNo,
      sortable: true,
    },
    {
      name: 'PAID DATE',
      selector: (row) => row.payment.paidDate.split('T')[0],
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
        <button className="mx-auto btn" onClick={() => viewMore(row._id)}>
          <span className="material-icons">
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

  useEffect(() => {
    const result = filteredData.filter((dataItem) => {
      if (search === '') {
        return dataItem
      } else if (dataItem.payment.paymentId.toLowerCase().includes(search.toLowerCase())) {
        return dataItem
      }
    })
    setData(result)
  }, [search])
  const generatePdf = () => {
    console.log('87787')
    const document = new jsPDF()
    const tableColumn = [
      'PAYMENT ID',
      'COMPANY NAME',
      'REQUEST ID',
      'PAID DATE',
      'COMPANY PAID',
      "CUSTOMER'S CUT",
      'PROFIT',
    ]
    const tableRows = []

    data.map((item) => {
    
      const value = [
        item.payment.paymentId,
        item.requestReceivedBy.name,
        item.requestNo,
        item.payment.paidDate.split('T')[0],
        item.payment.companyPaid,
        item.payment.customerEarned,
        item.payment.profit,
      ]
      console.log(value)
      tableRows.push(value)
    })

    document.autoTable(tableColumn, tableRows, { startY: 20 })

    const date = Date().split(' ')
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4]

    document.text(`Customer Payment Report`, 14, 15)
    document.save(`customer_payment_${dateStr}.pdf`)
  }
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
        customStyles={customStyles}
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
  )
}

export default AdminCompanyPayments
