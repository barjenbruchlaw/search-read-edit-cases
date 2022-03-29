import React, { useState } from 'react'
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap'

const CaseModalTab1 = () => {

    const [showRentArea, setShowRentArea] = useState(true)

    const [showUDArea, setShowUDArea] = useState(false)

    const [showEVArea, setShowEVArea] = useState(false)

    const [showSQArea, setShowSQArea] = useState(false)

    const [showHTArea, setShowHTArea] = useState(false)



    return (
        <div className='mt-3'>
            <Container>
                <Row className='ms-2 bg-primary text-light'>
                    <Col xs={3}>Is rent delinquent?</Col>
                    <Col className='bg-light text-dark'><Form.Check className='ms-3' inline type='radio' name='isRentDelinquent' checked='true' onChange={e => setShowRentArea(true)} label='Yes' />
                        <Form.Check inline type='radio' name='isRentDelinquent' onChange={e => setShowRentArea(false)} label='No' /></Col></Row>

                <Row className='pt-3'>{showRentArea ? <RentArea /> : null}</Row>
                <Row className='ms-2 bg-primary text-light'>
                    <Col xs={3}>Is there a lease violation?</Col>
                    <Col className='bg-light text-dark'><Form.Check className='ms-3' inline type='radio' name='isLeaseViolation' onChange={e => setShowUDArea(true)} label='Yes' />
                        <Form.Check inline type='radio' name='isLeaseViolation' checked='true' onChange={e => setShowUDArea(false)} label='No' /></Col></Row>

                <Row className='pt-3'>{showUDArea ? <UDArea /> : null}</Row>
                <Row className='ms-2 bg-primary text-light'>
                    <Col xs={3}>Is this an emergency eviction?</Col>
                    <Col className='bg-light text-dark'><Form.Check className='ms-3' inline type='radio' name='isEmergencyEviction' onChange={e => setShowEVArea(true)} label='Yes' />
                        <Form.Check inline type='radio' name='isEmergencyEviction' checked='true' onChange={e => setShowEVArea(false)} label='No' /></Col></Row>

                <Row className='pt-3'>{showEVArea ? <EVArea /> : null}</Row>
                <Row className='ms-2 bg-primary text-light'>
                    <Col xs={3}>Is this an squatter case?</Col>
                    <Col className='bg-light text-dark'><Form.Check className='ms-3' inline type='radio' name='isSquatter' onChange={e => setShowSQArea(true)} label='Yes' />
                        <Form.Check inline type='radio' name='isSquatter' checked='true' onChange={e => setShowSQArea(false)} label='No' /></Col></Row>
                <Row className='pt-3'>{showSQArea ? <SQArea /> : null}</Row>
                <Row className='ms-2 bg-primary text-light'>
                    <Col xs={3}>Is this an holdover tenant?</Col>
                    <Col className='bg-light text-dark'><Form.Check className='ms-3' inline type='radio' name='isHoldover' onChange={e => setShowHTArea(true)} label='Yes' />
                        <Form.Check inline type='radio' name='isHoldover' checked='true' onChange={e => setShowHTArea(false)} label='No' /></Col></Row>

                <Row className='pt-3'>{showHTArea ? <HTArea /> : null}</Row>
            </Container>
        </div>

    )
}

const RentArea = () => {
    return (
        <>
            <Container>
                <Form className='mb-3' controlId='inputRentOwed'>

                    <Row className='p-2'><Col xs={3}><Form.Label>Monthly Rent Amount</Form.Label>
                        <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' value='1,000.00' className='text-end' /></InputGroup></Col>
                        <Col xs={3}><Form.Label>Date Rent is Due</Form.Label>
                            <Form.Control value='3/1/2022' /></Col></Row>

                    <Row className='p-2'><Col xs={3}><Form.Label>Rent Balance</Form.Label>
                        <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' value='3,000.00' className='text-end' /></InputGroup></Col>
                        <Col xs={3}><Form.Label>Date of Balance</Form.Label>
                            <Form.Control value='3/15/2022' /></Col></Row>

                    <Row className='p-2'><Col xs={3}><Form.Label>Late Fee Balance</Form.Label>
                        <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' value='300.00' className='text-end' /></InputGroup></Col>
                        <Col xs={3}><Form.Label>Utility Balance</Form.Label>
                            <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' value='225.25' className='text-end' /></InputGroup></Col>
                        <Col xs={3}><Form.Label>Additional Fee Balance</Form.Label>
                            <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' className='text-end' placeholder='0.00' /></InputGroup></Col>
                    </Row>

                    <Row className='p-2'><Col xs={6} /><Col xs={6}><Form.Label className='fw-bold'>Total Amount Owed</Form.Label><InputGroup><InputGroup.Text className='fw-bold'>$</InputGroup.Text><Form.Control type='currency' className='fw-bold text-end' value='4,525.25' /></InputGroup></Col></Row>

                </Form>
            </Container>

        </>
    )
}

const UDArea = () => {
    return (
        <>
            <Container>

                <Form.Group className='mb-3' controlId='inputIncident information'>

                    <Row className='p-2'><Col xs={6}><Form.Label>Date of violation or discovery of violation</Form.Label>
                        <Form.Control type='date' /></Col>
                        <Col xs={6}><Form.Label>Paragraph or section of lease violated</Form.Label>
                            <Form.Control /></Col>
                    </Row>

                    <Row className='p-2'><Col><Form.Label>Describe the lease violation below</Form.Label>
                        <Form.Control as='textarea' rows={3} placeholder='Describe the violation here' /></Col></Row>
                    <Row><Col className='ms-2' xs={4}><Form.Label>Date of notice:</Form.Label><Form.Control type='date' /></Col></Row>

                </Form.Group>

            </Container>
        </>
    )
}

const EVArea = () => {
    return (
        <>
            <Form.Group className='mb-3' controlId='inputIncident information'>

                <Row className='p-2'><Col xs={6}><Form.Label>Date of incident</Form.Label>
                    <Form.Control type='date' /></Col>
                    <Col xs={6}><Form.Label>Time of incident</Form.Label>
                        <Form.Control type='time' /></Col>
                </Row>

                <Row className='p-2'><Col><Form.Label>Describe the incident below</Form.Label>
                    <Form.Control as='textarea' rows={6} placeholder='Describe the incident here' /></Col></Row>
                <Row><Col className='ms-2' xs={4}><Form.Label>Date of notice (if any):</Form.Label><Form.Control type='date' /></Col></Row>

            </Form.Group>
        </>
    )
}

const SQArea = () => {
    return (
        <>
            <Form.Group className='mb-3' controlId='input Squatter Information'>
                <Row><Col className='ms-2' xs={4}><Form.Label>Date of notice:</Form.Label><Form.Control type='date' /></Col></Row>
            </Form.Group>
        </>
    )
}

const HTArea = () => {
    return (
        <>
            <Container>
                <Form className='pb-3 ms-2'>
                    <Row><Col><Form.Label>Monthly Rent Amount</Form.Label>
                        <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' placeholder='0' className='text-end' /><InputGroup.Text>.00</InputGroup.Text></InputGroup></Col>
                        <Col xs={2} />
                        <Col><Form.Label>Date of notice:</Form.Label><Form.Control type='date' /></Col></Row>
                </Form>
            </Container>
        </>
    )
}
export default CaseModalTab1
