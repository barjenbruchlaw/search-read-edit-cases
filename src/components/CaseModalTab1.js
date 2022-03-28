import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const CaseModalTab1 = () => {


    const [showRentArea, setShowRentArea] = useState(false)

    {/*    
    const [showUDArea, setShowUDArea] = useState(false)
    const handleUDShow = setShowUDArea(true)
    const handleUDHide = setShowUDArea(false)

    const [showEVArea, setShowEVArea] = useState(false)
    const handleEVShow = setShowEVArea(true)
    const handleEVHide = setShowEVArea(false)
*/}


    return (
        <>
            <Form.Check
                type='switch'
                onChange={e => setShowRentArea(e.target.value)}
                label='Is rent delinquent?' />

            {showRentArea ? <RentArea /> : null}

        </>

    )
}

const RentArea = () => {
    return (
        <h1>RENT SELECTED</h1>
    )
}

export default CaseModalTab1