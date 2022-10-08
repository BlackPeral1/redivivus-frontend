import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Multiselect from 'multiselect-react-dropdown'
import axios from 'axios'
import Swal from 'sweetalert2'
// Blatant "inspiration" from https://codepen.io/Jacqueline34/pen/pyVoWr

const AddPaymentMethod = () => {
  const navigate = useNavigate()
  const [validated, setValidated] = useState(false)
  const [location, setLocation] = useState({})
  const [form, setForm] = useState({})
  const [address, setAddress] = useState([])
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [addressLine3, setAddressLine3] = useState('')
  // const [error, setError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    setAddress([addressLine1, addressLine2, addressLine3])
    console.log(address)
    setForm({ ...form, address: address })
    const inForm = e.currentTarget
    if (inForm.checkValidity() === false) {
      setValidated(true)
    } else {

      axios
        .post(`http://lcoalhost:3001/api/paymentmethod/`, form)
        .then(function (response) {
          console.log(response.message)
          Swal.fire({
            icon: 'success',
            title: 'Request successfully sent!',
            showConfirmButton: false,
            timer: 2000,
          })
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })

      // setForm({
      //   company: 'Select Company',
      //   address: '',
      //   size: 'Select Size',
      // })
      setValidated(false)
    }
  }

  const handleSelectChange = (e) => {
    const name = e.target.name
    let value = e.target.value
    if (name === 'cvc' || name === 'postalCode') {
      value = parseInt(value)
    }
    if (name == 'activeStatus') {
      value = JSON.parse(value)
    }
    setForm({
      ...form,
      [name]: value,
    })

    console.log(form)
  }
  const handleAddress = (e) => {
    const name = e.target.name
    let value = e.target.value
    if (name == 'addressLine1') {
      setAddressLine1(value)
      console.log(addressLine1)
    } else if (name == 'addressLine2') {
      setAddressLine2(value)
      console.log(addressLine2)
    } else {
      setAddressLine3(value)
      console.log(addressLine3)
    }
  }
  const backToAllPayments = () => {
    navigate(`/user/payment`)
  }
  return (
    <>
      <h2 className="content-title mt-5">Company Add Payment Method</h2>
      <hr />
      <div className="row">
        <div className="card p-4 form">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-6">
              <a className="content-title mt-3 text-decoration-none h4" onClick={backToAllPayments}>
                <i className="fas fa-chevron-left fa-sm me-4" style={{ color: '#000000' }}></i>
                Move Back
              </a>
              <hr />
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Payment Type :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Select
                    value={form.methodType}
                    name="methodType"
                    placeholder=""
                    onChange={handleSelectChange}
                  >
                    <option>Visa</option>
                    <option>Master Card</option>
                    <option>Credit Card</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Card No :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Card Number"
                    onChange={handleSelectChange}
                    value={form.cardNumber}
                    name="cardNumber"
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-4 mt-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Exp. Date :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    maxLength="5"
                    minLength="5"
                    placeholder="Expiration Date"
                    onChange={handleSelectChange}
                    value={form.expirationDate}
                    name="expirationDate"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>CVC :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="number"
                    placeholder="CVC"
                    onChange={handleSelectChange}
                    value={form.cvc}
                    name="cvc"
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-4 mt-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Address Line 1 :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Adress Line 1"
                    onChange={handleAddress}
                    value={addressLine1}
                    name="addressLine1"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Address Line 2 :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Address Line 2"
                    onChange={handleAddress}
                    value={addressLine2}
                    name="addressLine2"
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-4 mt-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Address Line 3 :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Address Line 3"
                    onChange={handleAddress}
                    value={addressLine3}
                    name="addressLine3"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Postal Code :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="number"
                    placeholder="Postal Code"
                    onChange={handleSelectChange}
                    value={form.postalCode}
                    name="postalCode"
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Status : </Form.Label>
                </Col>
                <Col md="8">
                  <Form.Select
                    value={form.activeStatus}
                    onChange={handleSelectChange}
                    name="activeStatus"
                  >
                    <option value="true">Active</option>
                    <option value="false">Inactive</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Row>

            <Col md="12" className="d-flex justify-content-end">
              {/* <Button>Reset</Button> */}
              <Button
                type="reset"
                style={{ backgroundColor: '#36ECAF', color: '#4F4E4E', marginRight: '5%' }}
              >
                Clear
              </Button>
              <Button
                type="submit"
                style={{ backgroundColor: '#36ECAF', color: '#4F4E4E', marginRight: '1.25%' }}
              >
                Add
              </Button>
            </Col>
          </Form>
        </div>
      </div>
    </>
  )
}
export default AddPaymentMethod
