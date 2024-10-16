import { Box } from "@mui/material";

interface BoxProps {
  children: React.ReactNode;
};

const BoxFlexBetweenCentered = (props : BoxProps) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {props.children}
    </Box>
  )
}

export default BoxFlexBetweenCentered;