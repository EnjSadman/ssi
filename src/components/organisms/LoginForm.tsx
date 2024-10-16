import { FormGroup, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slices/authSlicle";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);

  function validateFields() {
  
    const isUsernameValid = username.length >= 3;
    const isPasswordValid = password.length >= 3;

    setUsernameValid(isUsernameValid);
    setPasswordValid(isPasswordValid);

    if (isUsernameValid && isPasswordValid) {
      handleLogin();
      navigate("/");
    }
  }

  function handleKey(event : KeyboardEvent) {
    if (event.key === "Enter") {
      validateFields();
    }
  }

  function handleLogin() {
    dispatch(login(username))
  }

  useEffect(() =>{
    window.addEventListener("keypress", handleKey);
    return(() => {
      window.removeEventListener("keypress", handleKey);
    });
  }, []);

  return(
  <FormGroup>    
    <TextField
      label="Login"
      variant="outlined"
      value={username}
      error={!usernameValid}
      helperText={!usernameValid ? "Username invalid" : " "}
      onChange={(event) => {
        setUsername(event.target.value);
        if (!usernameValid) {
          setUsernameValid(true);
        }
      }}
    />
    <TextField
      label="Password"
      type="password"
      variant="outlined"
      value={password}
      error={!passwordValid}
      helperText={!passwordValid ? "Password invalid" : " "}
      onChange={(event) => {
        setPassword(event.target.value)
        if (!passwordValid) {
          setPasswordValid(true);
        }
      }}
    />
    <Button
      onClick={() => validateFields()}
    >
      Login
    </Button>
  </FormGroup>
  )
}