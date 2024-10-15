import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/Auth/AuthContext";
import BoxFlexAllCentered from "../templates/BoxFlexAllCentered";
import NavLinkHeader from "../atoms/NavLinkHeader";

const HeaderContainerStyle = {
  backgroundColor: "darkblue",
  padding: "20px 0px"
}

export default function Header() {
  const navigate = useNavigate();
  const {logout, isAuthenticated} = useAuth();
  return (
    <Box
      sx={HeaderContainerStyle}
    >
      <Container>
        <BoxFlexAllCentered>
          <Box
            component="nav"
            display={"flex"}
            gap={"16px"}

          >
            <NavLinkHeader text={"public"} to={"/"} />
            <NavLinkHeader text={"add"} to={"/add"} />
            <NavLinkHeader text={"edit"} to={"/edit"} />
          </Box>
          <Button
          variant="contained"
          onClick={() => {
            if(isAuthenticated) {
              logout();
              navigate("/");
            } else {
              navigate("/login")
            }
          }}
          >
            {(isAuthenticated) ? "Logout" : "Login"}
          </Button>
        </BoxFlexAllCentered>
      </Container>
    </Box>
  )
}