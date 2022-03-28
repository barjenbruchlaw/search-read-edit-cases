import React from 'react'
import { Container, Row, Col, Form, Modal, Tabs, Tab, Button, Table } from 'react-bootstrap'

const CaseModalTab3 = () => {
  return (
    <>
    
    <Table striped bordered className='m-2'>
        <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>1</th>
                <th>3/15/2022</th>
                <th>Case submitted by client</th>
            </tr>
            <tr>
                <th>2</th>
                <th>3/18/2022</th>
                <th>Case filed with court</th>
            </tr>
            <tr>
                <th>3</th>
                <th>3/23/2022</th>
                <th>Case accepted by court</th>
            </tr>
            <tr>
                <th>4</th>
                <th>3/23/2022</th>
                <th>Hearing date and judge assigned</th>
            </tr>
        </tbody>
    </Table>
    
    </>
  )
}

export default CaseModalTab3