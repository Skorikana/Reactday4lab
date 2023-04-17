import {useState, useEffect} from "react";
import './App.css';
import Starshipcard from "./Components/Starshipcard";
import getAllStarships from "./Services/Sw-api";
import Nav from "./Components/Nav";

export default function App() {
  const[starShips, setStarShips] = useState("")

  useEffect(() =>{
    getAllStarships()
    //.then() method schedules callback functions for the eventual completion of a Promise — either fulfillment or rejection.
    .then(ships => {setStarShips(ships)});
      },[])
  return (
     <div className="App">
      <Nav/>
            <Starshipcard  data = {starShips}/>
           
    </div>
  );

  }

