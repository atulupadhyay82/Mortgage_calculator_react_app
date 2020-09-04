// constructor() {
//     this.loanAmount= 1;
//    this.months= 1;
//    this.monthlyRate=1;
//    this.sampleValue= "hello sir";
// }
let sampleValue = "hello sir";
let loanAmount= 1;
let monthlyRate= 4.32;
let termMonths= 1;
let months= 1;

class Algorithm 
{

  static calculateMonthlyPIPayment(loanAmount, monthlyRate, termMonths) {
             
        let monthlyPayment = (monthlyRate * loanAmount * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
      //  console.log("monthlyPayment", monthlyPayment);
        return monthlyPayment;
    }
    
    static calculatePaymentSchedule(loanAmount, monthlyRate, months) {
        // console.log("loan",loanAmount);
        // console.log("monthlyRate",monthlyRate);
        // console.log("months",months);
    
        let monthlyPayment=Algorithm.calculateMonthlyPIPayment(loanAmount, monthlyRate, months)
        console.log("monthly payment", monthlyPayment)
        let principal=loanAmount
        console.log("principal", principal)
        let totalInterest=0
        let totalPayments=0
        let totalPrincipal=0
        let i=0
        let payments = []
    
        while (principal > 0 && i < (months)) {
            let interestPayment = principal * monthlyRate
            let principalPayment = monthlyPayment - interestPayment 
            if (principal > principalPayment) {
                principal= principal - principalPayment
            }
            else {
                principalPayment = principal
                principal=0
            }
            let totalPayment = interestPayment + principalPayment; 
            totalInterest += interestPayment;
            totalPrincipal +=principalPayment;
            totalPayments +=totalPayment
            payments[i] = {
                count: i+1,
                monthlyInterestPayment: interestPayment,
                totalInterestPaid: totalInterest,
                monthlyPrincipalPayment: principalPayment,
                mortgagePayment: totalPayment,
                totalPrincipalPaid: totalPrincipal,
                totalMortgagePaid: totalPayments,
                balance: principal
            };
            i++;
        }
        console.log("payments array", payments);
        return payments;
    }
    
    static calculatePayment(loanAmount, annualRate, amortizationPeriod){
        // this.setState({
        //     noOfPayementsTerm: this.state.term * this.state.paymentFrequency
        // })
        // this.setState({
        //     noOfPaymentAmortPeriod: this.state.amortizationPeriod * this.state.paymentFrequency
        // })
        // let loanAmount=this.state.mortgageAmount

       
        let months= amortizationPeriod * 12
        let monthlyRate= annualRate / 1200
        
        console.log("loan",loanAmount);
        console.log("monthlyRate",monthlyRate);
        console.log("months",months);
        var paymentSchedule = Algorithm.calculatePaymentSchedule(loanAmount, monthlyRate, months)
        console.log("paymentSchedule",paymentSchedule);
        let piPayment = paymentSchedule.length ? paymentSchedule[0].mortgagePayment : 0   
        return {
            loanAmount: loanAmount,
            principalAndInterest: piPayment,
            termMonths: months,
            paymentSchedule: paymentSchedule
        };
    }
}


export default Algorithm;
