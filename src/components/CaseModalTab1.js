import React, { useState } from 'react'
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap'

const CaseModalTab1 = () => {

    const [showRentArea, setShowRentArea] = useState(true)

    const [showUDArea, setShowUDArea] = useState(false)

    const [showEVArea, setShowEVArea] = useState(false)



    return (
        <div className='mt-3'>
        Is rent delinquent?
            <Form.Check className='ms-3' inline type='radio' name='isRentDelinquent' checked='true' onChange={e => setShowRentArea(true)} label='Yes' />
            <Form.Check inline type='radio' name='isRentDelinquent' onChange={e => setShowRentArea(false)} label='No' />
            
            {showRentArea ? <RentArea /> : null}

        <br />

        Is there a lease violation?
            <Form.Check className='ms-3' inline type='radio' name='isLeaseViolation' onChange={e => setShowUDArea(true)} label='Yes' />
            <Form.Check inline type='radio' name='isLeaseViolation' checked='true' onChange={e => setShowUDArea(false)} label='No' />
            
            {showUDArea ? <UDArea /> : null}

        <br />
        Is this an emergency eviction?
            <Form.Check className='ms-3' inline type='radio' name='isEmergencyEviction' onChange={e => setShowEVArea(true)} label='Yes' />
            <Form.Check inline type='radio' name='isEmergencyEviction' checked='true' onChange={e => setShowEVArea(false)} label='No' />
            
            {showEVArea ? <EVArea /> : null}

        <br />
        </div>

    )
}

const RentArea = () => {
    return (
        <>

                            <Form className='mb-3' controlId='inputRentOwed'>

                                <Row className='p-2'><Col  xs={6}><Form.Label>Monthly Rent Amount</Form.Label>
                                <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' value='1,000' className='text-end' /><InputGroup.Text>.00</InputGroup.Text></InputGroup></Col>
                                <Col xs={6}><Form.Label>Date Rent is Due</Form.Label>
                                <Form.Control value='3/1/2022'/></Col></Row>

                                <Row className='p-2'><Col  xs={6}><Form.Label>Rent Balance</Form.Label>
                                <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' value='3,000' className='text-end' /><InputGroup.Text>.00</InputGroup.Text></InputGroup></Col>
                                <Col xs={6}><Form.Label>Date of Balance</Form.Label>
                                <Form.Control value='3/23/2022'/></Col></Row>

                                <Row className='p-2'><Col  xs={4}><Form.Label>Late Fee Balance</Form.Label>
                                <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' value='300' className='text-end' /><InputGroup.Text>.00</InputGroup.Text></InputGroup></Col>
                                <Col  xs={4}><Form.Label>Utility Balance</Form.Label>
                                <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' value='225' className='text-end' /><InputGroup.Text>.00</InputGroup.Text></InputGroup></Col>
                                <Col  xs={4}><Form.Label>Additional Fee Balance</Form.Label>
                                <InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' placeholder='Enter Additional Fee Balance' /><InputGroup.Text>.00</InputGroup.Text></InputGroup></Col>
                                </Row>

                                <Row className='p-2'><Form.Label>Total Amount Owed</Form.Label><Col xs={6}><InputGroup><InputGroup.Text>$</InputGroup.Text><Form.Control type='currency' value='4,525' className='text-end' /><InputGroup.Text>.00</InputGroup.Text></InputGroup></Col></Row>    

                            </Form>

        </>
    )
}

const UDArea = () => {
    return (
        <h1>UD SELECTED</h1>
    )
}

const EVArea = () => {
    return (
        <h1>EMERGENCY SELECTED</h1>
    )
}
export default CaseModalTab1