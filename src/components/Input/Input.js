import "./Input.scss";
import { forwardRef } from "react";
export const Input = forwardRef((props, ref) => {
  return (
    <div className="Input">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.value}
        ref={ref}
      />
    </div>
  );
});
