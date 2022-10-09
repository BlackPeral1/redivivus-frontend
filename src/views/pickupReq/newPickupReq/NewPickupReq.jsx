import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Multiselect from 'multiselect-react-dropdown'
import axios from 'axios'
import Swal from 'sweetalert2'

import './newPickupReq.scoped.css'

// import 'sweetalert2/src/sweetalert2.scss'
export default function NewPickupReq(props) {
  const [validated, setValidated] = useState(false)
  const [location, setLocation] = useState({})
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
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location) selectLocation(location.coords)
       
      })
    }
  }, [])

  const selectLocation = (location) => {
    setLocation({
      ...form,
      location: location,
    })
  }

  const handleSelectChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const changeWasteTypes = (value) => {
    setForm({
      ...form,
      wasteTypes: value,
    })
  }
  const removeWasteTypes = (value) => {
    setForm({
      ...form,
      wasteTypes: value,
    })
  }
  return (
    <>
      <h4 className="content-title">Create New Request</h4>
      <hr />
      <div className="row">
        <div className="card p-4 form">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01" className="d-flex">
                <Col md="2">
                  <Form.Label>Company</Form.Label>
                </Col>
                <Col md="10">
                  <Form.Select value={form.company} name="company">
                    <option>Select Company</option>
                    <option>ABC Inc</option>
                    <option>Earthology Inc</option>
                    <option>Browning-Ferris Industries</option>
                    <option>Casella Waste Systems</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01" className="d-flex">
                <Col md="2">
                  <Form.Label>Address</Form.Label>
                </Col>
                <Col md="10">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Address"
                    onChange={handleSelectChange}
                    name="address"
                    value={form.address}
                  />
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Location</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Location"
                    onChange={handleSelectChange}
                    value={location.location?.latitude + ',' + location.location?.longitude}
                    name="location"
                  />
                  <span style={{ fontSize: '12px' }}>Live Location</span>
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className="d-flex">
                <Col md="4">
                  <Form.Label>Size</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Select onChange={handleSelectChange} name="size" value={form.location}>
                    <option>Select Size</option>
                    <option>Small</option>
                    <option>Mediam</option>
                    <option>Large</option>
                  </Form.Select>
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01" className="d-flex">
                <Col md="2">
                  <Form.Label>Waste Types</Form.Label>
                </Col>
                <Col md="10">
                  <Multiselect
                    className="from-control"
                    isObject={false}
                    onSelect={changeWasteTypes} // Function will trigger on select event
                    onRemove={removeWasteTypes}
                    selectedValues={form.wasteTypes}
                    options={['Plastic', 'Glass', 'Iron']}
                    placeholder="Waste Types"
                    style={{
                      chip: {
                        backgroundColor: '#36ecaf',
                      },
                    }}
                  />
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Col>
              </Form.Group>
            </Row>
            <Col md="12" className="d-flex justify-content-end">
              {/* <Button>Reset</Button> */}
              <Button type="submit" style={{ backgroundColor: '#36ECAF', color: '#4F4E4E' }}>
                Request
              </Button>
            </Col>
          </Form>
        </div>
      </div>
    </>
  )
}
