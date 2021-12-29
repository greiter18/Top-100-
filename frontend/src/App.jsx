import React, {useState, useEffect}from 'react';
import axios from 'axios';

const App = () => {
  const [wineList, setWineList] = useState([]);

  // const options = {
  //   headers: {
  //     common: null
  //   }
  // };
  useEffect(() => {
    getWine().then((res) => {
      setWineList(res.data)
    })
  }, [])

  const getWine = () => {
    //util function to the backend- trigger backend
    // return axios.get(`https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/t100_2021_full.json`, 
    // {headers: { 'Content-Type': 'application/json'}})
    return axios.get(`http://localhost:5000/wines/index`, {header: {'Access-Control-Allow-Origin': '*'}}).catch((err) => console.log('err',err))
  };

  return (
    <div>
      {console.log('---------wine',wineList)}
      <h1>Top 100 </h1>
      {/* {wineList} */}
    </div>
  );
}

export default App;
