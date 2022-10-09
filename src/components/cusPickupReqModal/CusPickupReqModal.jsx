import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

export default function CusPickupReqModal(props) {



  return (
    <>
      <Modal show={props.show} onHide={props.mapModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Select Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='justify-content-center'>


          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
