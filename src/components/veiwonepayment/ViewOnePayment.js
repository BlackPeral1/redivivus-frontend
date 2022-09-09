import React from 'react'
import { useParams, Link } from 'react-router-dom'
import logo from '../../assets/images/logo/logo_w88_h95.png'
import './viewonepayment.css'
const ViewOnePayment = () => {
  const params = useParams()
  return (
    <div class="main bg-white w-100 view-payment shadow-lg mb-5 rounded-3">
      <div className="vstack gap-3">
        <div className="main w-80 mx-5 mt-5">
          <div className="">
            <h3>Customer Payments - View Payment of Request {params.id}</h3>
          </div>

          <hr className="" />
        </div>
        <div className="main vstack gap-3 rounded-3 border shadow-sm p-3 mb-5 bg-white rounded mx-5 ">
          {' '}
          <div className="main w-80 mx-5 ">
            <div className="navigate-payments d-flex justify-content-between mb-4">
              <Link to="/admin-customer-payments">{`<  `} Customer Payments </Link>
              <div>
                {' '}
                <h6>{params.id}</h6>
              </div>
            </div>
            <div className="d-flex justify-content-between middle-font-styles">
              <div className="w-25 h-25   vstack">
                <h6>FROM :</h6>
                <p>Kunu kade</p>
                <small>177/9, Gonahena</small>
                <small>177/9, Gonahena</small>
                <small>177/9, Gonahena</small>
                <small>177/9, Gonahena</small>
              </div>
              <div className="w-25 h-25 ms-5 vstack">
                <h6>TO :</h6>
                <p>Kunu kade</p>
                <small>177/9, Gonahena</small>
                <small>177/9, Gonahena</small>
                <small>177/9, Gonahena</small>
                <small>177/9, Gonahena</small>
              </div>{' '}
              <div className="w-25 h-25 ms-5 vstack">
                <h6>INFO :</h6>
                <p>Kunu kade</p>
                <small>177/9, Gonahena</small>
                <small>177/9, Gonahena</small>
              </div>
              <div className="w-25 h-25  ms-5  ">
                <h6>DATE :</h6>
                <div className="d-flex justify-content-end">
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>

            <hr className="" />
          </div>
          <div className="main w-80 mx-5 my-4 v-stack gap-3  shadow-lg mb-5 rounded-3 border border-secondary pill-containers">
            <div className="mt-3 ms-5 my-4">
              <h4>Waste Types</h4>
            </div>
            <div className="main d-flex mx-5 overflow-hidden">
              <span class="badge rounded-pill bg-light bg-light text-dark bg-light text-dark  shadow-lg  mb-5 rounded-3 border ">
                Primary
              </span>
              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark  shadow-lg  mb-5 rounded-3 border ">
                Primary
              </span>
              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border ">
                Primary
              </span>
              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border">
                Primary
              </span>
              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border ">
                Primary
              </span>

              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark  shadow-lg  mb-5 rounded-3 border ">
                Primary
              </span>
              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border ">
                Primary
              </span>
              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border">
                Primary
              </span>
              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border ">
                Primary
              </span>

              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark  shadow-lg  mb-5 rounded-3 border ">
                Primary
              </span>
              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border ">
                Primary
              </span>
              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border">
                Primary
              </span>
              <span class="badge rounded-pill bg-light text-dark ms-5 bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border ">
                Primary
              </span>
              <span class="badge rounded-pill bg-light text-dark ms-5 shadow-lg ">Primary</span>
            </div>

            <div className="d-flex my-5 justify-content-between">
              <div className="v-stack">
                <h5 className="ms-5">Collected Bin Location</h5>
                <span class="badge rounded-pill  bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border w-75 ">
                  Primary
                </span>
              </div>
              <div className="v-stack">
                <h5 className="ms-5">Collected By</h5>
                <span class="badge rounded-pill  bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border w-75 ">
                  Primary
                </span>
              </div>
              <div className="v-stack">
                <h5 className="ms-5">Confirmed Date</h5>
                <span class="badge rounded-pill bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border w-75  ">
                  2022-10-22
                </span>
              </div>

              <div className="v-stack me-5">
                <h5 className="ms-5">Confirmed Time</h5>
                <span class="badge rounded-pill bg-light text-dark ms-5 shadow-lg  mb-5 rounded-3 border w-75  ">
                  Primary
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewOnePayment
