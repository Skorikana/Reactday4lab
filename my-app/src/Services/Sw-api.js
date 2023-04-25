
    const getStarShips = async () =>  {
        try{
        const response = await fetch("https://swapi.dev/api/starships/");
        const data = await response.json();
       return(data);
      }
       catch(e) {
        console.error(e)
     }}

 export default getStarShips;




