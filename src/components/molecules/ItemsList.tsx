import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import { ITEM } from '../../utils/types';
import ListItem from '../atoms/ListItem';


const ItemsList = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const { items } = useAppSelector(state => state.items);


  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"16px"}
    >
        {items.map((item : ITEM,)=> (
          <ListItem key={item.id} id={item.id} properties={item.properties} />
        ))}
      <Box
        display={"flex"}
        justifyContent={"center"}
      >
        {
          (isAuthenticated) 
          ? (
            <Button
              variant='contained'
              color='success'
              onClick={() => {
              navigate("/add")
              }}
            >
              Add Item
            </Button>
          )
          : ""
        }
      </Box>
    </Box>
  );
};

export default ItemsList;
