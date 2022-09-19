import React, { useState } from 'react'
import './contactus.css'
import ContactUS from './contactuspic.png'
import validator from 'validator'
import BinRequestService from '../../services/BinRequestServices'
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify'
const ContactUsPage = () => {
  const [emailError, setEmailError] = useState('')

  const [messagError, setMessageError] = useState('')
  const [nameError, setNameError] = useState('')

  const [isValidMail, setIsValidMail] = useState(false)
  const [isValidName, setIsValidName] = useState(false)
  const [isValidMessage, setIsValidMessage] = useState(false)

  const [query, setQuery] = useState({ name: '', email: '', message: '' })

  const validateContactDetails = (name, input) => {
    setIsValidMail(true)
    setIsValidMessage(true)
    setIsValidName(true)

    if (name === 'email') {
      if (validator.isEmail(input)) {
        setIsValidMail(true)
        console.log('Checking email')
        setEmailError('Valid email')
      } else if (input.length === 0) {
        setIsValidMail(false)
        setEmailError('')
      } else {
        setEmailError('Invalid email, please use email as ex :- abc@gmail.com')
        setIsValidMail(false)
      }
    } else if (name === 'message') {
      if (input.length === 0) {
        setMessageError('')
        setIsValidMessage(false)
      } else if (input.length > 90) {
        setMessageError('Plase keep it simple and short , try a different message. ')
        setIsValidMessage(false)
      } else {
        setMessageError('Valid message')
        setIsValidMessage(true)
      }
    } else if (name === 'name') {
      if (input.length === 0) {
        setNameError('')
        setIsValidName(false)
      } else if (input.length > 40) {
        setNameError('Plase keep it simple and short , try a different name ')
        setIsValidName(false)
      } else {
        setNameError('Valid Name')
        setIsValidName(true)
      }
    }
  }
  const handleContactDetails = (e) => {
    const name = e.target.name
    const value = e.target.value
    validateContactDetails(name, value)

    setQuery((query) => {
      return { ...query, [name]: value }
    })
  }
  const sendQuery = (e) => {
    e.preventDefault()
    if (isValidMail && isValidMessage && isValidName) {
      console.log('sent')
      BinRequestService.setQueryDetails(query)
        .then((res) => {
          toast.success('Query sent successfully.', {position:toast.POSITION.TOP_RIGHT})
          setEmailError('')
          setMessageError('')
           setNameError('')
          setQuery((query) => {
            return { name: '', email: '', message: '' }
          })
        })
        .catch((err) => {
          toast.success('Query sent unsuccessful.')
        })
    }
  }
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
                    name="name"
                    className="form-control contact-us-inputs bg-contact-us"
                    placeholder="ex:- chamath jaasekara"
                    value={query.name}
                    onChange={handleContactDetails}
                  />
                  <small className={`mt-5 fw-bold ${isValidName ? 'text-success' : 'text-danger'}`}>
                    {nameError}
                  </small>
                </div>
              </div>
              <div className="my-3 d-flex justify-content-between align-items-center">
                {' '}
                <div className="">
                  <label className="form-label contact-us-labels ">Email address</label>
                </div>
                <div className=" ">
                  <input
                    type="email"
                    name="email"
                    onChange={handleContactDetails}
                    value={query.email}
                    className="form-control contact-us-inputs bg-contact-us"
                    placeholder="ex:- chamath@gmail.com"
                  />
                  <small className={`mt-5 fw-bold ${isValidMail ? 'text-success' : 'text-danger'}`}>
                    {emailError}
                  </small>
                </div>
              </div>
              <div className=" my-2 d-flex justify-content-between align-items-center">
                {' '}
                <div className="">
                  <label className="form-label contact-us-labels">Message</label>
                </div>
                <div className="textarea-input">
                  <textarea
                    rows={10}
                    className="form-control bg-contact-us"
                    name="message"
                    value={query.message}
                    onChange={handleContactDetails}
                    placeholder="ex:-  I Improving something  might help with using this application or I need to get contact with this site admin."
                  />
                  <small
                    className={`mt-5 fw-bold ${isValidMessage ? 'text-success' : 'text-danger'}`}
                  >
                    {messagError}
                  </small>
                </div>
              </div>
              <div className="my-3 d-flex justify-content-end align-items-center">
                <div>
                  {' '}
                  <button
                    type="button"
                    className="btn contact-us-btn"
                    onClick={(e) => sendQuery(e)}
                  >
                    Success
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactUsPage
