import React from 'react';

const WineIndex =({wine, idx}) => {
  return(
      <tr>
        <td>{wine.top100_rank}</td>
        <td> <strong>{wine.winery_full} </strong> {wine.wine_full}</td>
        <td>{wine.vintage}</td>
      </tr>
  )
}

export default WineIndex;