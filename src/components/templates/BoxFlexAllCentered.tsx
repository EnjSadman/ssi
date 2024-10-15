import { Box } from "@mui/material";

interface BoxProps {
  children: React.ReactNode;
};

export default function BoxFlexAllCentered(props : BoxProps) {
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