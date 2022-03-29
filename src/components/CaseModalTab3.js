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
                        <td>1</td>
                        <td>3/15/2022</td>
                        <td>James J. Jonas</td>
                        <td>Case submitted by client</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3/18/2022</td>
                        <td>Jennifer Pate</td>
                        <td>Case filed with court</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>3/23/2022</td>
                        <td></td>
                        <td>Case accepted by court</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>3/23/2022</td>
                        <td></td>
                        <td>Hearing date and judge assigned</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>3/23/2022</td>
                        <td></td>
                        <td>Summons issued by court</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>3/24/2022</td>
                        <td>Jennifer Pate</td>
                        <td>Service requested by attorney</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>3/26/2022</td>
                        <td>Jennifer Pate</td>
                        <td>Summons posted to residence</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>3/28/2022</td>
                        <td>Sam Pitzel</td>
                        <td>Updated ledger requested</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Form.Control placeholder='Add new case status here' /></td>
                    </tr>
                </tfoot>
            </Table>

        </>
    )
}

export default CaseModalTab3