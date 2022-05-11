import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Sắp xếp</InputLabel>
        <Select
          style={{ width: "180px" }}
          native
          value={props.valueSelect}
          onChange={(e) => props.onChangeSelect(e.target.value)}
          label="Age"
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple",
          }}
        >
          {/* <option aria-label="None" value="" /> */}
          <option value={"noDotIncrease"}>Số Thứ tự tăng dần</option>
          <option value={"noDotDecrease"}>Số Thứ tự giảm dần</option>
          <option value={"nameIncrease"}>Sắp xếp tăng dần theo tên</option>
          <option value={"nameDecrease"}>Sắp xếp giảm dần theo tênn</option>
        </Select>
      </FormControl>
    </div>
  );
}
