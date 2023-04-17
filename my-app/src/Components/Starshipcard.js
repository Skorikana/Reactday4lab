import React from 'react'

export default function Starshipcard(ships) {
    let starShip = ships.data;
    
  return (
    <div className="starship">
        {starShip.results && starShip.results.map((starShip) =>(  
         
          <div className="starship1"> Name:{starShip.name}<br/>
                Length:{starShip.length}<br/>
                Crew:{starShip.crew}</div>    
          )
          )}
        </div>
  )
}


