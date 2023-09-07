//TODO: 1 - Add typescript to this file
//TODO: 2- Update the code so that clicking on 'Click Me' Increment the count
//TODO: 3- Update the code so the current count is logged out in the console when 'Submit' is clicked

import React from "react";

interface ClickableProps {
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Clickable = ({ handleClick }: ClickableProps) => {
  return <button onClick={handleClick}>Click Me!</button>;
};

export const OnSubmitQ = () => {
  const [count, setCount] = React.useState<number>(0);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    setCount(count + 1);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    e
  ) => {
    e.preventDefault();
    console.log(count, "submitted");
  };

  return (
    <>
      {count}
      <form onSubmit={handleSubmit}>
        <Clickable handleClick={handleClick} />
        <button>Submit</button>
      </form>
    </>
  );
};
