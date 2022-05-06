/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={rows}
      getOptionLabel={(option) => option.status}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Tình trạng" variant="outlined" />
      )}
    />
  );
}


const rows = [
  {
    id: "SP1",
    nodot: 1,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "rất ư là ngon",
    money: "20.000Đ",
    status: "còn hàng",
  },
  {
    id: "SP2",
    nodot: 2,
    name: " Matcha đá xay",
    image:
      "https://media.istockphoto.com/photos/matcha-latte-green-milk-foam-cup-on-wood-table-at-cafe-trendy-powered-picture-id1325991061?b=1&k=20&m=1325991061&s=170667a&w=0&h=Aa3JVRJG_PMP8YCogu65x7qqC5y0q93VvNxEYw_jxZk=",
    desc: "rất ư là ngon",
    money: "30.000Đ",
    status: "hết hàng",
  },
];
