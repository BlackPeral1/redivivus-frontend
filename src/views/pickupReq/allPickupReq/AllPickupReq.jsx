import React from 'react';

import './allPickReq.scoped.css';
export default function AllPickupReq(props) {

  return (
    <>
      <div className="row">
        <div className="card p-3 d-flex flex-row header">
          <a className='mx-3 active'>All</a>
          <a className='mx-3'>Pending</a>
          <a className='mx-3'>Accepted</a>
          <a className='mx-3'>Rejected</a>
          <a className='mx-3'>Completed</a>
        </div>
      </div>
      <div className="row pt-3">
        <div className="card p-4">
        </div>
      </div>
    </>
  )
}
