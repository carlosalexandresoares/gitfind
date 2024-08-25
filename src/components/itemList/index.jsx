import React from 'react';
import './style.css';
function ItemList({title, descriptions}) {
  return (
    <div className='item-list'>
    <strong>{title}</strong>
    <p>{descriptions}</p>
    <hr/>
    </div>
  )
}
export default ItemList;