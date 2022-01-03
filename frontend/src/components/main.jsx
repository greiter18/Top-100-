import React, {useState, useEffect}from 'react';
import axios from 'axios';
import WineIndex from './wineIndex'

const Main = () => {
  const [wineList, setWineList] = useState([]);
  const [searchWine, setSearchWine] = useState('');

  useEffect(() => {
    getWine().then((res) => {
      setWineList(res.data)
    })
  }, [])

  const getWine = () => {
    return axios.get(`/wines/`)
  };

   const handleChange = (event) => {
    setSearchWine(event.target.value)
  }
    
  const setWine = wineList.map((wine, idx) => {
    return ( 
      <WineIndex wine={wine} idx={idx} search={searchWine} key={idx}/>
    )
  });

  return (
    <div >
      <div className="top">
        <div className="wineSearch">
          <label htmlFor="">
            <input type="text" onChange={handleChange} className="searchBar" placeholder="Find your Wine..."/>
          </label>
      </div>
      <div>
        <h1 className="top100">Our Top 100 Wines</h1>
      </div>
      </div>
      <span className="wineimg"></span>
      <div className="main">
        <table className="table">
          <thead>
            <tr className="topRow">
              <th>Rank</th>
              <th className="wineColumn">Wine</th>
              <th>Vintage</th>
            </tr>
            </thead>
            <tbody>
            {setWine}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Main;
