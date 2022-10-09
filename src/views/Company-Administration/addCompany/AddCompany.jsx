import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
// import './addcompany.css'
import './addcompany.scoped.css'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import app from '../../../firebase'

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

  const createData = (e) => {
    e.preventDefault()
    const fileName = new Date().getTime().toString() + logo.name

    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)

    const uploadTask = uploadBytesResumable(storageRef, logo)

    //Upload the file to Firebase Storage
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + ' % done')
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((logo) => {
          console.log('File available at :', logo)

          const data = {
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

          console.log(data)
          axios
            .post('http://localhost:3001/api/company/addCompany', data)
            .then((res) => {
              console.log(res)
              alert('Company Added Successfully!')
            })
            .catch((res) => {
              console.log('Failed')
            })
        })
      },
    )
  }

  const handleShow = () => {
    if (name === '') {
      setnameErr({ name: 'Name is required' })
      alert('Name is required')
    } else if (telephone === '' || telephone.length < 10) {
      settelephoneErr({ telephone: 'Telephone is required' })
      alert('Telephone is required')
    } else if (email === '' || !email.includes('@')) {
      setemailErr({ email: 'Please insert valid email' })
      alert('Please insert valid email')
    } else {
      setIsShow(true)
    }
  }
  // const formValidation = () => {
  //   const nameErr = {}
  //   const telephoneErr = {}
  //   const emailErr = {}
  //   let isValid = true

  //   if (name.trim().length < 3) {
  //     nameErr.nameShort = 'Name is too short'
  //     isValid = false
  //   }

  //   if (telephone.trim().length < 10) {
  //     telephoneErr.telephoneShort = 'Telephone is too short'
  //     isValid = false
  //   }

  //   if (email.trim().length < 5) {
  //     emailErr.emailShort = 'Email is too short'
  //     isValid = false
  //   }

  //   setnameErr(nameErr)
  //   settelephoneErr(telephoneErr)
  //   setemailErr(emailErr)
  //   return isValid
  // }

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
        <h2 className="main-title">ADD COMPANY</h2>
        <div className="container3">
          <div className="container2">
            <Form onSubmit={createData} onReset={onReset}>
              {/* <div className="container2"> */}
              <div hidden={isShow}>
                <div className="company-registartion-container-part">
                  <Form.Group as={Row} controlId="name" className={'pt-4'}>
                    <Form.Label column sm={2} className="companylabel">
                      Company Name
                    </Form.Label>
                    <Col sm={7}>
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

                  <Form.Group as={Row} controlId="Email" className={'pt-4'}>
                    <Form.Label column sm={2} className="companylabel">
                      E-mail
                    </Form.Label>
                    <Col sm={7}>
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
                    <Col sm={7}>
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

                    <Col sm={7}>
                      <Form.Control
                        required
                        type="Number"
                        name="Telephone"
                        value={telephone}
                        onChange={(e) => {
                          setTelephone(e.target.value)
                        }}
                        placeholder="Enter Telephone Number"
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
                    <Col sm={7}>
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
                    <Col sm={7}>
                      <Form.Control
                        required
                        type="file"
                        name="logo"
                        onChange={(e) => {
                          setLogo(e.target.files[0]);
                        }}
                        placeholder="company Logo Url"
                      ></Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="openhour" className={'pt-3'}>
                    <Form.Label column sm={2} className="companylabel">
                      Opening Hour
                    </Form.Label>
                    <Col sm={7}>
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
                    <Col sm={7}>
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

                <div className="next-btn-add">
                  <Button
                    type="button"
                    className="next-btn-add"
                    variant="secondary"
                    // onClick={() => setIsShow(true)}
                    onClick={handleShow}
                  >
                    NEXT
                  </Button>
                </div>
              </div>

              <div hidden={!isShow}>
                <Form.Group as={Row} controlId="slogans" className={'pt-3'}>
                  <Form.Label column sm={2} className="companylabel">
                    Company Slogan
                  </Form.Label>
                  <Col sm={7}>
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
                  <Col sm={7}>
                    <Form.Control
                      required
                      as="textarea"
                      rows={3}
                      name="about"
                      value={about}
                      onChange={(e) => {
                        setAbout(e.target.value)
                      }}
                      placeholder="About Company"
                    ></Form.Control>
                  </Col>
                </Form.Group>
                <div className="add-bottom-buttons">
                  <button
                    type="button"
                    className="secondary-butn-previous"
                    onClick={() => setIsShow(false)}
                  >
                    PREVIOUS
                  </button>
                  <Form.Group as={Row} className={'pt-2'}>
                    <Col sm={{ span: 10, offset: 2 }}>
                      <div className="create-btn-company-group">
                        <Button type="submit" className="create-btn-company">
                          CREATE
                        </Button>
                        {'\u00A0'}
                        <Button type="reset" className="btn-danger">
                          RESET
                        </Button>
                        {'\u00A0'}
                      </div>
                    </Col>
                  </Form.Group>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
