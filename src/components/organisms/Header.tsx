import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box>
      <Container>
        <Link to="/">
          public
        </Link>
        <Link to="/private">
          private
        </Link>
      </Container>
    </Box>
  )
}