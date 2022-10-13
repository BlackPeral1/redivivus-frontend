import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TopNav } from '../../../components';
import './customerRegistration.scoped.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import { React, useState } from 'react';
function CustomerRegistration() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPwd, setConfirmPwd] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/api/auth/register', { email, password })
      .then(function (res) {
        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Logged in successfully!',
            showConfirmButton: false,
            timer: 2000,
          })
        }
      })
      .catch(function (error) {
        // handle error
        Swal.fire({
          icon: 'error',
          title: 'Failed to login!',
          showConfirmButton: false,
          timer: 2000,
        })
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }
  return (
    <>
      <TopNav />
      <Container className='formContainer'>
        <h3 className='title'>Customer Registration</h3>
        <Form onSubmit={handleSubmit}>
          <Row className='row'>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Col>
          </Row>
          <Row className='row'>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="tel" placeholder="Phone" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail" value={email} onChange={(e) => setEmail(e.target.value)}>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
            </Col>
          </Row>
          <Row className='row'>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="password" placeholder="Confirm password" />
              </Form.Group>
            </Col>
          </Row>
          <Row className='row'>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Address" className='formInputField' />
              </Form.Group>
            </Col>
          </Row>
          <Row className='row'>
            <Col lg={3} >
              <Button variant="primary" type="submit" className='registerBtn'>
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default CustomerRegistration;