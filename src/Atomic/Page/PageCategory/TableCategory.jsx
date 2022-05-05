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
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const DataCategory = [
  {
    id: "SP1",
    nodot: 1,
    name: " Bánh kem cà phê",
    image:
      "https://media.istockphoto.com/photos/chocolate-bundt-cake-with-chocolate-ganache-picture-id1336693912?b=1&k=20&m=1336693912&s=170667a&w=0&h=pnLO3zXiaDkbB65UmIPrd8gdcjxdf7xuglNjqwVycY0=",
    desc: "ngon tuyệt cú mèo",
    size: "lớn",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP2",
    nodot: 2,
    name: "Bánh socola 3 tầng",
    image:
      "https://images.unsplash.com/photo-1606188074044-fcd750f6996a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FrZSUyMHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: "ngon tuyệt cú mèo",
    size: "vừa",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP3",
    nodot: 3,
    name: "Socola hoa hồng",
    image:
      "https://images.unsplash.com/photo-1600002415506-dd06090d3480?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNha2UlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "ngon tuyệt cú mèo",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },

  {
    id: "SP4",
    nodot: 4,
    name: "Mì spalleti",
    image:
      "https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "ngon tuyệt cú mèo",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP5",
    nodot: 5,
    name: "Bánh mật",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "ngon tuyệt cú mèo",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP6",
    nodot: 6,
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "ngon tuyệt cú mèo",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP7",
    nodot: 7,
    name: "Su kem",
    image:
      "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    desc: "ngon tuyệt cú mèo",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP8",
    nodot: 8,
    name: "Cơm hải sản",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRpbm5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "ngon tuyệt cú mèo",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP9",
    nodot: 9,
    name: "Bò nướng lá lốp",
    image:
      "https://media.istockphoto.com/photos/homemade-corned-beef-and-cabbage-picture-id466722944?b=1&k=20&m=466722944&s=170667a&w=0&h=8AD3ApbLO1zxn58Tf23qkldgeTiRz0ZwbYqpddlkChU=",
    desc: "ngon tuyệt cú mèo",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP10",
    nodot: 10,
    name: "Salad cá hồi",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "ngon tuyệt cú mèo",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP11",
    nodot: 11,
    name: "Bò hầm",
    image:
      "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "ngon tuyệt cú mèo",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
];
export default function TableCategory() {
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "20px",
          marginTop: "159px",
        }}
      >
        <Button variant="contained" color="secondary">
          Thêm
        </Button>
      </div>

      <TableContainer
        component={Paper}
        style={{
          height: "400px",
          overflow: "auto",
        }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          size="small"
          padding="checkbox"
          className={classes.table}
        >
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{ height: "50px", fontWeight: "bold", maxWidth: "10px" }}
              >
                STT
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Sản phẩm
              </TableCell>
              <TableCell align="left" style={{ fontWeight: "bold" }}>
                Hình ảnh
              </TableCell>
              <TableCell align="left " style={{ fontWeight: "bold" }}>
                Miêu tả
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                Thành tiền&nbsp;(Đồng)
              </TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                Tình trạng
              </TableCell>
              <TableCell align="center" style={{ fontWeight: "bold" }}>
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log("DataTable", DataCategory)}
            {DataCategory.map((row) => (
              <TableRow key={row.nodot}>
                <TableCell align="center" component="th" scope="row">
                  {row.nodot}
                </TableCell>

                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">
                  <Avatar
                    style={{ height: "100px", width: "100px", padding: "5px" }}
                    alt="#"
                    src={row.image}
                    variant="square"
                  />
                </TableCell>
                <TableCell align="left">{row.desc}</TableCell>
                <TableCell align="right">{row.money}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="center" style={{ padding: "20px" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginRight: "10px" }}
                  >
                    Xem
                  </Button>
                  <Button
                    variant="contained"
                    style={{ marginRight: "10px" }}
                    color="secondary"
                  >
                    Xóa
                  </Button>

                  <Button variant="contained" color="secondary">
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
