import { Container } from "@mui/material";
import EditForm from "../components/organisms/EditForm";
import PrivateText from "../components/molecules/PrivateText";

const EditPage = () => {
  return (
    <Container>
      <PrivateText />
      <EditForm />
    </Container>
  )
}

export default EditPage;