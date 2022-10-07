import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Multiselect from 'multiselect-react-dropdown';
import axios from 'axios';
import Swal from 'sweetalert2'

import { MapModal } from '../../../components';

import './newPickupReq.scoped.css';

export default function NewPickupReq(props) {
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({})
  const [position, setPosition] = useState({});
  const [multiselectstyle, setMultiselectstyle] = useState({
    chips: {
      background: '#17d193'
    },
    highlightOption: {
      background: '#17d193'
    },
  });
  const [mapModal, setMapModal] = useState(false);
  const mapModalClose = () => setMapModal(false);
  const mapModalShow = () => setMapModal(true);

  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        if (location) setForm({
          ...form,
          location: { lat: location.coords.latitude, lng: location.coords.longitude },
        })
      });
    };
  }, []);

  const checkValidity = (e) => {
    if (form.wasteTypes == undefined || form.wasteTypes.length == 0) {
      setMultiselectstyle({
        chips: {
          background: '#17d193'
        },
        highlightOption: {
          background: '#17d193'
        },
        searchBox: {
          border: '1px solid #dc3545'
        }
      })
      return true;
    } else {
      setMultiselectstyle({
        chips: {
          background: '#17d193'
        },
        highlightOption: {
          background: '#17d193'
        },
      })
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inForm = e.currentTarget;
    checkValidity()
    if (inForm.checkValidity() === false || !form.location.lat || !form.location.lng || checkValidity()) {
      setValidated(true);
      console.log(form);
    } else {

      console.log(form);
      axios.post('http://localhost:3001/api/pickupRequest', form)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {         // handle error
          console.log(error);
        })
        .then(() => {     // always executed
        });
      Swal.fire({
        icon: 'success',
        title: 'Request successfully sent!',
        showConfirmButton: false,
        timer: 2000
      })
      setForm({
        ...form,
        company: '',
        address: '',
        size: '',
        wasteTypes: []
      })
      setValidated(false);
    }

  };


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
              <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex'>
                <Col md="2">
                  <Form.Label>Company</Form.Label>
                </Col>
                <Col md="10">
                  <Form.Select required value={form.company} name="company" onChange={handleSelectChange} className="font-s">
                    <option value="">Select Company</option>
                    <option value="ABC Inc">ABC Inc</option>
                    <option value="Earthology Inc">Earthology Inc</option>
                    <option value="Browning-Ferris Industries">Browning-Ferris Industries</option>
                    <option value="Casella Waste Systems">Casella Waste Systems</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex'>
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
                    className="font-s"
                  />
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01" className='d-flex'>
                <Col md="4">
                  <Form.Label>Location</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Location"
                    onChange={handleSelectChange}
                    value={form.location?.formatted_address}
                    onClick={mapModalShow}
                    name="location"
                    className='font-s'
                  />
                  <span style={{ fontSize: '12px' }}>Live Location</span>
                </Col>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom01" className='d-flex'>
                <Col md="4">
                  <Form.Label>Size</Form.Label>
                </Col>
                <Col md="8">
                  <Form.Select required onChange={handleSelectChange} name="size" value={form.size} className="d-flex">
                    <option value="">Select Size</option>
                    <option value="Small">Small</option>
                    <option value="Mediam">Mediam</option>
                    <option value="Large">Large</option>
                  </Form.Select>
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Col>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex'>
                <Col md="2">
                  <Form.Label>Waste Types</Form.Label>
                </Col>
                <Col md="10">
                  <Multiselect
                    required
                    className='from-control'
                    isObject={false}
                    onSelect={changeWasteTypes} // Function will trigger on select event
                    onRemove={removeWasteTypes}
                    selectedValues={
                      form.wasteTypes
                    }
                    options={[
                      'Plastic',
                      'Glass',
                      'Iron',
                    ]}
                    placeholder="Waste Types"
                    style={multiselectstyle}
                  />
                  {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                </Col>
              </Form.Group>
            </Row>
            <Col md="12" className='d-flex justify-content-end'>
              {/* <Button>Reset</Button> */}
              <Button type="submit" >Request</Button>
            </Col>
          </Form>
        </div>
      </div>

      <MapModal
        show={mapModal}
        mapModalShow={mapModalShow}
        mapModalClose={mapModalClose}
        setForm={setForm}
        form={form} />
    </>
  )
};

