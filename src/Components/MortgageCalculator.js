import React, { Component } from 'react'
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import mortgageCalc from '../Img/mortgageCalc.jpg';
import questionMark from '../Img/question-mark.png';
import Summary from './Summary';
import Algorithm from '../Algorithm';

export class MortgageCalculator extends Component {
   
    constructor(){
        super()

        this.state = {
            mortgageAmount: '',
            interestRate: '',
            amortizationPeriod: '',
            paymentFrequency:'',
            term:1,
            prePaymentAmount:'',
            prePayementFrequency: '',
            startPayemnt:1,
            monthlyInterestRate:'',
            termMonths:'',
            monthlyRate:'',
            monthlyPayment:'',
            noOfPayementsTerm:'',
            noOfPaymentAmortPeriod:'',
            sampleValue: Algorithm.sampleValue,
            paymentSchedule: Algorithm.paymentSchedule,
            loanAmount:'',
            monthlyRate:'',
            months:'',
            mortgagePayment:'',
            termPrincipalPayments: '',
            amortPrincipalPayemnets:'',
            termInterestPayements: '',
            amortInterestPayements: '',
            termTotalCost:'',
            amortTotalCost:''


            //calculatePaymentSchedule:Algorithm.calculatePaymentSchedule
        }
    }

    onChangeMortgageAmount = (e) => {
        this.setState({
            mortgageAmount : e.target.value
        })
        console.log("mortgageAmount",this.state.mortgageAmount);
    }
    onChangeInterestRate = (e) => {
        this.setState({
            interestRate : e.target.value
        })
    }
    onChangeAmortizationPeriod = (e) => {
            this.setState({
                amortizationPeriod : e.target.value
        })
        console.log("amortizationPeriod",this.state.amortizationPeriod);
    }
    onChangePaymentFrequency = (e) => {
        this.setState({
            paymentFrequency : e.target.value
    })
    console.log("amortizationPeriod",this.state.amortizationPeriod);
    }
    onChangeTerm = (e) => {
    this.setState({
        term : e.target.value
    })
    console.log("amortizationPeriod",this.state.amortizationPeriod);
    }


    calculateMortgage = (mortgagenAmount, interestRate, amortizationPeriod) =>{

         this.setState({
            noOfPayementsTerm: this.state.term * this.state.paymentFrequency
        })
        this.setState({
            noOfPaymentAmortPeriod: this.state.amortizationPeriod * this.state.paymentFrequency
        })

        let mortgageParameters=Algorithm.calculatePayment(mortgagenAmount, interestRate, amortizationPeriod)
        let termCount= this.state.term * this.state.paymentFrequency
        let amortCount = this.state.amortizationPeriod * this.state.paymentFrequency
       
        //mortgageParameters.paymentSchedule.map((element) => {
            //console.log("element",element);
           
                this.state.termPrincipalPayments = mortgageParameters.paymentSchedule[termCount-1].totalPrincipalPaid
                console.log("totalPrincipalPaid",this.state.termPrincipalPayments);
            
           
                this.state.amortPrincipalPayemnets = mortgageParameters.paymentSchedule[amortCount-1].totalPrincipalPaid
            
                this.state.termInterestPayements = mortgageParameters.paymentSchedule[termCount-1].totalInterestPaid
            
           
                this.state.amortInterestPayements = mortgageParameters.paymentSchedule[amortCount-1].totalInterestPaid
            
                this.state.termTotalCost = mortgageParameters.paymentSchedule[termCount-1].totalMortgagePaid

                this.state.amortTotalCost =  mortgageParameters.paymentSchedule[amortCount-1].totalMortgagePaid

            this.state.mortgagePayment = mortgageParameters.paymentSchedule[termCount-1].mortgagePayment
        //})
        //this.state.mortgagePayment = mortgageParameters
       
        //console.log("fetched", this.state.mortgagePayment)
      

    }

