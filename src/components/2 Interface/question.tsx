// TODO: Create a RocketInfoProps interface and use it in the code
// Name should accept a parameter of string and should be optional
// ShowAge should accept a age parameter of number and is required
// Size can be any one of the three; "L", "M" and "S" and is optional
// Pilot is an object with first and last name. The object is required, but last name is optional

// Did not have to look at solution, (yet)

interface RocketInfoProps {
  name?: string;
  age: number;
  size?: "L" | "M" | "S";
  pilot: {
    firstName: string;
    lastName: string;
  };
}

const RocketInfo: React.FC<RocketInfoProps> = ({
  name,
  age,
  size,
  pilot,
}) => (
  <>
    <ul>
      <li>
        <label>Name: {name}</label>
      </li>
      <li>
        <label>Age: {age}</label>
      </li>
      <li>
        <label>Size: {size}</label>
      </li>
      <li>
        <label>
          Pilot: {`${pilot.firstName} ${pilot.lastName}`}{" "}
        </label>
      </li>
    </ul>
  </>
);

export const InterfaceQ = () => (
  <>
    <RocketInfo
      name="Roam Force 4"
      age={3}
      size="S"
      pilot={{ firstName: "bob", lastName: "john" }}
    />
  </>
);
