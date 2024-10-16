import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BoxFlexAllCentered from "../templates/BoxFlexAllCentered";
import NavLinkHeader from "../atoms/NavLinkHeader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/slices/authSlicle";

const HeaderContainerStyle = {
  backgroundColor: "darkblue",
  padding: "20px 0px"
}

export default function Header() {
  const { isAuthenticated } = useSelector((state : RootState) => state.auth);
  const dispatch = useDispatch();
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
            <NavLinkHeader text={"public"} to={"/"} />
            <NavLinkHeader text={"add"} to={"/add"} />
            <NavLinkHeader text={"list"} to={"/list"} />
          </Box>
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
      </Container>
    </Box>
  )
}