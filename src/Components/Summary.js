import React, { Component } from 'react';
import { Row, Col,Table} from 'react-bootstrap';

export class Summary extends Component {
    render() {
        return (
            <div>
           <Row className="justify-content-md-center">
               <Col lg={12} md= {12}>
                   <strong> Calculation Summary</strong>
                    <Table striped bordered hover size="lg" responsive>
                        <thead>
                            <tr>
                                <th> <strong>Category</strong></th>
                                <th> <strong>Term</strong></th>
                                <th> <strong>Amortization Period</strong></th>
                            </tr>
                           </thead> 
                        <tbody>
                            <tr>
                            <td>Number of Payments</td>
                            <td>{this.props.noOfPayementsTerm}</td>
                            <td>{this.props.noOfPaymentAmortPeriod}</td>
                            </tr>
                            <tr>
                            <td>Mortgage Payment</td>
                            <td>{this.props.mortgagePayment}</td>
                            <td>{this.props.mortgagePayment}</td>
                            </tr>
                            <tr>
                            <td>Principal Payments</td>
                            <td>{this.props.termPrincipalPayments}</td>
                            <td>{this.props.amortPrincipalPayemnets}</td>
                            </tr>
                            <tr>
                            <td>Interest Payments</td>
                            <td>{this.props.termInterestPayements}</td>
                            <td>{this.props.amortInterestPayements}</td>
                            </tr>
                            <tr>
                            <td>Total Cost</td>
                            <td>{this.props.termTotalCost}</td>
                            <td>{this.props.amortTotalCost}</td>
                            </tr>
                        </tbody>
                    </Table>

               </Col>
           </Row>
                    
           </div>
        )
    }
}

const listStyle ={
    //marginLeft: '100px'
}

export default Summary