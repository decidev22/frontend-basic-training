//TODO: Add typescript to this file

import React from "react";

interface ClickableProps {
  handleClick: () => void;
  label: string;
}

const Clickable = ({ handleClick, label }: ClickableProps) => {
  return <button onClick={handleClick}>{label}</button>;
};

const reducer = (state: { count: number }, action: string) => {
  //TODO: create a reducer that accept two types of actions - 'increment' and 'decrement'
  if (action === "increment") {
    return { count: state.count + 1 };
  }
  if (action === "decrement") {
    return { count: state.count - 1 };
  } else {
    throw Error;
  }
  return state;
};

export const UseReducerQ = () => {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });
  return (
    <>
      <h2>Exercise 13</h2>
      <h3>{state.count}</h3>
      <Clickable
        handleClick={() => dispatch("increment")}
        label="+"
      />
      <Clickable
        handleClick={() => dispatch("decrement")}
        label="-"
      />
      {/* THIS SHOULD THROW TYPESCRIPT ERROR => <Clickable handleClick={() => dispatch("nothing")} label="-" /> */}
    </>
  );
};
