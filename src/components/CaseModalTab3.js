import React from 'react'
import { Form, Table } from 'react-bootstrap'

const CaseModalTab3 = () => {
    return (
        <>

            <Table striped bordered className='m-2'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>User</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>3/15/2022</th>
                        <th>James J. Jonas</th>
                        <th>Case submitted by client</th>
                    </tr>
                    <tr>
                        <th>2</th>
                        <th>3/18/2022</th>
                        <th>Jennifer Pate</th>
                        <th>Case filed with court</th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>3/23/2022</th>
                        <th></th>
                        <th>Case accepted by court</th>
                    </tr>
                    <tr>
                        <th>4</th>
                        <th>3/23/2022</th>
                        <th></th>
                        <th>Hearing date and judge assigned</th>
                    </tr>
                    <tr>
                        <th>5</th>
                        <th>3/23/2022</th>
                        <th></th>
                        <th>Summons issued by court</th>
                    </tr>
                    <tr>
                        <th>6</th>
                        <th>3/24/2022</th>
                        <th>Jennifer Pate</th>
                        <th>Service requested by attorney</th>
                    </tr>
                    <tr>
                        <th>7</th>
                        <th>3/26/2022</th>
                        <th>Jennifer Pate</th>
                        <th>Summons posted to residence</th>
                    </tr>
                    <tr>
                        <th>8</th>
                        <th>3/28/2022</th>
                        <th>Sam Pitzel</th>
                        <th>Updated ledger requested</th>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th><Form.Control placeholder='Add new case status here' /></th>
                    </tr>
                </tfoot>
            </Table>

        </>
    )
}

export default CaseModalTab3