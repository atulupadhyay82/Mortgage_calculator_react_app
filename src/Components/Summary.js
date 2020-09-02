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
                            <td>Some value</td>
                            <td>Sample value</td>
                            </tr>
                            <tr>
                            <td>Mortgage Payment</td>
                            <td>Some value</td>
                            <td>Sample value</td>
                            </tr>
                            <tr>
                            <td>Prepayment</td>
                            <td>Some value</td>
                            <td>Sample value</td>
                            </tr>
                            <tr>
                            <td>Principal Payments</td>
                            <td>Some value</td>
                            <td>Sample value</td>
                            </tr>
                            <tr>
                            <td>Interest Payments</td>
                            <td>Some value</td>
                            <td>Sample value</td>
                            </tr>
                            <tr>
                            <td>Total Cost</td>
                            <td>Some value</td>
        <td>{this.props.monthlyPayment}</td>
                            </tr>
                        </tbody>
                    </Table>

               </Col>
           </Row>
           <Row>
            <Col lg={12}>
            <h2><strong>Mortgage Summary</strong></h2>
            </Col>
           </Row>
           <Row>
          
           <p>Over the 25-year amortization period, you will:</p>
           </Row>
           <Row>
           <ul>
           <li style={listStyle}>have made <strong></strong> monthly (12x per year) payments of <strong></strong></li>
           <li style={listStyle}>have paid $<strong></strong> in principal, $<strong></strong> in interest, for a total of $<strong></strong>.</li>
           </ul>
           </Row>
          
           <Row>
              
           <p>Over the 5-year term, you will:</p>
           </Row>
           <Row>
           <ul>
           <li style={listStyle}>have made <strong></strong> monthly (12x per year) payments of <strong></strong></li>
           <li style={listStyle}>have paid $<strong></strong> in principal, $<strong></strong> in interest, for a total of $<strong></strong>.</li>
           </ul>
           
           </Row>
           <Row>
              
           <p>At the end of your 5-year term, you will:</p>
           </Row>
           <Row>
           <ul>
           <li style={listStyle}>have a balance of $<strong></strong></li>
           </ul>
           
           </Row>
            
           </div>
        )
    }
}

const listStyle ={
    //marginLeft: '100px'
}

export default Summary
