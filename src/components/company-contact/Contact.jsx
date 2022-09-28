// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import './contact.css'

// function Contact(props) {
//   const _id = '631085b05e9006200d8f7c79'

//   const [telephone, setTelephone] = useState('')
//   const [address, setAdderss] = useState('')
//   const [email, setEmail] = useState('')

//   return (
//     <div>
//       {props.telephone}
//       {address}
//       {/* {props.data}
//       <contactcompo
//           data={name}
          
//       /> */}

//       <div className="company-contact-header">Sample Heading</div>
//       <div className="company-contact-heading">Contact Us</div>

//       <div className="contact-company-container">
//         <img
//           src="
//           https://cdn2.vectorstock.com/i/1000x1000/16/01/graphic-cartoon-character-contact-us-vector-34981601.jpg"
//           alt=""
//         />
//       </div>
//       <div className="company-contact-card">
//         <div className="comapny-contact-details">
//           <div>Telephone</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import TopNav from '../topnav/TopNav'

function Contact(props) {
  const _id = '631085b05e9006200d8f7c79'

  const [telephone, setTelephone] = useState('')
  const [address, setAdderss] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>
      {/* {address} */}
      {/* {props.data}
      <contactcompo
          data={name}
          
      /> */}

      {/* <div className="company-contact-header">Sample Heading</div> */}
      {/* <div className="company-contact-heading">Contact Us</div>

      <div className="contact-company-container">
        <img
          src="
          https://cdn2.vectorstock.com/i/1000x1000/16/01/graphic-cartoon-character-contact-us-vector-34981601.jpg"
          alt=""
        />
      </div>
      <div className="company-contact-card">
        <div className="comapny-contact-details">
          <div className="contact-items-comapany">{props.telephone}</div>
          <div className="contact-items-comapany"> {props.address}</div>
          <div className="contact-items-comapany"> {props.email}</div>

          <img
            className="contact-company-contact-imag"
            src="
          https://media.istockphoto.com/photos/-picture-id1311934969?b=1&k=20&m=1311934969&s=170667a&w=0&h=UQ3F8CE5zam5mT5swIliZ9nO7dhX4ZzsALMufFdv6Ys="
            alt=""
          />
         <FontAwesomeIcon icon="fa-solid fa-circle-check" />
       
          <FontAwesomeIcon icon="fa-solid fa-phone" />
          <FontAwesomeIcon icon="fa-solid fa-phone" />

          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
          <FontAwesomeIcon icon="fa-solid fa-message" />
          <FontAwesomeIcon icon="fa-solid fa-message" />
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
           

          <div>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </div>
        </div>
      </div> */}
       <TopNav/>
       <div className='contactpage-row'>
         <h2 className='contactus-header'>Contact Us</h2>
          <div className='contact-container'>
          <div className='contact-container1'>
                gfgfgfgfffffffx
          </div>
          <div className='about-container'>
            <div className="about-container1">
            <img className="img-aboutpage"
          src="
          https://previews.123rf.com/images/chudtsankov/chudtsankov1607/chudtsankov160700278/61547748-happy-green-recycle-bin-cartoon-mascot-character-waving-for-greeting-illustration-isolated-on-white-.jpg"
          alt=""
        />
            </div>
         
          </div>
        </div>
        </div>
    </div>
  )
}

export default Contact

