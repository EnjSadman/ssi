import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BoxFlexAllCentered from "../templates/BoxFlexAllCentered";
import NavLinkHeader from "../atoms/NavLinkHeader"; 
import { RootState } from "../../store/store";
import { logout } from "../../store/slices/authSlicle";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const HeaderContainerStyle = {
  backgroundColor: "darkblue",
  padding: "20px 0px"
}
const Header = () => {
  const { isAuthenticated, username } = useAppSelector((state : RootState) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
            <NavLinkHeader text={"homepage"} to={"/"} />
            <NavLinkHeader text={"add"} to={"/add"} />
            <NavLinkHeader text={"list"} to={"/list"} />
          </Box>
          <BoxFlexAllCentered>
            {(isAuthenticated && <Typography color="white" variant="body1">Hello, {username}</Typography>)}
            <Button
            variant="contained"
            onClick={() => {
              if(isAuthenticated) {
                dispatch(logout())
                navigate("/");
              } else {
                navigate("/login")
              }
            }}
            >
              {(isAuthenticated) ? "Logout" : "Login"}
            </Button>
          </BoxFlexAllCentered>
        </BoxFlexAllCentered>
      </Container>
    </Box>
  )
}

export default Header;