import React from 'react'
import { Container, Row, Col, Form, Modal, Tabs, Tab, Button } from 'react-bootstrap'

const CaseModalTab4 = () => {
  return (
    <>

    <Container className='py-5 mx-5'>

        <Row className='my-4'>
            <Col xs={2} />
            <Col xs={3}>
                <Button>Request updated ledger</Button>
            </Col>
            <Col xs={2} />
            <Col xs={3}>
                Last request: 3/28/2022
            </Col>
            <Col xs={2} />
        </Row>
        <Row className='my-4'>
            <Col xs={2} />
            <Col xs={3}>
                <Button>Request dismissal</Button>
            </Col>
            <Col xs={2} />
            <Col xs={3}>
                Last request: N/A
            </Col>
            <Col xs={2} />
        </Row>
        <Row className='my-4'>
            <Col xs={2} />
            <Col xs={3}>
                <Button>Request writ</Button>
            </Col>
            <Col xs={2} />
            <Col xs={3}>
                Last request: N/A
            </Col>
            <Col xs={2} />
        </Row>

    </Container>    
    
    </>
  )
}

export default CaseModalTab4