import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import FormDialog from "./FormDialog";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const rows = [
  {
    id: "SP1",
    nodot: "1",
    name: "sữa chua",
    calories: "50",
    fat: "20",
    carbs: "10",
    protein: "10",
  },

  {
    id: "SP2",
    nodot: "2",
    name: "cơm gà",
    calories: "50",
    fat: "20",
    carbs: "10",
    protein: "10",
  },

  {
    id: "SP3",
    nodot: "3",
    name: "sườn bì chả",
    calories: "50",
    fat: "20",
    carbs: "10",
    protein: "10",
  },

  {
    id: "SP4",
    nodot: "4",
    name: "bánh hỏi heo quay",
    calories: "50",
    fat: "20",
    carbs: "10",
    protein: "10",
  },
];

export default function BasicTable({ clickHandler }) {
  const classes = useStyles();
  const [DataTable, setDataTable] = useState(rows);
  const onAddHandler = (item) => {
    setDataTable([
      ...DataTable,
      {
        nodot: "6",
        name: item.product,
        calories: item.quantity,
        fat: item.description,
        carbs: "70",
        protein: "50",
      },
    ]);
  };
  const onDeleteHandler = (id) => {
    setDataTable(DataTable.filter((item) => item.id !== id));
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Stt</TableCell>
            <TableCell>Sản phẩm</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DataTable.map((row) => (
            <TableRow key={row.nodot}>
              <TableCell component="th" scope="row">
                {row.nodot}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell
                style={{
                  width: "4 00px",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "secondary",
                }}
              >
                <div className={classes.root}>
                  <FormDialog
                    row={row}
                    onAdd={onAddHandler}
                    onDelete={onDeleteHandler}
                  ></FormDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
