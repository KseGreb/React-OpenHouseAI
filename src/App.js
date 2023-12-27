import { useEffect, useState } from 'react';
import CommunityInfo from './Community';
import './App.css';

function App() {
  const URL = "https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json";
  const differentURL = "https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json";

  const [communities, setCommunities] = useState([]);
  const [houses, setHouses] = useState([]);

  const fetchCommunity = async() => {
    const response  =  await fetch (URL);
    try {
      const data = await response.json();
      data.sort( compare );
      setCommunities(data)
    }
    catch(error) {
      if (!response){
        console.log("Network error");
      }
    }
  }

  const fetchHouses = async() => {
    const newResponse = await fetch (differentURL);
    const newData = await newResponse.json();
    setHouses(newData);
  }

  useEffect(()=>{
    fetchCommunity();
    fetchHouses()
  }, []);

  function compare(a, b) {
    if (a.name < b.name){
      return -1;
    }
    if (a.name > b.name){
      return 1;
    }
    return 0;
  }

  return (
    <div className="App">
      <h1>Available housing in Calgary</h1>
      <div className='communities'>
        {communities.map((element, index) =>(
          <CommunityInfo key = {index}
            community = {element}
            houses = {houses}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
