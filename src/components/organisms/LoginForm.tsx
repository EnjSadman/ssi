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

  function validateFields(name: string, pass: string) {
  
    const isUsernameValid = name.length >= 3;
    const isPasswordValid = pass.length >= 3;

    setUsernameValid(isUsernameValid);
    setPasswordValid(isPasswordValid);

    if (isUsernameValid && isPasswordValid) {
      handleLogin();
      navigate("/");
    }
  }

  function handleKey(event : KeyboardEvent) {
    if (event.key === "Enter") {
      validateFields(username, password);
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
  }, [username, password]);

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
      onClick={() => validateFields(username, password)}
    >
      Login
    </Button>
  </FormGroup>
  )
}