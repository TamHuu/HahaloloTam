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
import { Avatar, Button } from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    textAlign: "center",
    minWidth: 300,
    marginLeft: 100,
  },
});

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
export default function BasicTable({ clickHandler }) {
  const classes = useStyles();
  const [DataTable, setDataTable] = useState(rows);
  const [showDialog, setShowDialog] = useState(false);
  const [dataDialog, setDataDialog] = useState({});
  const [editDialog, setEditDialog] = useState(true);
  const handleDelete = (id) => {
    setDataTable(DataTable.filter((item) => item.id !== id));
  };

  const handleRead = (id) => {
    const idRow = DataTable.findIndex((item) => item.id === id);
    setDataDialog(DataTable[idRow]);
    setEditDialog(true);
    setShowDialog(true);
  };

  const handleUpdate = (id) => {
    const idRow = DataTable.findIndex((item) => item.id === id); //
    setDataDialog(DataTable[idRow]);
    setShowDialog(true);
    setEditDialog(false);
  };

  const handleCreate = () => {
    setDataDialog({});
    setShowDialog(true);
    setEditDialog(false);
  };

  const updateDataHandler = (item) => {
    console.log(item);

    const tempDataTable = [...DataTable];
    const indexEditItem = tempDataTable.findIndex((row) => row.id === item.id);

    if (indexEditItem !== -1) {
      tempDataTable[indexEditItem] = { ...item };
      setDataTable([...tempDataTable]);
      setShowDialog(false);
    } else {
      const length = tempDataTable.length - 1;
      tempDataTable.push({
        ...item,
        id: tempDataTable[length].id + 1,
        nodot: tempDataTable[length].nodot + 1,
      });

      setDataTable(tempDataTable);
      setShowDialog(false);
    }
  };

  return (
    <>
      {showDialog && (
        <FormDialog
          setShowDialog={setShowDialog}
          row={dataDialog}
          editDialog={editDialog}
          setEditDialog={setEditDialog}
          updateData={updateDataHandler}
        ></FormDialog>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "20px",
          marginTop: "159px",
        }}
      >
        <Button variant="contained" color="secondary" onClick={handleCreate}>
          Thêm
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Sản phẩm</TableCell>
              <TableCell align="left">Hình ảnh</TableCell>
              <TableCell align="center">Số lượng&nbsp;(g)</TableCell>
              <TableCell align="center">Khối lượng&nbsp;(kg)</TableCell>
              <TableCell align="right">Tình trạng</TableCell>
              <TableCell align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log("DataTable", DataTable)}
            {DataTable.map((row) => (
              <TableRow key={row.nodot}>
                <TableCell component="th" scope="row">
                  {row.nodot}
                </TableCell>

                <TableCell align="left">{row.nameProduct}</TableCell>
                <TableCell align="left">
                  <Avatar alt="#" src={row.image} variant="square" />
                </TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.weight}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="center">
                  <Button
                    onClick={() => handleRead(row.id)}
                    variant="contained"
                    color="secondary"
                    style={{ marginRight: "10px" }}
                  >
                    Xem
                  </Button>
                  <Button
                    onClick={() => handleDelete(row.id)}
                    variant="contained"
                    style={{ marginRight: "10px" }}
                    color="secondary"
                  >
                    Xóa
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleUpdate(row.id)}
                  >
                    Sửa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
