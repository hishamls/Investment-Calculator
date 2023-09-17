// import classes from "./Input.module.css";

export default function Input(props) {
  return (
    <div>
      <label htmlFor="current-savings">{props.children}</label>
      <input type="number" id="current-savings" />
    </div>
  );
}
