import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const DataCategory = [
  {
    id: "SP1",
    nodot: 1,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1592858167090-2473780d894d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "tạm được",
    size: "50",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP2",
    nodot: 2,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "tạm được",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP3",
    nodot: 3,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "tạm được",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP4",
    nodot: 4,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "tạm được",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP5",
    nodot: 5,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "tạm được",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP6",
    nodot: 6,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "tạm được",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP7",
    nodot: 7,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "tạm được",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP8",
    nodot: 8,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "tạm được",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP9",
    nodot: 9,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "tạm được",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP10",
    nodot: 10,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "tạm được",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
];
export default function TableProduct() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{ marginTop: "240px" }}>
      <Table
        className={classes.table}
        size="small"
        aria-label="simple table"
        padding="checkbox"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left">STT</TableCell>
            <TableCell align="left">Tên sản phẩm</TableCell>
            <TableCell align="left"> Hình ảnh</TableCell>
            <TableCell align="left">Miêu tả</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Thành tiền</TableCell>
            <TableCell align="left">Tình trạng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DataCategory.map((row) => (
            <TableRow key={row.nodot}>
              <TableCell align="left" component="th" scope="row">
                {row.nodot}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">
                <Avatar alt="#" src={row.image} variant="square" />
              </TableCell>
              <TableCell align="left">{row.desc}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
              <TableCell align="right">{row.money}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
