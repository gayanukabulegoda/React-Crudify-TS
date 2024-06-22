import logo from "./logo.svg";
import "./App.css";
import Car from "./Car";
import { useState } from "react";

// Main component / Parent component
function App() {
  // to use state (to manage chaging state) we use hooks

  // Ex: username -> state
  // changeUsername -> function use to change the state
  // useState(null) -> 'null' menas the initial vlaue of the state
  const [username, setUsername] = useState(null);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setUsername("Gayanuka");
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  //from App Component the react App initializes. react is a component based library
  return (
    //below are not HTML, are JSX (JavaScript XML); JSX output. From react we develop SPA(Single Page Applications)
    <div className="App">
      <h1>Userame is {username}</h1>
      <SampleComponent title="Sample Property Title" value="25" />

      <Car model="Toyota Corolla" description="A home used vehicle" />
      <Car model="Toyota Landcruiser" />

      <button onClick={handleClick}>Set Username</button>

      <h1>Counter: {counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
}

// Sample component (a child component inside App())
const SampleComponent = (props) => {
  return (
    <div>
      <h1>
        {props.title} Value: {props.value}
      </h1>
    </div>
  );
};

export default App;
