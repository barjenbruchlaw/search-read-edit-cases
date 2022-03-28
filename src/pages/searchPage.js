import React, { useState } from 'react'
import { Table, Modal, Form, Button } from 'react-bootstrap'
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

      <Form className='ps-5 ms-5'>
        <Form.Control style={{ width: '60vw' }} placeholder='Search by Property Manager, Defendant or Address' />
      </Form> <br /> <br />

      <Table striped bordered hover className='m-2'>
        <thead className='fs-3'>
          <tr>
            <th>#</th>
            <th>Date placed</th>
            <th>Case number</th>
            <th>Property Manager</th>
            <th>Property Owner</th>
            <th>Defendant 1</th>
            <th>Address</th>
            <th>View/Edit</th>
          </tr>
        </thead>
        <tbody className='fs-5'>
          <tr>
            <th>1</th>
            <th>2022-01-21</th>
            <th>2216-CV00000</th>
            <th>ABC Company</th>
            <th>123 Main, LLC</th>
            <th>John L. Smith</th>
            <th>1234 Main Street #101</th>
            <th><Button onClick={handleShow}>View/Edit</Button></th>
          </tr>
          <tr>
            <th>2</th>
            <th>2022-02-01</th>
            <th>2216-CV00000</th>
            <th>ABC Company</th>
            <th>123 Main, LLC</th>
            <th>Mary A. Jones</th>
            <th>1234 Main Street #201</th>
            <th><Button disabled>View/Edit</Button></th>
          </tr>
          <tr>
            <th>3</th>
            <th>2022-02-10</th>
            <th>EF000000</th>
            <th>ABC Company</th>
            <th>123 Main, LLC</th>
            <th>Frank R. Baker</th>
            <th>1234 Main Street #302</th>
            <th><Button disabled>View/Edit</Button></th>
          </tr>
          <tr>
            <th>4</th>
            <th>2022-02-21</th>
            <th></th>
            <th>ABC Company</th>
            <th>123 Main, LLC</th>
            <th>Jane M. Jones</th>
            <th>1234 Main Street #405</th>
            <th><Button disabled>View/Edit</Button></th>
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