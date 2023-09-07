//TODO: Add typescript to this file

interface ClickableProps {
  handleClick: () => void;
}

const Clickable: React.FC<ClickableProps> = ({ handleClick }) => {
  return <button onClick={handleClick}>Click Me!</button>;
};

export const OnClickQ = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Clickable handleClick={handleClick} />
    </>
  );
};
