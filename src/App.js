import { useState } from "react";
import Header from "./components/header/Header";
import Inputs from "./components/inputs/Inputs";
import Outputs from "./components/outputs/Outputs";

function App() {
  const [inputsState, setInputsState] = useState({});
  const yearlyData = [];

  const calculateHandler = (userInput) => {
    setInputsState(userInput);
  };

  if (inputsState) {
    let currentSavings = +inputsState["currSave"];
    const yearlyContribution = +inputsState.yearSave;
    const expectedReturn = +inputsState.expSave / 100;
    const duration = +inputsState["durSave"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <>
      <Header />
      <Inputs onCalculate={calculateHandler} />
      {/* Show fallback text if no data is available */}
      <Outputs data={yearlyData} intInv={inputsState.currSave} />
    </>
  );
}

export default App;
