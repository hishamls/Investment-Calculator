import classes from "./Header.module.css";
import logo from "../../assets/investment-calculator-logo.png";

export default function Header(props) {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
