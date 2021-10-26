import logo from "./logo.svg";
import "./App.css";
import DisplaySimpsons from "./components/DisplaySimpsons";
import { useState } from "react";
import axios from "axios";


function App() {
  const [simpsons, setSimpsons] = useState(null);
  const getSimpsons = () => {
    // Send the request

    axios

      .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")

      // Extract the DATA from the received response

      .then((response) => response.data)

      // Use this data to update the state

      .then((data) => {
        setSimpsons(data[0]);
      });
  };
  return (
    <div className="App">
      <DisplaySimpsons simpsons={simpsons} />
      <button type="button" onClick={getSimpsons}>
        Get simpsons
      </button>
    </div>
  );
}

export default App;
