import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import Moment from 'moment';
import { CusPickupReqModal } from '../../../components';
import './allPickReq.scoped.css';
export default function AllPickupReq(props) {
  const [pickupReq, setPickupReq] = useState([]);
  const [allPickupReq, setAllPickupReq] = useState([]);
  const [requestStatus, setRequestStatus] = useState("All");
  const [mapModal, setMapModal] = useState(false);

  const mapModalClose = () => setMapModal(false);
  const mapModalShow = () => setMapModal(true);
  useEffect(() => {
    axios.get('http://localhost:3001/api/pickupRequest').then((res) => {
      setPickupReq(res.data.data);
      setAllPickupReq(res.data.data);
    })
      .catch((error) => {         // handle error
        console.log(error);
      })
  }, []);

  useEffect(() => {
    const results = allPickupReq.filter((r) => {
      if (requestStatus == 'All') return true;
      if (r.requestStatus == requestStatus) return true;
      return false;
    });
    setPickupReq(results);
  }, [requestStatus]);

  return (
    <>
      <div className="row">
        <div className="card p-3 d-flex flex-row header">
          <a className={'mx-3 ' + ((requestStatus === 'All') ? 'active' : '')} onClick={() => setRequestStatus("All")}>All</a>
          <a className={'mx-3 ' + ((requestStatus === 'Pending') ? 'active' : '')} onClick={() => setRequestStatus("Pending")}>Pending</a>
          <a className={'mx-3 ' + ((requestStatus === 'Accepted') ? 'active' : '')} onClick={() => setRequestStatus("Accepted")}>Accepted</a>
          <a className={'mx-3 ' + ((requestStatus === 'Rejected') ? 'active' : '')} onClick={() => setRequestStatus("Rejected")}>Rejected</a>
          <a className={'mx-3 ' + ((requestStatus === 'Completed') ? 'active' : '')} onClick={() => setRequestStatus("Completed")}>Completed</a>
        </div>
      </div>
      <div className="row pt-3">
        {
          pickupReq.map((i) => {
            return (
              <div key={i._id} className="card p-4 mb-3">
                <div className="d-flex justify-content-between card-heder">
                  <button className={'status-btn ' + i.requestStatus}>{i.requestStatus}</button>
                  <div className='header-r'>
                    <p>Request No: <strong>{i.requestNo}</strong></p>
                    <p>Date: {Moment(i.createdAt).format('DD-MM-YYYY hh:mm:ss')}</p>
                  </div>
                </div>
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <h5>ABC Inc</h5>
                    <p>Size : {i.size}</p>
                    <p><i className="fas fa-thumbtack"></i>  Loaction : {i.location.formatted_address}</p>
                  </div>
                  <div className='d-flex align-items-end'>
                    <button className='btn btn-primary' onClick={mapModalShow}> Show Details</button>
                  </div>
                </div>
              </div>
            );
          })
        }

      </div>
      <CusPickupReqModal show={mapModal}
        mapModalShow={mapModalShow}
        mapModalClose={mapModalClose} />
    </>
  )
}
