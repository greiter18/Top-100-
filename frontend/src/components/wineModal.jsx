import React from 'react';

const WineModal = ({wine, idx}) => {
  return( 
    <div className="wineModal">
      {wine.winery_full}
      <br/>
      Tasting Notes 
      <br />{wine.note}
    </div>
  )
}

export default WineModal;