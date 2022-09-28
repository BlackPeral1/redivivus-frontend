import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './contact.css'

function Contact(props) {
  const _id = '631085b05e9006200d8f7c79'

  const [telephone, setTelephone] = useState('')
  const [address, setAdderss] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>
      {props.telephone}
      {address}
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
