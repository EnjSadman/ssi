import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { Button, FormGroup, TextField } from "@mui/material";
import { editItem } from "../../store/slices/itemsSlice";

const EditForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const item = useAppSelector(state => state.items.items).find(el => el.id === id);

  const [formData, setFormData] = useState<string[] | null>(null);

  const handleChange = (value: string, index : number) => {
    if (formData !== null) {
      const newFormData = [...formData];
      newFormData[index] = value;
      setFormData(newFormData);
    }
  };

  function handleSave() {
    if (id && formData !== null) {
      dispatch(editItem({id, properties: [...formData]}));
    }
  }

  useEffect(() => {
    if (item) {
      setFormData(item.properties)
    } else {
      navigate("/")
    }
  }, [item]);

  return (
    <FormGroup>
      {(formData !== null) 
        ? (
          Object.keys(formData).map((key, index) => (
            <React.Fragment key={index}>
              <TextField
                value={formData[index]}
                onChange={(event) => handleChange(event.target.value, index)}
              />
            </React.Fragment>
          ))
        )
        : ""
      }
      <Button
      variant="outlined"
        onClick={() => {
          if (formData !== null) {
            handleChange("", formData.length)
          }
        }}
      >
        Add more properties
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          handleSave();
        }}
      >
        Save Changes
      </Button>
    </FormGroup>
  )
}

export default EditForm;