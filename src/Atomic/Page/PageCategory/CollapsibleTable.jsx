import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Avatar } from "@material-ui/core";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
      width: 80,
    },
  },
}))(TableRow);

const DataTable = [
  {
    nodot: 1,
    id: "SP1",
    nameProduct: "Trà đào cam sả",
    desc: "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
    image: "https://minio.thecoffeehouse.com/image/admin/tra-sen_905594.jpg",
    size: "lớn",
    money: "39000Đ",
  },
  {
    nodot: 2,
    id: "SP2",
    nameProduct: "Trà hạt",
    desc: "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
    image: "https://minio.thecoffeehouse.com/image/admin/tra-sen_905594.jpg",
    size: "lớn",
    money: "39000Đ",
  },
  {
    nodot: 3,
    id: "SP3",
    nameProduct: "Trà đào cam sả",
    desc: "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
    image: "https://minio.thecoffeehouse.com/image/admin/tra-sen_905594.jpg",
    size: "lớn",
    money: "39000Đ",
  },
  {
    nodot: 4,
    id: "SP4",
    nameProduct: "Trà đào cam sả",
    desc: "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
    image: "https://minio.thecoffeehouse.com/image/admin/tra-sen_905594.jpg",
    size: "lớn",
    money: "39000Đ",
  },
];

const useStyles = makeStyles({
  table: {
    marginTop: 200,

    marginLeft: 87,
  },
});

export default function CollapsibleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>STT</StyledTableCell>
            <StyledTableCell>Tên sản phẩm</StyledTableCell>
            <StyledTableCell align="right">Miêu tả</StyledTableCell>
            <StyledTableCell align="right">Hình</StyledTableCell>
            <StyledTableCell align="right">Kích thước</StyledTableCell>
            <StyledTableCell align="right">Thành tiền</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {DataTable.map((row) => (
            <StyledTableRow key={row.nameProduct}>
              <StyledTableCell component="th" scope="row">
                {row.nodot}
              </StyledTableCell>
              <StyledTableCell align="right" style={{ width: "80px" }}>
                {row.nameProduct}
              </StyledTableCell>
              <StyledTableCell align="right" style={{ maxWidth: "200px" }}>
                {row.desc}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Avatar alt="#" src={row.image} variant="square" />
              </StyledTableCell>
              <StyledTableCell align="right">{row.size}</StyledTableCell>
              <StyledTableCell align="right">{row.money}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
