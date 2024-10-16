import { Container, Typography } from "@mui/material";
import AddForm from "../components/organisms/AddForm";

const AddPage = () => {
  return (
    <Container>
      <Typography
        variant="h3"
        align="center"
      >
          Add page
      </Typography>
      <Typography
        variant="body1"
        align="center"
      >
          This page is private. You redirected to login page, when logged out 
      </Typography>
      <AddForm />
    </Container>
  )
}

export default AddPage;