import './admin-company-payments.css'
import DataTable from 'react-data-table-component'
import React, { useState } from 'react'

const AdminCustomerPayments = () => {
  const [search, setSearch] = useState('')

  const columns = [
    {
      Header: 'Image',
      headerStyle: { textAlign: 'center' },
      cell: (row) => (
        <img
          src={'../img/spec_img/' + row.Images[0]}
          width={80}
          className="mx-auto mt-2 mb-2"
          alt=""
        />
      ),
    },
    {
      name: 'Payment',
      selector: (row) => row.Title,
      sortable: true,
    },
    {
      name: 'Brand',
      selector: (row) => row.Brand,
      sortable: true,
    },
    {
      name: 'Quantity',
      selector: (row) => row.Quantity,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row) => row.Price,
      sortable: true,
    },
    {
      cell: (row) => (
        <button
          className="mx-auto btn btn-danger"
          // onClick={() => onRowDelete(row._id, row.Images)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ]
  return (
    <div className="main shadow-lg mb-5 rounded-3">
      <DataTable
        columns={columns}
        // data={filteredData}
        pagination
        fixedHeaderScrollHeight="450px"
        selecttableRowsHighlighted
        highlightOnHover
        // onRowClicked={onRowClicked}
        data-tag="allowRowEvents"
        subHeader
        subHeaderComponent={
          <input
            type="text"
            className="w-25 form-control font-color"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </div>
  )
}

export default AdminCustomerPayments
