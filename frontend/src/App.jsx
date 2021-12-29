import React, {useState, useEffect}from 'react';
import axios from 'axios';
import WineIndex from './components/wineIndex'

const App = () => {
  const [wineList, setWineList] = useState([]);

  useEffect(() => {
    getWine().then((res) => {
      setWineList(res.data)
    })
  }, [])

  const getWine = () => {
    //util function to the backend- trigger backend
    // return axios.get(`https://cors-anywhere.herokuapp.com/https://top-100-example.s3.amazonaws.com/t100_2021_full.json`, 
    // {headers: { 'Content-Type': 'application/json'}})
    //return axios.get(`http://localhost:5000/wines/index`, {header: {'Access-Control-Allow-Origin': '*'}}).catch((err) => console.log('err',err))
    return axios.get(`/wines/`)
  };

  const setWine = wineList.map((wine, idx) => {
    return <WineIndex wine={wine} key={wine.id} idx={idx}/>
  })

  return (
    <div>
      {console.log(wineList)}
      <h1>Top 100 </h1>
      {/* <WineIndex wines={wineList}/> */}
      <table>
        <tbody>
          <tr>
            <th>Rank</th>
            <th>Wine</th>
            <th>Winery</th>
            <th>Vintage</th>
          </tr>
          {setWine}
        </tbody>
      </table>
    </div>
  );
}

export default App;
