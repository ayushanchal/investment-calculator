import React from "react";
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";
import Header from "./components/Header";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentResults from "./components/InvestmentResults";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1200,
    annualInvestment: 100,
    expectedReturn: 5,
    duration: 5,
  });
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputField, value) {
    setUserInput((initalValue)=>{return {...initalValue, [inputField]: +value}});
  }


  return (
    <>
      <Header />
      <InvestmentForm userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <InvestmentResults inputData={userInput} />}
    </>
  );
}

export default App;
