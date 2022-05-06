import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Avatar, Grid } from "@material-ui/core";
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
    name: " Mousse Gấu Chocolate",
    image: "https://minio.thecoffeehouse.com/image/admin/1638170066_gau.jpg",
    desc: "Với vẻ ngoài đáng yêu và hương vị ngọt ngào, thơm béo nhất định bạn phải thử ít nhất 1 lần.",
    size: "lớn",
    money: "39.000Đ",
    status: "còn hàng",
  },
  {
    id: "SP2",
    nodot: 2,
    name: "Bánh Mì Que Pate",
    image: "https://minio.thecoffeehouse.com/image/admin/banhmique_056830.jpg",
    desc: "Vỏ bánh mì giòn tan, kết hợp với lớp nhân pate béo béo đậm đà sẽ là lựa chọn lý tưởng nhẹ nhàng để lấp đầy chiếc bụng đói , cho 1 bữa sáng - trưa - chiều - tối của bạn thêm phần thú vị.",
    size: "vừa",
    money: "19.000Đ",
    status: "còn hàng",
  },
  {
    id: "SP3",
    nodot: 3,
    name: "Bánh Mì VN Thịt Nguội",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1638440015_banh-mi-vietnam.jpg",
    desc: "Gói gọn trong ổ bánh mì Việt Nam là từng lớp chả, từng lớp jambon hòa quyện cùng bơ và pate thơm lừng, thêm dưa rau cho bữa sáng đầy năng lượng.ngon tuyệt cú mèo",
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
    name: "Croissant trứng muối",
    image:
      "https://minio.thecoffeehouse.com/image/admin/croissant-trung-muoi_880850.jpg",
    desc: "Croissant trứng muối thơm lừng, bên ngoài vỏ bánh giòn hấp dẫn bên trong trứng muối vị ngon khó cưỡng.",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP6",
    nodot: 6,
    name: "Chà Bông Phô Mai",
    image:
      "https://minio.thecoffeehouse.com/image/admin/cha-bong-pho-mai_204282.jpg",
    desc: "Chiếc bánh với lớp phô mai vàng sánh mịn bên trong, được bọc ngoài lớp vỏ xốp mềm thơm lừng. Thêm lớp chà bông mằn mặn hấp dẫn bên trên.",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP7",
    nodot: 7,
    name: "Mochi Kem Phúc Bồn Tử",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1643102019_mochi-phucbontu.jpg",
    desc: "Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân phúc bồn tử ngọt ngào. Gọi 1 chiếc Mochi cho ngày thật tươi mát.",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP8",
    nodot: 8,
    name: "Mochi Kem Việt Quất",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1643102034_mochi-vietquat.jpg",
    desc: "Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân việt quất đặc trưng thơm thơm, ngọt dịu.",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP9",
    nodot: 9,
    name: "Mochi Kem Dừa Dứa",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1643101996_mochi-dua.jpg",
    desc: "Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân dừa dứa thơm lừng lạ miệng.",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP10",
    nodot: 10,
    name: "Mochi Kem Chocolate",
    image:
      "https://minio.thecoffeehouse.com/image/admin/mochi-choco_560386.jpg",
    desc: "Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân chocolate độc đáo.",
    size: "nhỏ",
    money: "20000Đ",
    status: "còn hàng",
  },
  {
    id: "SP11",
    nodot: 11,
    name: "Mít Sấy",
    image: "https://minio.thecoffeehouse.com/image/admin/mit-say_666228.jpg",
    desc: "Mít sấy khô vàng ươm, giòn rụm, giữ nguyên được vị ngọt lịm của mít tươi.",
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
              <TableCell
                align="left "
                style={{ fontWeight: "bold", width: "321px" }}
              >
                Miêu tả
              </TableCell>
              <TableCell
                align="right"
                style={{ fontWeight: "bold", width: "79px" }}
              >
                Thành tiền
              </TableCell>
              <TableCell
                align="right"
                style={{ fontWeight: "bold", width: "42px", minWidth: "98px" }}
              >
                Tình trạng
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", width: "227px" }}
              >
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
                <TableCell align="center">
                  <Grid container spacing={[20, 20]}>
                    <Grid xxl={4} xl={4} lg={4} md={12} xs={12}>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ margin: 5 }}
                      >
                        Xem
                      </Button>
                    </Grid>

                    <Grid xxl={4} xl={4} lg={4} md={12} xs={12}>
                      <Button
                        variant="contained"
                        style={{ margin: 5 }}
                        color="secondary"
                      >
                        Xóa
                      </Button>
                    </Grid>

                    <Grid xxl={4} xl={4} lg={4} md={12} xs={12}>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ margin: 5 }}
                      >
                        Sửa
                      </Button>
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
