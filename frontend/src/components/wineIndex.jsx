import React from 'react';

const WineIndex =({wine, idx}) => {
  return(
      <tr>
        <td>{idx+1}</td>
        <td> <strong>{wine.winery_full} </strong> {wine.wine_full}</td>
        <td>{wine.vintage}</td>
      </tr>
  )
}

export default WineIndex;