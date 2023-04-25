import React from 'react';
import{useState} from 'react';

export default function StarShipCard ({ship}) {
  const [details, setDetails] = useState(false);
  //false = details are not shown so that it doesn't show until 'onClick'
  function handleShow() {
      setDetails(!details);
      //console.log(details);
  }
  //console.log(ship.model);
  return (
      <div onClick={handleShow}>
              <h3>{ship.name}</h3>
           {details ? 
              <div className="details">
                  <p>Model: {ship.model}</p>
                  <p>Manufacturer:{ship.manufacturer}</p>
                  <p>Length: {ship.length}</p>
                  </div> : null
   }
  </div>
  )
  };