import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import { ITEM } from '../../utils/types';


const ItemsList = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const { items } = useAppSelector(state => state.items);


  return (
    <Container>
      <Typography
        variant='h2'
        align='center'
      >
        Items List
      </Typography>
      <Typography
        align='center'
      >
        This page also public. But you can&apos;t see button edit and add
      </Typography>
      <ul>
        {items.map((item : ITEM)=> (
          <li key={item.id}>
            {item.properties.join(", ")} 
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
      <Box>
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
      </Box>
    </Container>
  );
};

export default ItemsList;
