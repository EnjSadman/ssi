import { FormGroup } from "@mui/material";

interface BoxProps {
  children: React.ReactNode;
};

const FormGroupStyles = {
  gap: "16px"
}

const FormGroupItem = (props : BoxProps) => {
  return (
    <FormGroup
      sx={FormGroupStyles}
    >
      {props.children}
    </FormGroup>
  )
}

export default FormGroupItem;