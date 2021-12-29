import React from 'react';

const WineIndex =({wine, idx}) => {

//"winery_full": "Louis Latour",
// "wine_full": "Corton-Charlemagne",
// "vintage": "2018",
 

  return(
    <tr>
      <td>{idx+1}</td>
      <td>{wine.winery_full}</td>
      <td>{wine.wine_full}</td>
      <td>{wine.vintage}</td>
    </tr>
  )
}

export default WineIndex;