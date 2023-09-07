//TODO: Add Typescript to this file

//DO NOT MODIFY
interface CrewMember {
  name: string;
  role: "pilot" | "flight attendant" | "engineer";
}

//DO NOT MODIFY
interface LegacyRocketInfoProps {
  name: string;
  age: number;
  crew: CrewMember[];
}

// ----

type RocketInfo = Omit<LegacyRocketInfoProps, "age">;

interface RouteInfo {
  name: string;
  route: {
    origin: string;
    destination: string;
  };
}

const getRouteName = (
  rockets: RocketInfo,
  routeInfo: RouteInfo[]
) => {
  let rocketRouteDict: { rocketName: string; route: string }[] = [];
  let allRoute = "";
  routeInfo.filter((route) => {
    if (rockets.name === route.name) {
      rocketRouteDict.push({
        rocketName: rockets.name,
        route: `${route.route.origin} to ${route.route.destination}`,
      });
    }
  });
  if (rocketRouteDict.length == 0) {
    return <p> Waiting for next schedule ... </p>;
  }
  for (let i = 0; i < rocketRouteDict.length; i++) {
    allRoute += rocketRouteDict[i].route + " ";
  }
  return allRoute;
};

// One Rocket may have multiple route
// There are multiple rockets 1~6.
interface RocketDepartureProps {
  rockets: RocketInfo[];
  routeInfo: RouteInfo[];
}

const RocketDepartureBoard = ({
  rockets,
  routeInfo,
}: RocketDepartureProps) => {
  //TODO: Implement a departure board of three column
  // In the first column should be the rocket's name
  // In the second column should be the rocket's crew info
  // In the third column should be the rocket's route info
  return (
    <table>
      <tr>
        <th>Rocket Name</th>
        <th>Crew Info</th>
        <th>Route</th>
      </tr>

      {rockets.map((rocket) => {
        return (
          <tr>
            <td>{rocket.name}</td>
            <td>
              {rocket.crew.map((crew) => (
                <p>
                  Name: {crew.name} Role: {crew.role}
                </p>
              ))}
            </td>
            <td>{getRouteName(rocket, routeInfo)}</td>
          </tr>
        );
      })}
    </table>
  );
};

export const Checkpoint1Q = () => {
  const rockets: RocketInfo[] = [
    {
      name: "Roam 1",
      crew: [
        { name: "lisa", role: "pilot" },
        { name: "john", role: "engineer" },
      ],
    },
    {
      name: "Roam 2",
      crew: [
        { name: "johnny", role: "pilot" },
        { name: "mellisa", role: "engineer" },
      ],
    },
    {
      name: "Roam 3",
      crew: [
        { name: "lizzie", role: "pilot" },
        { name: "jonathan", role: "engineer" },
      ],
    },
    {
      crew: [
        { name: "lizzie", role: "pilot" },
        { name: "jonathan", role: "engineer" },
      ],
      name: "Roam 4",
    },
    {
      name: "Roam 5",
      crew: [
        { name: "Maggie", role: "engineer" },
        { name: "Glenn", role: "flight attendant" },
      ],
    },
    {
      name: "Roam 6",
      crew: [
        { name: "Mario", role: "pilot" },
        { name: "Princess Peach", role: "engineer" },
      ],
    },
  ];

  const routeInfo = [
    {
      name: "Roam 1",
      route: {
        origin: "Earth",
        destination: "Mars",
      },
    },
    {
      name: "Roam 2",
      route: {
        origin: "Moon",
        destination: "Mars",
      },
    },
    {
      name: "Roam 2",
      route: {
        origin: "Mars",
        destination: "Earth",
      },
    },
    {
      name: "Roam 3",
      route: {
        origin: "Moon",
        destination: "Earth",
      },
    },
    {
      route: {
        origin: "Moon",
        destination: "Earth",
      },
      name: "Roam 4",
    },
    {
      name: "Roam 6",
      route: {
        origin: "Earth",
        destination: "Moon",
      },
    },
    {
      name: "Roam 6",
      route: {
        origin: "Mars",
        destination: "Earth",
      },
    },
    {
      name: "Roam 6",
      route: {
        origin: "Earth",
        destination: "Neptune",
      },
    },
  ];

  return (
    <>
      <RocketDepartureBoard rockets={rockets} routeInfo={routeInfo} />
    </>
  );
};
