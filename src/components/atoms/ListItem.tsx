import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ITEM } from "../../utils/types";
import BoxFlexBetweenCentered from "../templates/BoxFlexAllCentered";

const ListItem = (item: ITEM) => {
  const navigate = useNavigate();
  return (
    <BoxFlexBetweenCentered>
        {item.properties.join(", ")}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          navigate(`/edit/${item.id}`)
        }}
      >
        Edit Item
      </Button>
    </BoxFlexBetweenCentered>
  )
}

export default ListItem;