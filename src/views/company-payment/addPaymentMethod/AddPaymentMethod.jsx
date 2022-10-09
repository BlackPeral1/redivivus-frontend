import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { useParams, Link, useLocation } from 'react-router-dom'
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
  const [address, setAddress] = useState({ addressLine1: '', addressLine2: '', addressLine3: '' })

  const [form, setForm] = useState({
    methodType: '',
    expirationDate: '',
    activeStatus: true,
    paymentAddress: {
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
    },
    cardNumber: '',
    cvc: 0,
    postalCode: 0,
  })

  const params = useParams()
  const location = useLocation()

  const [decision, setDecision] = useState([])
  useEffect(() => {
    setDecision(location.pathname.toString().split('/')[3])
    console.log(decision)
  }, [])
  useEffect(() => {
    if (decision === 'update-payment') {
      axios
        .get(`http://localhost:3001/api/paymentmethod/${params.id}`)
        .then(function (response) {
          setForm(response.data.data)
          setAddress(response.data.data.paymentAddress)
          console.log(form.paymentAddress)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
    }
  }, [decision])

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(form)

    const inForm = e.currentTarget
    if (inForm.checkValidity() === false) {
      setValidated(true)
    } else {
      if (decision === 'update-payment') {
        axios
          .patch(`http://localhost:3001/api/paymentmethod/${params.id}`, form)
          .then(function (response) {
            console.log(response.data.message)
            Swal.fire({
              icon: 'success',
              title: 'Request successfully updated!',
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
      } else if (decision === 'add-payment-method') {
        axios
          .post(`http://localhost:3001/api/paymentmethod`, form)
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
      }

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

    if (name === 'addressLine1') {
      setAddress({ ...address, [name]: value })
    } else if (name === 'addressLine2') {
      setAddress({ ...address, [name]: value })
    } else if (name === 'addressLine3') {
      setAddress({ ...address, [name]: value })
    }
    setForm({
      ...form,
      ['paymentAddress']: { ...address },
    })
  }
  const resetForm = () => {
    setAddress((address) => {
      return {}
    })
    setForm((form) => {
      return {}
    })
  }
  const backToAllPayments = () => {
    navigate(`/user/payment`)
  }
  return (
    <>
      <h2 className="content-title mt-5">
        {decision === 'update-payment'
          ? 'Update Company Payment Method'
          : 'Company Add Payment Method'}
      </h2>
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
                    value={address.addressLine1}
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
                    value={address.addressLine2}
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
                    value={address.addressLine3}
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
                type="button"
                onClick={resetForm}
                style={{ backgroundColor: '#36ECAF', color: '#4F4E4E', marginRight: '5%' }}
              >
                Clear
              </Button>
              <Button
                type="submit"
                style={{ backgroundColor: '#36ECAF', color: '#4F4E4E', marginRight: '1.25%' }}
              >
                {decision === 'update-payment' ? 'Update' : 'Add'}
              </Button>
            </Col>
          </Form>
        </div>
      </div>
    </>
  )
}
export default AddPaymentMethod
