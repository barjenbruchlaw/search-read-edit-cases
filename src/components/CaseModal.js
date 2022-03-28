import React from 'react'
import { Modal, Tabs, Tab } from 'react-bootstrap'
import CaseModalTab1 from './CaseModalTab1'
import CaseModalTab2 from './CaseModalTab2'
import CaseModalTab3 from './CaseModalTab3'
import CaseModalTab4 from './CaseModalTab4'
import CaseModalTab5 from './CaseModalTab5'
import CaseModalTab9 from './CaseModalTab9'
import CaseModalTab99 from './CaseModalTab99'

const CaseModal = () => {
    return (
        <>

            <Modal.Body>

                <Tabs className='p-4'>

                    <Tab eventKey='Parties/Address' title='Parties/Address'>
                        <CaseModalTab1 />
                    </Tab>

                    <Tab eventKey='Court information' title='Court information'>
                        <CaseModalTab2 />
                    </Tab>

                    <Tab eventKey='Case status' title='Case Status'>
                        <CaseModalTab3 />
                    </Tab>

                    <Tab eventKey='Service information' title='Service information'>
                        <CaseModalTab4 />
                    </Tab>

                    <Tab eventKey='Documents' title='Documents'>
                        <CaseModalTab5 />
                    </Tab>

                    <Tab eventKey='Case requests' title='Case Requests'>
                        <CaseModalTab9 />
                    </Tab>

                    <Tab eventKey='Messages' title='Messages'>
                        <CaseModalTab99 />
                    </Tab>

                </Tabs>

            </Modal.Body>



        </>
    )
}

export default CaseModal