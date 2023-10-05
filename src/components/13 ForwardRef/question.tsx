// TODO: Modify the code so that on page load, the second MyCustomInput input field receives focus
// TODO: Add typescript to this file

import { useEffect, useRef, forwardRef } from "react";

// Q - usage of forwardRef
// const FancyButton = React.forwardRef((props, ref) => (
//   <button ref={ref} className="FancyButton">
//     {props.children}
//   </button>
// ));

const MyCustomInput = forwardRef<HTMLInputElement, { label: string }>(
  ({ label }, ref) => (
    <>
      <label>{label}</label>
      <input ref={ref}></input>
    </>
  )
);

export const ForwardRefQ = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current!.focus();
  }, []);
  return (
    <>
      <ul>
        <li>
          <MyCustomInput label="Customized 1"></MyCustomInput>
        </li>
        <li>
          <MyCustomInput
            label="Second Input"
            ref={ref}
          ></MyCustomInput>
        </li>
      </ul>
    </>
  );
};
