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
import './contact.scoped.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import TopNav from '../topnav/TopNav'
import contactUsImg from '../../assets/images/company/contactUsImg.jpg'
import { useParams } from 'react-router-dom'

function Contact(props) {
  // const _id = '631b7cf1a68686de53c791a3'
  const { id } = useParams()

  const [telephone, setTelephone] = useState('')
  const [address, setAdderss] = useState('')
  const [email, setEmail] = useState('')
  console.log(id)

  // useEffect(() => {
  //   getCompanyProfile()
  // }, [id])

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
      <TopNav />
      <div className="contactpage-row">
        <h2 className="contactus-header">Contact Us</h2>
        <div className="contact-container">
          <div className="contact-container3">
            <div className="contact-container2">
              {/* <img
                className="img-contactpage"
                src="
          https://cdn2.vectorstock.com/i/1000x1000/16/01/graphic-cartoon-character-contact-us-vector-34981601.jpg"
                alt=""
              /> */}
              <img src={contactUsImg}  className="img-contactpage" alt="contactus" />
            </div>
          </div>
          <div className="contact-container1">
            <div className="contactpage-content">
              <h4 className='contact-box-header'>Contact Our Recycling Company</h4> <br />
              <div className="contact-box3">
                <FontAwesomeIcon icon="fa-solid fa-phone" />
                <FontAwesomeIcon icon="fa-solid fa-phone" />
                <FontAwesomeIcon icon="fa-solid fa-phone" />
              </div>
              <div className="contact-box">
                <div className="contact-telephone">{props.telephone}</div>
                <div className="contact-address">{props.address}</div>
                <div className="contact-email"> {props.email}</div>
              </div>
              <div className="contact-box2">
                <div className="contact-imag2"> <img
                className="img-contactpage2"
                src="
                https://us.123rf.com/450wm/orla/orla1306/orla130600025/20489851-3d-people-man-person-with-button-contact-us-.jpg?ver=6"
                alt=""
              /></div>
                <div className="contact-address">Open Hour-{props.openhour}</div>
                <div className="contact-email"> Close Hour-{props.closehour}</div>
              </div>
              <div className="contact-social-media">
                <div className="socialmeadia-icon">
                <FontAwesomeIcon icon="fa-solid fa-phone" />

                </div>
                <div className="socialmeadia-icon">
                <FontAwesomeIcon icon="fa-brands fa-facebook" />

                </div>
    
                <div className="socialmeadia-icon">
                <FontAwesomeIcon icon="fa-solid fa-phone" />

                </div>
     
                
                <div className="socialmeadia-icon">
                <FontAwesomeIcon icon="fa-solid fa-phone" />

                </div>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
