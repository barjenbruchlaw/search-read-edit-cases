import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

const CaseModalTab2 = () => {
    return (
        <>
            <Container className='ms-4 pe-5'>
                <Row className='py-2'>
                    <Col xs={3}>Jurisdiction</Col>
                    <Col>
                        <Form.Select>
                            <option>County</option>
                            <option value="KS1">Douglas County, KS</option>
                            <option value="KS2">Johnson County, KS</option>
                            <option value="KS3">Leavenworth County, KS</option>
                            <option value="KS4">Wyandotte County, KS</option>
                            <option value="MO1">Boone County, MO</option>
                            <option value="MO2">Buchanan County, MO</option>
                            <option value="MO3">Cass County, MO</option>
                            <option value="MO4">Clay County, MO</option>
                            <option value="MO5" selected>Jackson County, MO</option>
                            <option value="MO6">Johnson County, MO</option>
                            <option value="MO7">Lafayette County, MO</option>
                            <option value="MO8">Platte County, MO</option>
                            <option value="MO9">Ray County, MO</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className='py-2'>

                    <Col xs={3}>Case Number</Col>
                    <Col><Form.Control value="2216-CV00000" /></Col>

                </Row>
                <Row className='py-2'>
                    <Col xs={3}>Judge assigned</Col>
                    <Col>Judge Mary F. Weir</Col>
                </Row>
                <Row className='py-2'>

                    <Col xs={3}>Division</Col>
                    <Col><Form.Control value="31" /></Col>

                </Row>
                <Row className='py-2'>

                    <Col xs={3}>Date of next hearing</Col>
                    <Col><Form.Control value='04/01/2022' /></Col>

                </Row>
                <Row className='py-2'>

                    <Col xs={3}>Time of next hearing</Col>
                    <Col><Form.Control value='09:30 AM' /></Col>

                </Row>
                <Row className='py-2'>

                    <Col xs={3}>Date of dismissal</Col>
                    <Col><Form.Control type='date' /></Col>

                </Row>
                <Row className='py-2'>

                    <Col xs={3}>Date of judgment</Col>
                    <Col><Form.Control type='date' /></Col>

                </Row>
                <Row className='py-2'>

                    <Col xs={3}>Date of writ</Col>
                    <Col><Form.Control type='date' /></Col>

                </Row>
            </Container>
        </>
    )
}

export default CaseModalTab2