import classes from "./Outputs.module.css";

//CREATE A NEW OBJECT FORM Intl.NumberFormat CONSTRUCTOR
const currencyForm = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function Outputs(props) {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {props.data.map(
          (
            yData // NOTE WRITE () INSTEAD OF {}
          ) => (
            <tr key={yData.year}>
              <td>{yData.year}</td>
              <td>{currencyForm.format(yData.savingsEndOfYear)}</td>
              <td>{currencyForm.format(yData.yearlyInterest)}</td>
              <td>
                {currencyForm.format(
                  yData.savingsEndOfYear -
                    props.intInv -
                    yData.yearlyContribution * yData.year
                )}
              </td>
              <td>
                {currencyForm.format(
                  props.intInv + yData.yearlyContribution * yData.year
                )}
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