    render() {
        return (
            <div>
                    <Row  className="justify-content-md-center">
                   <Col lg={8} md="auto" sm={12}>     
                   <h1 style= {headerDiv}>
                     <img src={mortgageCalc} style={calcImg}></img> 
                    <span style={headingSpan}>Mortgage Application</span>
                   </h1>
                    {/* <Row> */}
                        <span>
                            <strong>
                              From <a href= "https://www.canada.ca/en/financial-consumer-agency.html">Financial Consumer Agency Of Canada</a>
                            </strong>
                        </span>
                        <p>This calculator determines your mortgage payment and provides you with a mortgage payment schedule. The calculator also shows how much money and how many years you can save by making prepayments.
                        To help determine whether or not you qualify for a home mortgage based on income and expenses, visit the <a href= "https://itools-ioutils.fcac-acfc.gc.ca/MQ-HQ/MQ-EAPH-eng.aspx">Mortgage Qualifier Tool</a></p>
                       <p> <strong>Note:</strong> As of July 9, 2012, the maximum amortization period for mortgages with less than a 20 percent down payment is <strong>25 years</strong></p>
                    </Col>
                    </Row>
                    <Row  className="justify-content-md-center">
                    <Col lg={4} md={4}>
                        <section className= "panel panel-primary">
                            <header className= "card-heading">
                                <h3 className= "card-title" style={cardTitle}>Payment Plan</h3>
                                <div className= "card-body">
                                    <Row style= {datafieldsRow}>
                                    <div className= "mortgageAmount">
                                        <div style={dataDiv}>
                                       <input type= "image" src= {questionMark} style={helpIcon}></input>
                                        <label className= "card-text"><strong>Mortgage Amount:</strong></label>
                                        </div>
                                        <div>
                                        <span className="input-group-addon" style={moneyIcon}>$</span>
                                        <input type="text" placeholder="100,000.00" value = {this.state.mortgageAmount}  onChange= {this.onChangeMortgageAmount} maxlength="20" className="form-control" allowzero="false" style={inputField}></input>
                                        </div>
                                    </div>
                                    </Row>
                                    <Row style= {datafieldsRow}>
                                    <div className= "interestRate">
                                        <div style={dataDiv}>
                                        <input type= "image" src= {questionMark} style={helpIcon}></input>
                                        <label className= "card-text"><strong>Interest Rate:</strong></label>
                                        </div>
                                        <div>
                                        <span className="input-group-addon" style={moneyIcon}>$</span>
                                        <input type="text"  placeholder="5.00f em" value = {this.state.interestRate} onChange= {this.onChangeInterestRate} maxlength="20" className="form-control" allowzero="false" style={inputField}></input>
                                        </div>
                                    </div>
                                    </Row>
                                    <Row style= {datafieldsRow}>
                                    <div className= "amortizationPeriod">
                                        <div style={dataDiv}>
                                        <input type= "image" src= {questionMark} style={helpIcon}></input>
                                        <label className= "card-text"><strong>Amortization Period:</strong></label>
                                        </div>
                                        <div>
                                       <div>
                                           <select className= "form-control" value= {this.state.amortizationPeriod} onChange= {this.onChangeAmortizationPeriod}>
                                               {/* the data can come from an array described in state  */}
                                               <option value="1">1 year</option>
                                               <option value="5">5 year</option>
                                               <option value="15">15 year</option>
                                           </select>
                                       </div>
                                        </div>
                                    </div>
                                    </Row>
                                    <Row style= {datafieldsRow}>
                                    <div className= "paymentFrequency">
                                        <div style={dataDiv}>
                                        <input type= "image" src= {questionMark} style={helpIcon}></input>
                                        <label className= "card-text"><strong>Payment Frequency:</strong></label>
                                        </div>
                                        <div>
                                        <select  value= {this.state.paymentFrequency} onChange= {this.onChangePaymentFrequency} className= "form-control">
                                               {/* the data can come from an array described in state  */}
                                               <option value="52">Weekly</option>
                                               <option value="26">Accelarated Biweekly</option>
                                               <option value="26">Bi Weekly</option>
                                               <option value="24">Semi Monthly</option>
                                               <option value="12">Monthly</option>

                                        </select>
                                        </div>
                                    </div>
                                    </Row>
                                    <Row style= {datafieldsRow}>
                                    <div className= "term">
                                        <div style={dataDiv}>
                                        <input type= "image" src= {questionMark} style={helpIcon}></input>
                                        <label className= "card-text"><strong>Term:</strong></label>
                                        </div>
                                        <div>
                                        <select className= "form-control" value={this.state.term} onChange={this.onChangeTerm}>
                                               {/* the data can come from an array described in state  */}
                                               <option value="1">1 Year</option>
                                               <option value="2">2 Year</option>
                                               <option value="3">3 Year</option>
                                               <option value="4">4 Year</option>
                                               <option value="5">5 Year</option>
                                        </select>
                                        </div>
                                    </div>
                                    </Row>
                                    
                                </div>
                            </header>

                        </section>
                    </Col>
                    <Col lg={4} md={4}> <section className= "panel panel-primary">
                            <header className= "card-heading">
                                <h3 className= "card-title" style={cardTitle}>Prepayment Plan</h3>
                                <div className= "card-body">
                                    <Row style= {datafieldsRow}>
                                    <div className= "prePaymentAmount">
                                        <div style={dataDiv}>
                                       <input type= "image" src= {questionMark} style={helpIcon}></input>
                                        <label className= "card-text"><strong>Prepayment Amount:</strong></label>
                                        </div>
                                        <div>
                                        <span className="input-group-addon" style={moneyIcon}>$</span>
                                        <input type="text" placeholder="0.00" maxlength="20" className="form-control" allowzero="false" style={inputField}></input>
                                        </div>
                                    </div>
                                    </Row>
                                    <Row style= {datafieldsRow}>
                                    <div className= "prepaymentFrequency">
                                        <div style={dataDiv}>
                                        <input type= "image" src= {questionMark} style={helpIcon}></input>
                                        <label className= "card-text"><strong>Prepayment Frequency:</strong></label>
                                        </div>
                                        <div>
                                        <select className= "form-control">
                                               {/* the data can come from an array described in state  */}
                                               <option>One Time</option>
                                               <option>Each Year</option>
                                               <option>Same as regular payement</option>

                                        </select>
                                        </div>
                                    </div>
                                    </Row>
                                    <Row style= {datafieldsRow}>
                                    <div className= "startWithPayment">
                                        <div style={dataDiv}>
                                        <input type= "image" src= {questionMark} style={helpIcon}></input>
                                        <label className= "card-text"><strong>Start With Payment:</strong></label>
                                        </div>
                                        <div>
                                        <span className="input-group-addon" style={moneyIcon}>$</span>
                                        <input type="text" placeholder="1" maxlength="20" className="form-control" allowzero="false" style={inputField}></input>
                                        </div>
                                    </div>
                                    </Row>
                                    
                                </div>
                            </header>

                        </section>
                        </Col>
                        <Col lg={8} md="auto" sm={12}> 
                        <Row>
                        <div>
                        <input type= "submit" value="Calculate..." onClick={() => this.calculateMortgage(this.state.mortgageAmount,this.state.interestRate, this.state.amortizationPeriod)} style={CalcButton}/>
                        <div>{this.state.monthlyPayment}</div>
                        </div>
                        </Row>
                        </Col>
                    </Row>
                    <Row  className="justify-content-center">
                        <Col lg={8}>
                            <Summary 
                            amortTotalCost={this.state.amortTotalCost}
                            termTotalCost={this.state.termTotalCost}
                            termInterestPayements={this.state.termInterestPayements}
                            amortInterestPayements={this.state.amortInterestPayements}
                            mortgagePayment={this.state.mortgagePayment}
                            termPrincipalPayments={this.state.termPrincipalPayments}
                            amortPrincipalPayemnets={this.state.amortPrincipalPayemnets}
                            noOfPayementsTerm= {this.state.noOfPayementsTerm}
                            noOfPaymentAmortPeriod= {this.state.noOfPaymentAmortPeriod}
                            ></Summary>
                            {this.state.sampleValue}
                            </Col>    
                    </Row>

                   

            </div>
        )
    }
}

const calcImg= {
    height: '120px'
}
const headingSpan = {
    paddingBottom: '10px',
    fontSize: '40px'
}
const headerDiv = {
    borderBottomStyle: 'solid',
    borderBottomColor: '#DC143C'
}
const helpIcon = {
    height: '20px',

}
const moneyIcon = {
    padding: '10px 14px',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1',
    color: '#555',
    textAlign: 'center',
    backgroundColor: '#eee',
    border: '1px solid #ccc',
    borderRadius: '4px',
    float: 'left',
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0'
}
const inputField = {
    position: 'relative',
    zIndex: '2',
    float: 'left',
    marginBottom: '0',
    width: '252px',

}
const dataDiv = {
    //marginRight: '285px'
   
    textAlign:'start'
}
const datafieldsRow = {
    marginBottom: '10px'
}
const cardTitle ={
    textAlign: 'start'
}
const CalcButton= {
    backgroundColor: '#335075',
    color:'white',
    marginBottom: '10px',
    marginTop: '10px'
}

export default MortgageCalculator
