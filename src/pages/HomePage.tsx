import { Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Typography
        align="center"
        variant="h1"
      >
          Public Page
      </Typography>
      <Typography variant="body1">
          This is public homepage.
          This can be viewed without login
      </Typography>
    </Container>
  )
}

export default HomePage;