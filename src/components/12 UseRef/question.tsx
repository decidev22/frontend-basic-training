// TODO: Modify the code so that on page load, the second input field receives focus
// TODO: Add typescript to this file

import { useEffect, useRef } from "react";

export const UseRefQ = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current!.focus();
  }, []);

  return (
    <>
      <ul>
        <li>
          <input></input>
        </li>
        <li>
          <input ref={ref}></input>
        </li>
      </ul>
    </>
  );
};
