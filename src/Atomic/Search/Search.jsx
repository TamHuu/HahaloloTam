import React from "react";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function Search() {
  return (
    <TextField
      label="Tìm kiếm sản phẩm"
      placeholder="Tìm kiếm..."
      fullWidth
      style={{
        maxWidth: "300px",
        // background: "#fff",
        borderRadius: "4px",
      }}
      // color="secondary"
      type="text"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      multiline
      variant="outlined"
    />
  );
}
