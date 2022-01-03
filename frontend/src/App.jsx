import React from 'react';
import axios from 'axios';
import {Routes ,Route } from 'react-router-dom';
import Main from './components/main';
import { HashRouter } from 'react-router-dom';
// import React, {useState, useEffect}from 'react';
// import axios from 'axios';
// import WineModal from './components/wineModal'


const App = () => (
  <div>
     <HashRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
      </Routes>
      </HashRouter>
  </div>
)



// const App = () => {
//   const [wineList, setWineList] = useState([]);
//   const [searchWine, setSearchWine] = useState('');

//   useEffect(() => {
//     getWine().then((res) => {
//       setWineList(res.data)
//     })
//   }, [])

//   const getWine = () => {
//     return axios.get(`/wines/`)
//   };

//   const toggleModal = (wine) => {  
//     document.getElementById(`modal-${wine.id}`).classList.toggle('open-modal');
//   }

//   const setWine = wineList.map((wine, idx) => {
//     return ( 
//       <tr className="mainWineRow">
//         <td className="wineRow" onMouseOver={() => toggleModal(wine)} onMouseOut={() => toggleModal(wine)}>{idx+1}</td>
//         <td className="wineRow" onMouseOver={() => toggleModal(wine)} onMouseOut={() => toggleModal(wine)}><strong>{wine.winery_full}</strong>&emsp;{wine.wine_full}</td>
//         <td className="wineRow" onMouseOver={() => toggleModal(wine)} onMouseOut={() => toggleModal(wine)}>{wine.vintage}</td>
//         <div className="modal" id={`modal-${wine.id}`} >
//           <WineModal wine={wine}/>
//         </div>
//       </tr>
//     )
//   });

//   const handleChange = (event) => {
//     setSearchWine(event.target.value)
//   }

//   const fetchWine = (wineName) => {
//     return axios.get(`wines/${wineName}`)
//   }

//   return (
//     <div >
//       <div className="top">
//         <div className="wineSearch">
//         <form action="">
//           <label htmlFor="">
//             <input type="text" onChange={handleChange} className="searchBar" placeholder="Find your Wine"/>
//             <button className="button"><i class="fas fa-search"></i></button>
//           </label>
//         </form>
//       </div>
//       <div>
//         <h1 className="top100">Our Top 100 Wines</h1>
//       </div>
//       </div>
//       <span className="wineimg"></span>
//       <div className="main">
//         <table className="table">
//           <tbody>
//             <tr className="topRow">
//               <th>Rank</th>
//               <th className="wineColumn">Wine</th>
//               <th>Vintage</th>
//             </tr>
//             {setWine}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

export default App;
