import { Link as MUILink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface NavLinkProps {
  text: string,
  to: string
}

export default function NavLinkHeader({text, to} : NavLinkProps) {
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