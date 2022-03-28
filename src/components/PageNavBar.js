import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons'
import { HouseDoorFill } from 'react-bootstrap-icons'
import { BookmarkCheck } from 'react-bootstrap-icons'
import { FileEarmarkFill } from 'react-bootstrap-icons'
import { FolderFill } from 'react-bootstrap-icons'
import { ListCheck } from 'react-bootstrap-icons'
import { CurrencyDollar } from 'react-bootstrap-icons'
import { FileEarmarkBarGraph } from 'react-bootstrap-icons'
import { Gear } from 'react-bootstrap-icons'
import { GearFill } from 'react-bootstrap-icons'
import '../bootstrap.min.css'

const PageNavBar = () => {
  return (
    <Navbar bg="light">
      <Container className='fw-bold text-center'>
        <Nav.Link href="/"><HouseDoorFill className='fs-3 m-1' /><br />Dashboard</Nav.Link>
        <Nav.Link href="/search"><Search className='fs-3 m-1' /><br />Search for a case</Nav.Link>
        <Nav.Link href="/addCasePage1" disabled><BookmarkCheck className='fs-3 m-1' /><br />Add new case</Nav.Link>
        <Nav.Link href="#createdoc" disabled><FileEarmarkFill className='fs-3 m-1' /><br />Create Documents</Nav.Link>
        <Nav.Link href="#filecase" disabled><FolderFill className='fs-3 m-1' /><br />File case with court</Nav.Link>
        <Nav.Link href="#docket" disabled><ListCheck className='fs-3 m-1' /><br />Prepare docket for court</Nav.Link>
        <Nav.Link href="#report" disabled><FileEarmarkBarGraph className='fs-3 m-1' /><br />Prepare reports</Nav.Link>
        <Nav.Link href="#invoice" disabled><CurrencyDollar className='fs-3 m-1' /><br />Prepare invoices</Nav.Link>
        <Nav.Link href="/system" disabled><Gear className='fs-3 m-1' /><br />System Maintenance</Nav.Link>
        <Nav.Link href="#settings" disabled><GearFill className='fs-3 m-1' /><br />Settings</Nav.Link>
      </Container>
    </Navbar>
  )
}

export default PageNavBar

