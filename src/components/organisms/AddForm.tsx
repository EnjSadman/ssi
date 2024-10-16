import { Button, TextField } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { addItem } from "../../store/slices/itemsSlice";
import FormGroupItem from "../templates/FormGroupItem";

const AddForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = `${Date.now()}`;

  function handleChange(value: string, index: number) {
    const formDataCopy = [...formData];
    formDataCopy[index] = value;
    setFormData(formDataCopy);
  }
 
  const [formData, setFormData] = useState<string[]>([""]);

  return (
    <FormGroupItem>
      {
        formData.map((el, index)=> (
          <React.Fragment key={index}>
            <TextField 
              value={el}
              onChange={(event) => {
                handleChange(event.target.value, index)
              }}
            />

            
          </React.Fragment>  
        ))
      }
      <Button
        variant="contained"
        onClick={() => {
          handleChange("", formData.length);
        }}
      >
        Add more properties
      </Button>
      <Button
      variant="contained"
      color="success"
      onClick={() => {
        dispatch(addItem({id, properties: [...formData]}))
        navigate("/")
      }}
      >
        Save
      </Button>
    </FormGroupItem>
  )
}

export default AddForm;