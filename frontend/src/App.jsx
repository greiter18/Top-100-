import React, {useState, useEffect}from 'react';
import axios from 'axios';
import WineModal from './components/wineModal'

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

  const toggleModal = (wine) => {
    // document.getElementById(`modal-background-${newId}`).classList.toggle('open-modal');  
    document.getElementById(`modal-${wine.id}`).classList.toggle('open-modal');
  }

  const setWine = wineList.map((wine, idx) => {
    return ( 
      <tr className="mainWineRow">
        <td className="wineRow" onMouseOver={() => toggleModal(wine)} onMouseOut={() => toggleModal(wine)}>{idx+1}</td>
        <td className="wineRow" onMouseOver={() => toggleModal(wine)} onMouseOut={() => toggleModal(wine)}> <strong>{wine.winery_full} </strong> {wine.wine_full}</td>
        <td className="wineRow" onMouseOver={() => toggleModal(wine)} onMouseOut={() => toggleModal(wine)}>{wine.vintage}</td>
        <div className="modal" id={`modal-${wine.id}`} >
          <WineModal wine={wine}/>
        </div>
      </tr>
    )
  });

  return (
    <div >
      <span className="wineimg"></span>
      <h1 className="top100">Our Top 100 Wines</h1>
      <div className="wineSearch">
        <input type="text" className="searchBar"placeholder="Find your Wine Bitch"/>
      </div>
      <div className="main">
        <table className="table">
          <tbody>
            <tr>
              <th>Rank</th>
              <th>Wine</th>
              <th>Vintage</th>
            </tr>
            {setWine}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
