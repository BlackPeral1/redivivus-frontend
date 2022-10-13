import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Swal from 'sweetalert2'
import './myDetails.scoped.css';

export default function MyDetails(props) {
    const [form, setForm] = useState(

    )
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    };

    // const [pageType , setPageType] = 

    const user_id = (localStorage.getItem('_id'))
    useEffect(() => {
        axios.get(
            `http://localhost:3001/api/user/my`,
            config
        ).then((response) => {
            // setFormData(response)
            console.log(response)
        })
    }, [])
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const inForm = e.currentTarget;
        console.log(form);
        // const { data } = await async axios.post(
        //     `/api/notes/create`,
        //     { title, content, category },
        //     config
        // );
        axios.put('http://localhost:3001/api/user/my', form)
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
            title: 'Data successfully updated!',
            showConfirmButton: false,
            timer: 2000
        })
        setForm({
            ...form,
            company: '',
            note: '',
            size: '',
            wasteTypes: []
        })
    };

    const handleSelectChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <h4 className="content-title">Your details</h4>
            <hr />
            <div className="row">
                <div className="card p-4 form">
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex '>
                                <Col md="6" className='mx-2'>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First Name"
                                        onChange={handleSelectChange}
                                        name="note"
                                        // value={form.name}
                                        className="font-s"
                                    />
                                </Col>
                                <Col md="6" >
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={handleSelectChange}
                                        name="note"
                                        // value={form.name}
                                        className="font-s"
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex '>
                                <Col md="6" className='mx-2'>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Phone number"
                                        onChange={handleSelectChange}
                                        name="note"
                                        // value={form.name}
                                        className="font-s"
                                    />
                                </Col>
                                <Col md="6" >
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Email"
                                        onChange={handleSelectChange}
                                        name="note"
                                        // value={form.name}
                                        className="font-s"
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex '>
                                <Col md="12" className='mx-2'>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Address"
                                        onChange={handleSelectChange}
                                        name="note"
                                        // value={form.name}
                                        className="font-s"
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom01" className='d-flex '>
                                <Col md="4" className='mx-2'>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Bank"
                                        onChange={handleSelectChange}
                                        name="note"
                                        // value={form.name}
                                        className="font-s"
                                    />
                                </Col>
                                <Col md="4" className='mx-1'>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Branch"
                                        onChange={handleSelectChange}
                                        name="note"
                                        // value={form.name}
                                        className="font-s"
                                    />
                                </Col>
                                <Col md="4" className='mx-1'>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Account Number"
                                        onChange={handleSelectChange}
                                        name="note"
                                        // value={form.name}
                                        className="font-s"
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                        <Col md="12" className='d-flex justify-content-end'>
                            <Button type="submit" >Save</Button>
                        </Col>
                    </Form>
                </div>
            </div>
        </>
    )
};

