import React from 'react';
import MortgageBox from './containers/MortgageBox';
import './App.css';

function App() {
  return (
  <MortgageBox
  title='Mortgage Calculator'
  incomeAmnt={10000}
  expenseAmnt={1000}/>
  );
}

export default App;
