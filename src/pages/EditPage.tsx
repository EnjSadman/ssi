import { Container, Typography } from "@mui/material";
import EditForm from "../components/organisms/EditForm";

const EditPage = () => {
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
      <EditForm />
    </Container>
  )
}

export default EditPage;