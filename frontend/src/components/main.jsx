import React, {useState, useEffect}from 'react';
import axios from 'axios';
import WineIndex from './wineIndex'
import { Link } from 'react-router-dom'

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

  // const fetchWine = (wineName) => {
  //   return axios.get(`wines/${wineName}`)
  // }

  let filteredWine = wineList.filter(wine => {
     if(searchWine == ''){
       return wine;
     } else if (
        wine.wine_full.toLowerCase().includes(searchWine.toLowerCase())) {
        return wine;
      }
  })
    
  const setWine = wineList.map((wine, idx) => {
    return ( 
      <WineIndex wine={wine} idx={idx} search={searchWine} key={idx}/>
    )
  });

 
  return (
    <div >
      {console.log('searchbox', searchWine)}
      {console.log('filtered state++++++',filteredWine)}
      <div className="top">
        <div className="wineSearch">
        {/* <form action=""> */}
          <label htmlFor="">
            <input type="text" onChange={handleChange} className="searchBar" placeholder="Find your Wine..."/>
            {/* <button className="button"><i class="fas fa-search"></i></button> */}
          </label>
        {/* </form> */}
      </div>
      <div>
        <Link to={`/`}className="top100">Our Top 100 Wines</Link>
      </div>
      </div>
      <span className="wineimg"></span>
      <div className="main">
        <table className="table">
          <tbody>
            <tr className="topRow">
              <th>Rank</th>
              <th className="wineColumn">Wine</th>
              <th>Vintage</th>
            </tr>
            {setWine}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Main;
