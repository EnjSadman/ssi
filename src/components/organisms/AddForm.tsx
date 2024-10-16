import { Button, FormControl, TextField } from "@mui/material";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { addItem } from "../../store/slices/itemsSlice";

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
    <FormControl>
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
        onClick={() => {
          handleChange("", formData.length);
        }}
      >
        Add more properties
      </Button>
      <Button
      onClick={() => {
        dispatch(addItem({id, properties: [...formData]}))
        navigate("/")
      }}
      >
        Save
      </Button>
    </FormControl>
  )
}

export default AddForm;