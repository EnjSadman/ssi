import { Link as MUILink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface NavLinkProps {
  text: string,
  to: string
}

const NavLinkHeader = ({text, to} : NavLinkProps) => {
  return (
    <MUILink
      component={RouterLink}
      underline="hover"
      to={to}
      color="white"
      textTransform={"capitalize"}
    >
      {text}
    </MUILink> 
  )
}

export default NavLinkHeader;