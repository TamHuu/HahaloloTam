import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { lists } from "../service/list";

import { IconButton } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable() {
  const classes = useStyles();
  const [DataTable, setDataTable] = useState(lists);

  const [dataDialog, setDataDialog] = useState({});
  const [viewDialog, setViewDialog] = useState(false);

  /*Xem /* */
  const ViewHandler = (id) => {
    const idRow = DataTable.findIndex((item) => item.id === id);
    setDataDialog(DataTable[idRow]);
    setViewDialog(true);
  };
  console.log(lists);
  console.log(DataTable);
  return (
    <>
      <div
        style={{
          fontSize: "50px",
          margin: "42px 256px 42px 261px",
          backgroundColor: "mediumvioletred",
          color: "ghostwhite",
          textAlign: "center",
        }}
      >
        Quản lý danh sách thí sinh
      </div>
      <TableContainer component={Paper} style={{ padding: "40px" }}>
        <div
          style={{
            fontSize: "50px",
            margin: "42px 256px 42px 261px",
            backgroundColor: "mediumvioletred",
            color: "ghostwhite",
            textAlign: "center",
          }}
        ></div>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "20px" }}>STT</TableCell>

              <TableCell style={{ fontSize: "20px" }} align="left">
                Tên thí sinh
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Hình ảnh
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Tuổi
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Quê quán
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Chiều cao
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Cân Nặng
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Công việc
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="left">
                Thao tac
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lists.map((list) => (
              <TableRow>
                {/* {console.log(list)} */}
                <TableCell component="th" scope="row">
                  {list.id}
                </TableCell>
                <TableCell align="left">{list.name}</TableCell>
                <TableCell align="center">
                  <Avatar src={list.img} variant="square"></Avatar>
                </TableCell>
                <TableCell align="left">{list.age}</TableCell>
                <TableCell align="left">{list.born}</TableCell>
                <TableCell align="left">{list.height}</TableCell>
                <TableCell align="left">{list.weight}</TableCell>
                <TableCell align="left">{list.jobs}</TableCell>
                <TableCell align="left">
                  <IconButton
                    variant="contained"
                    color="primary"
                    style={{ margin: 5 }}
                    onClick={() => ViewHandler(list.id)}
                  >
                    <Visibility />
                  </IconButton>
                </TableCell>
                <TableCell align="left">
                  <IconButton
                    variant="contained"
                    color="primary"
                    style={{ margin: 5 }}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="left">
                  <IconButton
                    variant="contained"
                    color="primary"
                    style={{ margin: 5 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
