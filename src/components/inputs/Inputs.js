import classes from "./Inputs.module.css";
import Button from "../ui/button/Button";
import { useState } from "react";

export default function Inputs(props) {
  const initStates = {
    currSave: 10000,
    yearSave: 1200,
    expSave: 7,
    durSave: 5,
  };

  let [InputsState, setInputs] = useState(initStates);

  // const changeHandler = (id, value) => {
  //   setInputs((preInputs) => {
  //     return {
  //       ...preInputs,
  //       [id]: +value,
  //     };
  //   });
  // };

  //SAME:_
  const changeHandler = (e) => {
    setInputs({ ...InputsState, [e.target.id]: +e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(InputsState);
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setInputs(initStates);
  };

  return (
    <form
      className={classes.form}
      onSubmit={submitHandler}
      onReset={resetHandler}
    >
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="currSave" // MUST EQUAL THE PROPERTY NAME
            key="currSave"
            value={InputsState.currSave}
            onChange={changeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearSave"
            key="yearSave"
            value={InputsState.yearSave}
            onChange={changeHandler}
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expSave"
            key="expSave"
            value={InputsState.expSave}
            onChange={changeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="durSave"
            key="durSave"
            value={InputsState["durSave"]}
            onChange={changeHandler}
          />
        </p>
      </div>

      <p className={classes.actions}>
        <Button
          type="reset"
          // className={classes.buttonAlt} // WORKS ALSO
          // onClick={resetHandler} //  WORKS ALSO
        >
          Reset
        </Button>
        <Button type="submit">Calculate</Button>
      </p>
    </form>
  );
}
