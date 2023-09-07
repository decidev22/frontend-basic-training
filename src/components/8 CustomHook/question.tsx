//TODO: Add typescript to this file

import React, { useState } from "react";

interface ClickableProps {
  handleClick: () => void;
  label: string;
}

const Clickable = ({ handleClick, label }: ClickableProps) => {
  return <button onClick={handleClick}>{label}</button>;
};

const useCounter = (initialValue: number) => {
  //TODO: create a custom hook
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};

export const CustomHookQ = () => {
  const { count, increment, decrement } = useCounter(0);
  return (
    <>
      <h3>{count}</h3>
      <Clickable handleClick={increment} label="+" />
      <Clickable handleClick={decrement} label="-" />
    </>
  );
};
