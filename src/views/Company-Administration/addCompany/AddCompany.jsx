import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './addcompany.css'

export default function AddCompany() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [telephone, setTelephone] = useState('')
  const [customers, setCustomers] = useState('')
  const [centers, setCenters] = useState('')
  const [logo, setLogo] = useState('')
  const [openhour, setOpenhour] = useState('')
  const [closehour, setClosehour] = useState('')
  const [opendays, setOpendays] = useState('')
  const [slogan, setSlogan] = useState('')
  const [about, setAbout] = useState('')
  const [nameErr, setnameErr] = useState({})
  const [telephoneErr, settelephoneErr] = useState({})
  const [emailErr, setemailErr] = useState({})
  const [isShow, setIsShow] = useState(false)

  function createData(e) {
    e.preventDefault()
       
    const isValid = formValidation()
    if (isValid) {
      //send this data to your back
      setName('')
      setTelephone('')
      setEmail('')
    }



    const company = {
      name,
      email,
      address,
      telephone,
      customers,
      centers,
      logo,
      openhour,
      closehour,
      opendays,
      slogan,
      about,
    }

    console.log(company)

    axios
      .post('http://localhost:3001/api/company/addcompany', company)
      .then(() => {
        console.log('CREATE PROCEED!')

        onReset()
        alert('Successfully Created!')
      })
      .catch((err) => {
        alert(err)
      })
  }

  const formValidation = () => {
    const nameErr = {}

    let isValid = true

    if (name.trim().length < 3) {
      nameErr.nameShort = 'Company Name is too short'
      isValid = false
    }

    if (name.trim().length > 10) {
      nameErr.nameLong = 'Company Name is too long'
      isValid = false
    }

    if (telephone.trim().length == 10) {
      telephoneErr.telephoneLength = 'Must have 10 numbers for field'
      isValid = false
    }

    // if (!email.include('@')) {
    //   emailErr.emailInvalid = 'Email must have @ sign '
    //   isValid = false
    // }

    setnameErr(nameErr)
    settelephoneErr(telephoneErr)
    setemailErr(emailErr)

    return isValid
  }

  function onReset() {
    console.log('RESET PROCEED!')
    setName('')
    setEmail('')
    setAddress('')
    setTelephone('-')
    setCustomers('')
    setCenters('')
    setLogo('')
    setOpenhour('')
    setClosehour('')
    setOpendays('')
    setSlogan('')
    setAbout('')
  }

  return (
    <div className="row">
      <div className="card">
        <h2>ADD COMPANY</h2>
        <div className="container3">
          <div className="container1">
            <Form onSubmit={createData} onReset={onReset}>
              {/* <div className="container2"> */}
              <div hidden={isShow}>
                <div className="company-registartion-container-part">
                  <Form.Group as={Row} controlId="name" className="companylabel">
                    <Form.Label column sm={2}>
                      Company Name
                    </Form.Label>
                    <Col sm={5} class="company-input-layer">
                      <Form.Control
                        required
                        type="text"
                        name="companyname"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value)
                        }}
                        placeholder="company Name"
                      ></Form.Control>
                    </Col>
                  </Form.Group>
                  {Object.keys(nameErr).map((key) => {
                    return <div style={{ color: 'red' }}>{nameErr[key]}</div>
                  })}

                  <Form.Group as={Row} controlId="Email" className={'pt-3'}>
                    <Form.Label column sm={2} className="companylabel">
                      E-mail
                    </Form.Label>
                    <Col sm={5} class>
                      <Form.Control
                        required
                        type=""
                        name="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                        placeholder="company Email"
                      ></Form.Control>
                    </Col>
                  </Form.Group>
                  {Object.keys(emailErr).map((key) => {
                    return <div style={{ color: 'red' }}>{emailErr[key]}</div>
                  })}

                  <Form.Group as={Row} controlId="address" className={'pt-3'}>
                    <Form.Label column sm={2} className="companylabel">
                      Address
                    </Form.Label>
                    <Col sm={5} class>
                      <Form.Control
                        required
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value)
                        }}
                        placeholder="company Address"
                      ></Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="Telephone" className={'pt-3'}>
                    <Form.Label column sm={2} className="companylabel">
                      Telephone
                    </Form.Label>

                    <Col sm={5}>
                      <Form.Control
                        required
                        type="Number"
                        name="Telephone"
                        value={telephone}
                        onChange={(e) => {
                          setTelephone(e.target.value)
                        }}
                        placeholder="No Of Centers"
                      ></Form.Control>
                    </Col>
                  </Form.Group>
                  {Object.keys(telephoneErr).map((key) => {
                    return <div style={{ color: 'red' }}>{telephoneErr[key]}</div>
                  })}

                  <Form.Group as={Row} controlId="centers" className={'pt-3'}>
                    <Form.Label column sm={2} className="companylabel">
                      No of Centers
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        required
                        type="Number"
                        name="centers"
                        value={centers}
                        onChange={(e) => {
                          setCenters(e.target.value)
                        }}
                        placeholder="No Of Centers"
                      ></Form.Control>
                    </Col>
                  </Form.Group>
                </div>

                <div className="company-registartion-container-part">
                  <Form.Group as={Row} controlId="logo" className={'pt-3'}>
                    <Form.Label column sm={2} className="companylabel">
                      Company Logo
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        required
                        type="text"
                        name="logo"
                        value={logo}
                        onChange={(e) => {
                          setLogo(e.target.value)
                        }}
                        placeholder="company Logo Url"
                      ></Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="openhour" className={'pt-3'}>
                    <Form.Label column sm={2} className="companylabel">
                      Opening Hour
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        required
                        type="Time"
                        name="openhour"
                        value={openhour}
                        onChange={(e) => {
                          setOpenhour(e.target.value)
                        }}
                        placeholder="Open Hour"
                      ></Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="closehour" className={'pt-3'}>
                    <Form.Label column sm={2} className="companylabel">
                      Closing Hour
                    </Form.Label>
                    <Col sm={5}>
                      <Form.Control
                        required
                        type="Time"
                        name="closehour"
                        value={closehour}
                        onChange={(e) => {
                          setClosehour(e.target.value)
                        }}
                      ></Form.Control>
                    </Col>
                  </Form.Group>

                  {/* <Form.Group as={Row} controlId="opendays" className={"pt-3"}>
                  <Form.Label column sm={2} className="companylabel">
                    Opening Days
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control
                      required
                      type="text"
                      name="opendays"
                      value={opendays}
                      onChange={(e) => {
                        setOpendays(e.target.value);
                      }}
                    ></Form.Control>
                  </Col>
                </Form.Group> */}
                </div>

                <div>
                  <Button type="button" variant="secondary" onClick={() => setIsShow(true)}>
                    Next
                  </Button>
                </div>
              </div>

              <div hidden={!isShow}>
                <Form.Group as={Row} controlId="slogans" className={'pt-3'}>
                  <Form.Label column sm={2} className="companylabel">
                    Company Slogan
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control
                      required
                      type="text"
                      name="slogan"
                      value={slogan}
                      onChange={(e) => {
                        setSlogan(e.target.value)
                      }}
                      placeholder="company Slogan"
                    ></Form.Control>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="about" className={'pt-3'}>
                  <Form.Label column sm={2} className="companylabel">
                    About Company
                  </Form.Label>
                  <Col sm={5}>
                    <Form.Control
                      required
                      type="text"
                      name="about"
                      value={about}
                      onChange={(e) => {
                        setAbout(e.target.value)
                      }}
                      placeholder="About Company"
                    ></Form.Control>
                  </Col>
                </Form.Group>
                <button type="button" variant="secondary" onClick={() => setIsShow(false)}>
                  Previous
                </button>
                <Form.Group as={Row} className={'pt-2'}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">CREATE</Button>
                    {'\u00A0'}
                    <Button type="reset" className="btn-danger">
                      RESET
                    </Button>
                    {'\u00A0'}
                  </Col>
                </Form.Group>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
