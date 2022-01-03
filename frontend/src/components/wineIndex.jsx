import React, {useState, useEffect}from 'react';
import WineModal from './wineModal';
import axios from 'axios';

const WineIndex =({wine, idx}) => {
  let [winery, setWinery] = useState('');

  useEffect(() => {
    getWinery(wine)
      .then(res => {setWinery(res.data[0].winery_full)})
      .catch(error => console.log('ERROR',error))
  }, []);

  const getWinery = (wine) => {
    return axios.get(`winery/${wine.winery_full}`)
  }

  const toggleModal = (wine) => {  
    document.getElementById(`modal-${wine.id}`).classList.toggle('open-modal');
  };

  return(
    <tr className="mainWineRow">
      <td className="wineRow" onMouseOver={() => toggleModal(wine)} onMouseOut={() => toggleModal(wine)}>{idx+1}</td>
      <td className="wineRow" id="winenamecolumn" onMouseOver={() => toggleModal(wine)} onMouseOut={() => toggleModal(wine)}><strong>{winery}</strong>&emsp;{wine.wine_full}</td>
      <td className="wineRow" onMouseOver={() => toggleModal(wine)} onMouseOut={() => toggleModal(wine)}>{wine.vintage}</td>
      <div className="modal" id={`modal-${wine.id}`} >
        <WineModal wine={wine} winery={winery} idx={idx}/>
      </div>
    </tr>
  )
}

export default WineIndex;