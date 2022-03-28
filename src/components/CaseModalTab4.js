import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

const CaseModalTab4 = () => {
    return (
        <>

            <Container className='ms-3 pe-3'>
                <Row className='py-2'>

                    <Col xs={4}>Date summons sent to PPS</Col>
                    <Col><Form.Control value="3/24/2022" /></Col>

                </Row>
                <Row className='py-2'>

                    <Col xs={4}>Date of service of summons</Col>
                    <Col><Form.Control value="3/26/2022" /></Col>

                </Row>
                <Row className='py-2'>

                    <Col xs={4}>Time of service of summons</Col>
                    <Col><Form.Control value="10:16 AM" /></Col>

                </Row>
                <Row className='py-2'>

                    <Col xs={4}>Type of service</Col>
                    <Col>
                        <Form.Select>
                            <option>Type of service</option>
                            <option value="posting" selected>Posting</option>
                            <option value="personal">Personal</option>
                            <option value="residential">Residential</option>
                        </Form.Select>
                    </Col>

                </Row>
                <Row className='py-2'>

                    <Col xs={4}>Date service return filed with the court</Col>
                    <Col><Form.Control value="3/28/2022" /></Col>

                </Row>
                <Row className='py-2'>

                    <Col xs={4}>Date service return accepted by court</Col>
                    <Col><Form.Control type='date' /></Col>

                </Row>
            </Container>

        </>
    )
}

export default CaseModalTab4