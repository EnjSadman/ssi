import { Checkbox, Container, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material";

export default function LoginPage() {
  return(
    <Container 
      maxWidth="sm"
    >
      <Typography
        variant="h1"
        align="center"  
      >
        LOGIN
      </Typography>
      <FormGroup>    
        <TextField label="Login" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <FormControlLabel control={<Checkbox />} label="Keep me logged in"/>
      </FormGroup>
    </Container>
  )
}