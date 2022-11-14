/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

function Formulario() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>NOMBRE</Form.Label>
          <Form.Control
            required
            type="text"
          
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>APELLIDO</Form.Label>
          <Form.Control
            required
            type="text"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
         <Form>
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Hombre `}
          />

          <Form.Check
          
            type={type}
            label={`Mujer`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>CIUDAD</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>PROVINCIA</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>CODIGO POSTAL</Form.Label>
          <Form.Control type="text"  required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
        br
        <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>EMAC</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      br
      <Form class className='covid'>
      <Form.Label>CARNET DE VACUNACION COVID-19 COMPLETO</Form.Label>
      
        
         <Form className='covid'>
      {['radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`SI `}
          />

          <Form.Check
          
            type={type}
            label={`NO`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
      
    </Form>
      </Row>
       
      <Button type="submit">REGISTRAR</Button>
    </Form>
  );
}

export default Formulario