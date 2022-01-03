import React, {useState, useEffect}from 'react';
import axios from 'axios';

const WineModal = ({wine, winery, idx}) => {
  let [notes, setNotes] =useState('');

  useEffect(() => {
    getNote(wine)
    .then(res => {
      console.log(res)
      setNotes(res.data[0].note)})
    .catch(err => console.log(err))
  },[]);

  const getNote = (wine) => {
    return axios.get(`/tastingnote/${wine.note}`)
  }

  return( 
    <div className="wineModal">
      <strong>{winery}</strong>
      <br/>
      <strong>Tasting Notes :</strong> 
      <br/>
      {notes}
    </div>
  )
}

export default WineModal;