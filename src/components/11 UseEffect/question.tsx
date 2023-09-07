// TODO: Modify the code so that on page load, the page calls the 'fetchData' function once

import { useEffect } from "react";

const fetchData = () => {
  console.log("fetching data...");
};

//UseEffect
//Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

//useEffect(() => { ... }, []): Runs once after the initial render (like componentDidMount in class components).

// useEffect(() => { ... }, [someVar]): Runs after the initial render and every time someVar changes.

// useEffect(() => { ... }): Runs after every render, including the initial render.

export const UseEffectQ = () => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};
