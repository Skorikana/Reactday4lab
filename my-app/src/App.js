import './App.css';
import getStarShips from  "./Services/Sw-api";
import {useState,useEffect} from "react";
import StarShipCard from "./Components/Starshipcard"

function App() {
  const [starShips, setStarShips] = useState(null);
    
  useEffect(() => {
    getStarShips().then(res =>{
      setStarShips(res.results);
    })
    
    }, []);

    //console.log(starShips);

   const loaded = () => {
       if(starShips === null) {
           getStarShips();
       }
   }
  return (
    <div className="App">
      <div>
      <h1>STAR WARS STARSHIPS</h1>
      {starShips? starShips.map((ship, index) => {
                   return <StarShipCard key={index} ship={ship}/> 
                }) : loaded()}
        </div>
    </div>
  );
}
export default App;
