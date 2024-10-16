import { Container } from "@mui/material";
import ItemList from "../components/molecules/ItemsList";
import PublicText from "../components/molecules/PublicText";

const ListPage = () => {
  return (
    <Container>
      <PublicText />
      <ItemList />
    </Container>  
  )
}

export default ListPage;