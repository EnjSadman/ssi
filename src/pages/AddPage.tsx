import { Container } from "@mui/material";
import AddForm from "../components/organisms/AddForm";
import PrivateText from "../components/molecules/PrivateText";

const AddPage = () => {
  return (
    <Container>
      <PrivateText />
      <AddForm />
    </Container>
  )
}

export default AddPage;