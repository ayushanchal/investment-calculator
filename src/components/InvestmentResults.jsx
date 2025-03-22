import { calculateInvestmentResults, formatter } from "../util/investment";
import React from "react";

export default function InvestmentResults({ inputData }) {
  const annualData = calculateInvestmentResults(inputData);
  //console.log(inputData.initialInvestment);
  // console.log(inputData);
  // console.log(annualData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((row) => {
          return (
            <tr>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>
                {formatter.format(
                  row.valueEndOfYear -
                    (inputData.initialInvestment +
                      row.year * inputData.annualInvestment)
                )}
              </td>
              <td>
                {formatter.format(
                  inputData.initialInvestment +
                    row.year * inputData.annualInvestment
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
