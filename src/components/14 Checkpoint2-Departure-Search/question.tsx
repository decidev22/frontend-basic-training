//TODO: Add Typescript to this Search Result component

import { forwardRef, useEffect, useRef, useState } from "react";

//TODO: Create a custom hook, that accepts an array of routes as input
// Q what is hook and how is it different from handler
const useSearchRoute = (routes: SearchResultProps[]) => {
  // searches given data... {routes}
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [results, setResults] = useState(routes);

  const triggerSearch: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    // triggers Search?
    const search = routes.filter(
      (route) =>
        (route.name === name || name === "") &&
        (route.route.origin === origin || origin === "") &&
        (route.route.destination === destination ||
          destination === "")
    );
    setResults(search);
  };
  return {
    results,
    setName,
    setOrigin,
    setDestination,
    triggerSearch,
  };
};

//TODO: Complete the SearchBox component

interface SearchBoxProps {
  placeholder: string;
  searchItem: React.Dispatch<React.SetStateAction<string>>;
}

// What is this!
const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(
  ({ placeholder, searchItem }, ref) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
      e
    ) => {
      searchItem(e.target.value);
    };
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    );
  }
);

// what are we showing??
// {
//   name: "Roam 1",
//   route: {
//     origin: "Earth",
//     destination: "Mars",
//   },
// },
interface SearchResultProps {
  name: string;
  route: {
    origin: string;
    destination: string;
  };
}
// results probably takes in an Array type of Objects that has name origin and destination.
// but that is also what the routes variable has...!
const SearchResult = ({
  results,
}: {
  results: SearchResultProps[];
}) => {
  return (
    <ul>
      {results.map((result) => (
        <li>
          <label>{`${result.name} -- ${result.route.origin} -- ${result.route.destination}`}</label>
        </li>
      ))}
    </ul>
  );
};

// TODO: On page load, set focus to the first search box
// TOTO: Add functionality so that when the type search terms into the three different
// search boxes, the routes are filtered and the correct result is displayed
const DepartureSearch = ({
  routes,
}: {
  routes: SearchResultProps[];
}) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);
  const {
    results,
    setName,
    setOrigin,
    setDestination,
    triggerSearch,
  } = useSearchRoute(routes);

  return (
    <div>
      <SearchBox placeholder="Name" searchItem={setName} ref={ref} />
      <SearchBox placeholder="Origin" searchItem={setOrigin} />
      <SearchBox
        placeholder="Destination"
        searchItem={setDestination}
      />
      <button onClick={triggerSearch}>Search</button>
      <SearchResult results={results} />
    </div>
  );
};

export const Checkpoint2Q = () => {
  const routes = [
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
      name: "Roam 3",
      route: {
        origin: "Moon",
        destination: "Earth",
      },
    },
  ];
  return (
    <>
      <DepartureSearch routes={routes} />
    </>
  );
};
