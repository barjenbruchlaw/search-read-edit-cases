import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const CaseModalTab1 = () => {

    const [showRentArea, setShowRentArea] = useState(true)

    const [showUDArea, setShowUDArea] = useState(false)

    const [showEVArea, setShowEVArea] = useState(false)



    return (
        <div className='mt-3'>
        Is rent delinquent?
            <Form.Check
                className='ms-3'
                inline
                type='radio'
                name='isRentDelinquent'
                checked='true'
                onChange={e => setShowRentArea(true)}
                label='Yes' />
            <Form.Check
                inline
                type='radio'
                name='isRentDelinquent'
                onChange={e => setShowRentArea(false)}
                label='No' />
            
            {showRentArea ? <RentArea /> : null}

        <br />
        Is there a lease violation?
            <Form.Check
                className='ms-3'
                inline
                type='radio'
                name='isLeaseViolation'
                onChange={e => setShowUDArea(true)}
                label='Yes' />
            <Form.Check
                inline
                type='radio'
                name='isLeaseViolation'
                checked='true'
                onChange={e => setShowUDArea(false)}
                label='No' />
            
            {showUDArea ? <UDArea /> : null}

        <br />
        Is this an emergency eviction?
            <Form.Check
                className='ms-3'
                inline
                type='radio'
                name='isEmergencyEviction'
                onChange={e => setShowEVArea(true)}
                label='Yes' />
            <Form.Check
                inline
                type='radio'
                name='isEmergencyEviction'
                checked='true'
                onChange={e => setShowEVArea(false)}
                label='No' />
            
            {showEVArea ? <EVArea /> : null}

        <br />
        </div>

    )
}

const RentArea = () => {
    return (
        <h1>RENT SELECTED</h1>
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