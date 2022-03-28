import React from 'react'
import { Container, Row, Col, Form, Modal, Tabs, Tab, Button } from 'react-bootstrap'
import CaseModalTab1 from './CaseModalTab1'
import CaseModalTab2 from './CaseModalTab2'
import CaseModalTab3 from './CaseModalTab3'
import CaseModalTab4 from './CaseModalTab4'

const CaseModal = () => {
  return (
    <>
    
    <Modal.Body>

    <Tabs className='fs-5 mb-3 px-4'>

        <Tab eventKey='Parties/Address' title='Parties/Address'>
            <CaseModalTab1 />
        </Tab>

        <Tab eventKey='Court information' title='Court information'>
            <CaseModalTab2 />
        </Tab>


        <Tab eventKey='Case Status' title='Case Status'>
            <CaseModalTab3 />
        </Tab>

        <Tab eventKey='Case Requests' title='Case Requests'>
            <CaseModalTab4 />
        </Tab>

    </Tabs>

    </Modal.Body>

    
    
    </>
  )
}

export default CaseModal