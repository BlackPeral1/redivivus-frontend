import React from 'react';

// import 'sweetalert2/src/sweetalert2.scss'
export default function AllPickReq(props) {

  return (
    <>
      <div className="row">
        <div className="card pt-3 d-flex flex-row ">
          <p className='mx-3' style={{ borderBottom: "3px solid black" }}>All</p>
          <p className='mx-3'>Pending</p>
          <p className='mx-3'>Accepted</p>
          <p className='mx-3'>Rejected</p>
          <p className='mx-3'>Completed</p>
        </div>
      </div>
      <div className="row pt-3">
        <div className="card p-4">
        </div>
      </div>
    </>
  )
}
