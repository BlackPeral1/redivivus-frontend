import React from "react";
import "./contactus.css";
import ContactUS from "./contactuspic.png";

export const ContactUsPage = () => {
  return (
    <div className="main vw-100 vh-100 ">
      <div className=" vw-100 h-20 pb-5  d-flex align-items-center justify-content-center ">
        <h1 className="contact-us-title">Contact Us</h1>
      </div>
      <div className="main vw-100 h-75 pt-5  d-flex justify-content-around">
        <div className="w-50 h-100  d-flex align-items-center justify-content-center">
          <img className="w-72.5 h-75" src={ContactUS} alt="contact_us" />
        </div>
        <div className="w-50 h-100 ">
          <div className="card w-80 h-100  mx-5 shadow-lg  mb-5 bg-white rounded-3 ">
            <div className="card-body px-5 vstack py-5 mx-5 needs-validation">
              <div className=" my-1 d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center">
                  <label className="form-label contact-us-labels">Name</label>
                </div>
                <div className=" ">
                  <input
                    type="text"
                    className="form-control contact-us-inputs bg-contact-us"
                    placeholder="ex:- chamath jaasekara"
                  />
                  <div class="valid-feedback">Looks good!</div>
                </div>
              </div>
              <div className="my-5 d-flex justify-content-between align-items-center">
                {" "}
                <div className="">
                  <label className="form-label contact-us-labels ">
                    Email address
                  </label>
                </div>
                <div className=" ">
                  <input
                    type="email"
                    className="form-control contact-us-inputs bg-contact-us"
                    placeholder="chamath@gmail.com"
                  />
                </div>
              </div>
              <div className=" my-3 d-flex justify-content-between align-items-center">
                {" "}
                <div className="">
                  <label className="form-label contact-us-labels">
                    Message
                  </label>
                </div>
                <div className="textarea-input">
                  <textarea rows={10} className="form-control bg-contact-us" />
                </div>
              </div>
              <div className="my-1 d-flex justify-content-between align-items-center">
                <div></div>
                <div>
                  {" "}
                  <button type="button" class="btn contact-us-btn">
                    Success
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
