import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import { ITEM } from '../../utils/types';


const ItemsList = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const { items } = useAppSelector(state => state.items);


  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item : ITEM)=> (
          <li key={item.id}>
            {item.properties} 
            <Button
              onClick={() => {
                navigate(`/edit/${item.id}`)
              }}
            >
              Edit Item
            </Button>
          </li>
        ))}
      </ul>
      {
        (isAuthenticated) 
        ? (
          <Button
            onClick={() => {
            navigate("/add")
            }}
          >
            Add Item
          </Button>
        )
        : ""
      }
    </div>
  );
};

export default ItemsList;
