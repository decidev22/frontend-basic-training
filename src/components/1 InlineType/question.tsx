// TODO: Add inline typing to these components

// Name should accept a parameter of string
const RocketName = ({ name }: { name: string }) => {
  return <label>Name: {name}</label>;
};

// ShowAge should accept a age parameter of number
function RocketAge({ age }: { age: number }) {
  return <label>Age: {age}</label>;
}

// There are three sizes "L", "M" and "S". It could be any one of the three
// interface RocketSizeProps {
//   size: "L"|"M"|"S"
// }

// Had moderate hard time, tried interface but found out you cannot really do it with 'funciton'.
function RocketSize({ size }: { size: "L" | "M" | "S" }) {
  return <label>Size: {size}</label>;
}

// SerialNumber should accept a string that starts with 'ROAM-'.
// I had no idea how to appraoch this at first.

function SerialNumber({ serial }: { serial: `ROAM-${string}` }) {
  return <label>Serial: {serial}</label>;
}

export const InlineTypeQ = () => (
  <>
    <ul>
      <li>
        <RocketName name="Roam Force One" />
      </li>
      <li>
        <RocketAge age={1} />
      </li>
      <li>
        <RocketSize size={"L"} />
      </li>
      <li>
        <SerialNumber serial="ROAM-1234567" />
        {/* <SerialNumber serial="1234567" /> //Typescript should throw an error for this*/}
      </li>
    </ul>
  </>
);
