import React, {Component, Fragment} from 'react';

class MortgageBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      total: 0,
      rate: 2,
      annualInterest: 0,
      monthlyInterest: 0
    }
    this.incomeAmnt = this.income.bind(this);
    this.expenseAmnt = this.expense.bind(this);
    this.annualInterest = this.annualInterest.bind(this);
    this.monthlyInterest = this.monthlyInterest.bind(this);
    this.annualPayment = this.annualPayment.bind(this);
    this.monthlyPayment = this.monthlyPayment.bind(this);
  }

  income(){
    this.setState(prevState => {
      return {total: prevState.total + this.props.incomeAmnt};
    }, () => {
      this.annualInterest();
      this.annualPayment();
      this.monthlyInterest();
      this.monthlyPayment();
    });
  }

   expense(){
     this.setState(prevState => {
       return {total: prevState.total - this.props.expenseAmnt}
     }, () => {
       this.annualInterest();
       this.annualPayment();
       this.monthlyInterest();
       this.monthlyPayment();
     })
    }

    annualInterest(){
      this.setState(prevState => {
        return {annualInterest: (this.state.total * (this.state.rate / 100))}
      })
    }

    monthlyInterest(){
      this.setState(prevState => {
        return {monthlyInterest: ((this.state.total * (this.state.rate / 100))/12)}
      })
    }

    annualPayment(){
      this.setState(prevState => {
        return {annualPayment: ((this.state.total/20) + this.state.annualInterest)}
      })
    }

    monthlyPayment(){
      this.setState(prevState => {
        return {monthlyPayment: ((this.state.annualPayment/12))}
      })
    }

    render(){
      return (
        <Fragment>
          <h1>{this.props.title}</h1>
          <p>Total Income to borrow against: £{this.state.total}</p>
          <p>Rate: %{this.state.rate}</p>
          <p>Annual Interest: £{this.state.annualInterest}</p>
          <p>Annual Payment: £{this.state.annualPayment}</p>
          <p>Monthly Interest: £{this.state.monthlyInterest}</p>
          <p>Monthly Payment: £{this.state.monthlyPayment}</p>
          <button onClick={this.incomeAmnt}>Increase Income</button>
          <button onClick={this.expenseAmnt}>Subtract Expense</button>
        </Fragment>
      )
     }
  }

export default MortgageBox;
