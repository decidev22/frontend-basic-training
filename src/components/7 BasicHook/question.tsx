//TODO: Add typescript to this file

import React, { MouseEventHandler, ReactEventHandler } from "react";

interface ClickableProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Clickable: React.FC<ClickableProps> = ({ handleClick }) => {
  return <button onClick={handleClick}>Click Me!</button>;
};

export const BasicHookQ = () => {
  const [count, setCount] = React.useState(0);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    console.log(e);
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <Clickable handleClick={handleClick} />
    </>
  );
};
