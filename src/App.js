import React, { useState, useEffect } from "react";
import Expenses from "./data.js";
import Container from "./Components/Expenses.jsx"
import './App.css';
// import expenses from "./data.js";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const [data, setData] = useState();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    fetch(Expenses)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  console.log(Expenses);
  console.log(Expenses.length);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Expenses Tracker</h1>
        {Expenses.map((data, key) => {
          return (
            <div>
              <Container
              key={data.id}
              name={data.name}
              price={data.price}
              />
            </div>
          )
        })}
      <h2 className="total">
        TOTAL: 
        {Expenses.reduce((total, data) => {
          return total + data.price
        }, 0)}
      </h2>
      </div>
    </div>
  );
};

export default App;
