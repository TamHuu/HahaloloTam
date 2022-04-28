import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      id="status"
      options={rows}
      getOptionLabel={(option) => option.status}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
    />
  );
}
const rows = [
  {
    id: "SP1",
    nodot: 1,
    nameProduct: "Coffee",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5_aLd98kfyzKzsB7RzT2kl0WUmPr68GjJlvECbtjnw&s",
    amount: 50,
    weight: 20,
    status: "còn hàng",
  },
  {
    id: "SP2",
    nodot: 2,
    nameProduct: " Matcha đá xay",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5_aLd98kfyzKzsB7RzT2kl0WUmPr68GjJlvECbtjnw&s",
    amount: 50,
    weight: 20,
    status: "hết hàng",
  },
  {
    id: "SP3",
    nodot: 3,
    nameProduct: "Trà machiato",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5_aLd98kfyzKzsB7RzT2kl0WUmPr68GjJlvECbtjnw&s",
    amount: 50,
    weight: 20,
    status: "còn hàng",
  },
  {
    id: "SP4",
    nodot: 4,
    nameProduct: "Trà bông cúc",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5_aLd98kfyzKzsB7RzT2kl0WUmPr68GjJlvECbtjnw&s",
    amount: 50,
    weight: 20,
    status: "còn hàng",
  },
  {
    id: "SP5",
    nodot: 5,
    nameProduct: "Trà chanh",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5_aLd98kfyzKzsB7RzT2kl0WUmPr68GjJlvECbtjnw&s",
    amount: 50,
    weight: 20,
    status: "hết hàng",
  },
];
