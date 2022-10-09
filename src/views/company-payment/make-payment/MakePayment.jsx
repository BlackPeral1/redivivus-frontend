import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Multiselect from 'multiselect-react-dropdown'
import axios from 'axios'
import Swal from 'sweetalert2'

const MakePayment = () => {
  const [validated, setValidated] = useState(false)
  const [location, setLocation] = useState({})
  const [binRequests, setBinRequests] = useState([])
  const [paymentMethods, setPaymentMethods] = useState([])
  const [form, setForm] = useState({})
  // const [error, setError] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const inForm = e.currentTarget
    if (inForm.checkValidity() === false) {
      setValidated(true)
    } else {
      axios
        .post('http://localhost:3001/api/pickupRequest', form)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error)
        })
        .then(function () {
          // always executed
        })
      Swal.fire({
        icon: 'success',
        title: 'Request successfully sent!',
        showConfirmButton: false,
        timer: 2000,
      })
      setForm({
        company: 'Select Company',
        address: '',
        size: 'Select Size',
      })
      setValidated(false)
    }
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/pickupRequest/')
      .then(function (response) {
        console.log(response.data)
        setBinRequests(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })

    axios
      .get('http://localhost:3001/api/paymentmethod/')
      .then(function (response) {
        console.log(response.data.data)
        setPaymentMethods(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })

    setForm({})
    setValidated(false)
  }, [])

  return (
    <>
      <h4 className="content-title mt-5">Make Payment</h4>
      <hr />
      <div className="row">
        <div className="card p-4 form">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Payment Type :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Select value={form.paymentType} name="paymentType">
                    {/* <option>Visa</option>
                    <option>Master Card</option>
                    <option>Credit Card</option> */}
                    {paymentMethods.map((paymentMethod) => {
                      const { methodType } = paymentMethod
                      return <option value={form.paymentType}>{methodType}</option>
                    })}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Card. No. : </Form.Label>
                </Col>
                <Col md="8">
                  <Form.Select value={form.cardNo} name="cardNo">
                    {paymentMethods
                      .filter((method) => {
                        if (method.methodType === form.paymentType) return method
                      })
                      .map((oneFilteredMethod) => {
                        return (
                          <option value={form.cardNumber}>{oneFilteredMethod.cardNumber}</option>
                        )
                      })}
                    {/* <option>1089 0067 0005 6000</option>
                    <option>1089 0067 0005 6000</option>
                    <option>1089 0067 0005 6000</option>
                    <option>1089 0067 0005 6000</option> */}
                  </Form.Select>
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Request ID :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Select value={form.requestId} name="requestId">
                    {/* <option>REQID10890067</option>
                    <option>REQID10890067</option>
                    <option>REQID10890067</option> */}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Transaction Date :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control type="date" value={form.date} name="date" />
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Amount :</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Amount"
                    value={form.amount}
                    name="amount"
                  />
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-4">
              <Form.Group as={Col} md="12" controlId="validationCustom01" className="d-flex">
                <Col md="12">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    style={{ resize: 'none' }}
                    placeholder="Leave a note"
                  />
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
export default MakePayment
