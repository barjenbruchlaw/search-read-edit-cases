import React from 'react'
import { Container, Row, Col, Form, Modal } from 'react-bootstrap'

const CaseModalTab1 = () => {
  return (
    <>

            <Form>
              <Container>
                <Row className='pt-3'>
                  <Col>
                    <Form.Label>Property Manager:</Form.Label>
                    <Form.Select><option>ABC Company</option></Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>Property Owner:</Form.Label>
                    <Form.Select>
                      <option>123 Main, LLC</option>
                      <option>456 Main, LLC</option>
                      <option>789 Main, LLC</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className='pt-3'>
                  <Col>
                    <Form.Label>Street Address:</Form.Label>
                    <Form.Control value='1234 Main Street' />
                  </Col>
                  <Col>
                    <Form.Label>Unit:</Form.Label>
                    <Form.Control value='101' />
                  </Col>
                </Row>
                <Row className='pt-3'>
                  <Col>
                    <Form.Label>City:</Form.Label>
                    <Form.Control value='Kansas City' />
                  </Col>
                  <Col xs={2}>
                  <Form.Label>State:</Form.Label>
                  <Form.Select>
                      <option>Missouri</option>
                      <option>Kansas</option>
                  </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label>ZIP:</Form.Label>
                    <Form.Control value='64106' />
                  </Col>
                </Row>
                <Row className='pt-3'>
                  <Col>
                    <Form.Label>Resident 1:</Form.Label>
                    <Form.Control value='John L. Smith' />
                  </Col>
                </Row>
                <Row className='pt-3'>
                  <Col>
                    <Form.Label>Resident 2:</Form.Label>
                    <Form.Control value='Mary L. Smith' />
                  </Col>
                </Row>
              </Container>
            </Form>
    
    </>
  )
}

export default CaseModalTab1