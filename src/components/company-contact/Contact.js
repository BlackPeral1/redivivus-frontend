import React, {  useState } from 'react'

import './contact.css'

function Contact(props) {



  const [address, setAdderss] = useState('')


  return (
    <div>
      {props.telephone}
      {props.address}
      {/* {props.data}
      <contactcompo
          data={name}
          
      /> */}

      <div className="company-contact-header">Sample Heading</div>
      <div className="company-contact-heading">Contact Us</div>

      <div className="contact-company-container">
        <img
          src="
          https://cdn2.vectorstock.com/i/1000x1000/16/01/graphic-cartoon-character-contact-us-vector-34981601.jpg"
          alt=""
        />
      </div>
      <div className="company-contact-card">
        <div className="comapny-contact-details">
          <div>Telephone</div>
        </div>
      </div>
    </div>
  )
}

export default Contact
