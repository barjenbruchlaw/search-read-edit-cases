import React from 'react'
import { Container, Row, Col, Form, Modal, Tabs, Tab, Button, Table } from 'react-bootstrap'

const CaseModalTab2 = () => {
  return (
    <>
        <Table bordered className='m-2'>
            <tbody>
                <tr>
                    <th>Jurisdiction</th>
                    <th>Jackson County, MO</th>
                </tr>
                <tr>
                    <th>Case Number</th>
                    <th>2216-CV00000</th>
                </tr>
                <tr>
                    <th>Judge assigned</th>
                    <th>Judge Mary F. Weir</th>
                </tr>
                <tr>
                    <th>Division</th>
                    <th>31</th>
                </tr>
                <tr>
                    <th>Date of next hearing</th>
                    <th>4/1/2022</th>
                </tr>
                <tr>
                    <th>Time of next hearing</th>
                    <th>9:30 a.m.</th>
                </tr>
                <tr>
                    <th>Date of dismissal</th>
                    <th></th>
                </tr>
                <tr>
                    <th>Date of judgment</th>
                    <th></th>
                </tr>
                <tr>
                    <th>Date of writ</th>
                    <th></th>
                </tr>
            </tbody>
        </Table>
    </>
  )
}

export default CaseModalTab2