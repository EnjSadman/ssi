import { Container, Typography } from "@mui/material";
import LoginForm from "../components/organisms/LoginForm";

const LoginPage = () => {
  return(
    <Container 
      maxWidth="sm"
    >
      <Typography
        variant="h3"
        align="center"  
      >
        LOGIN
      </Typography>
      <Typography align="center">
        Only validation right now is by length. Username or password should be longer than 3 symbols. 
      </Typography>
    <LoginForm />
    </Container>
  )
}

export default LoginPage;