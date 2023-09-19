// App.jsx

import { useState } from "react";
import "./App.css";
// import Counter from "./components/Counter";

const userObj = {
  name: "bob",
  age: 3,
  city: "berlin",
};

function App() {
  let [count, setCount] = useState(0);

  const [user, setUser] = useState(userObj);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count === 0) return;
    setCount(count - 1);
  }

  function incrementAge() {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  }

  const countriesData = ["Germany", "USA", "Romania"];
  const [countries, setCountries] = useState(countriesData);

  function addNweCountry() {
    setCountries((prevCountries) => [...prevCountries, "Italy"]);
  }

  return (
    <div className="App">
      <h1>React - state and events</h1>

      <button onClick={handleIncrement}>increment</button>
      {count}
      <button onClick={handleDecrement}>increment</button>
      {/* <Counter /> */}

      <button onClick={incrementAge}>update age</button>
      {JSON.stringify(user)}

      <button onClick={addNweCountry}>update country </button>
      {JSON.stringify(countries)}
      
    </div>
  );
}
export default App;
