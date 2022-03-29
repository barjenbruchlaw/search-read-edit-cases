import React, { useState } from 'react'
import { Container, Row, Col, Table, Modal, Form, Button } from 'react-bootstrap'
import PageNavBar from '../components/PageNavBar'
import CaseModal from '../components/CaseModal'

const SearchPage = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <PageNavBar />

      <h1 className='m-5 pt-5'>Search for a case:</h1>
      
      <Form>
      <Container>
        <Row>
      <Col xs={7}><Form.Label>Search by Property Manager, Owner, Defendant, Case Number or Address:</Form.Label><Form.Control /></Col>
      <Col />
      <Col xs={4}><Form.Label>Search by Hearing Date</Form.Label><Form.Control type='date' /></Col>
      </Row>
      <Row className='py-3' />
      </Container>
      </Form>
        

      <Table striped bordered hover size='sm' className='m-2'>
        <thead>
          <tr>
            <th><Form.Check /></th>
            <th>#</th>
            <th>Date placed</th>
            <th>Case number</th>
            <th>Property Manager</th>
            <th>Property Owner</th>
            <th>Defendant 1</th>
            <th>Address</th>
            <th>Jurisdiction</th>
            <th>Next hearing</th>
            <th>View/Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Form.Check /></td>
            <td>1</td>
            <td>2022-01-21</td>
            <td>2216-CV00000</td>
            <td>ABC Company</td>
            <td>123 Main, LLC</td>
            <td>John L. Smith</td>
            <td>1234 Main Street #101</td>
            <td>Jackson County (Kansas City), MO</td>
            <td>4/1/2022</td>
            <td><Button onClick={handleShow}>View/Edit</Button></td>
          </tr>
          <tr>
            <td><Form.Check /></td>
            <td>2</td>
            <td>2022-02-01</td>
            <td>2216-CV00000</td>
            <td>ABC Company</td>
            <td>123 Main, LLC</td>
            <td>Mary A. Jones</td>
            <td>1234 Main Street #201</td>
            <td>Jackson County (Kansas City), MO</td>
            <td>4/15/2022</td>
            <td><Button disabled>View/Edit</Button></td>
          </tr>
          <tr>
            <td><Form.Check /></td>
            <td>3</td>
            <td>2022-02-10</td>
            <td>EF000000</td>
            <td>ABC Company</td>
            <td>123 Main, LLC</td>
            <td>Frank R. Baker</td>
            <td>1234 Main Street #302</td>
            <td>Jackson County (Kansas City), MO</td>
            <td></td>
            <td><Button disabled>View/Edit</Button></td>
          </tr>
          <tr>
            <td><Form.Check /></td>
            <td>4</td>
            <td>2022-02-21</td>
            <td></td>
            <td>ABC Company</td>
            <td>123 Main, LLC</td>
            <td>Jane M. Jones</td>
            <td>1234 Main Street #405</td>
            <td>Jackson County (Kansas City), MO</td>
            <td></td>
            <td><Button disabled>View/Edit</Button></td>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} size='xl'>
        <Modal.Header className='bg-light' closeButton>
          <Modal.Title>View or Edit Case</Modal.Title>
        </Modal.Header>

        <CaseModal />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default SearchPage