import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import { ITEM } from '../utils/types';

const ItemsList = () => {
  const items = useSelector((state : RootState) => state.items.items);

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item : ITEM)=> (
          <li key={item.id}>
            {item.name} 
            <Link to={`/edit/${item.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Item</Link>
    </div>
  );
};

export default ItemsList;
