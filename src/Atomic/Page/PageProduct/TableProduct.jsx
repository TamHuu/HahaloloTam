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
const DataProduct = [
  {
    id: "SP1",
    nodot: 1,
    name: "Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1642353251_ca-phe-dam-vi-viet-tui-new.jpeg",
    desc: "Bắt đầu ngày mới với tách cà phê sữa “Đậm vị Việt” mạnh mẽ sẽ giúp bạn luôn tỉnh táo và hứng khởi cho ngày làm việc thật hiệu quả.",
    size: "50",
    money: "98.000Đ",
    status: "còn hàng",
  },
  {
    id: "SP2",
    nodot: 2,
    name: "Cà Phê Sữa Đá Pack 6 Lon",
    image:
      "https://minio.thecoffeehouse.com/image/admin/p6-lon-3in1_717216.jpg",
    desc: "Với thiết kế lon cao trẻ trung, hiện đại và tiện lợi, Cà phê sữa đá lon thơm ngon đậm vị của The Coffee House sẽ đồng hành cùng nhịp sống sôi nổi của tuổi trẻ và giúp bạn có được một ngày làm việc đầy hứng khởi.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP3",
    nodot: 3,
    name: "Trà Sen Túi Lọc Tearoma 20x2G",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1639648068_tra-sen-tui-loc-tearoma-20x2gr.jpg",
    desc: "Trà túi lọc Tearoma hương sen tinh tế, thanh mát, trên nền trà xanh đậm đà khó quên. Trà túi lọc Tearoma tiện lợi để sử dụng tại văn phòng, tại nhà, đi du lịch,... nhưng vẫn đảm bảo được chất lượng về hương trà tinh tế, vị trà đậm đà.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP4",
    nodot: 4,
    name: "Chocolate Đá Xay",
    image:
      "https://minio.thecoffeehouse.com/image/admin/Chocolate-ice-blended_400940.jpg",
    desc: "Sữa và kem tươi béo ngọt được “cá tính hoá” bởi vị chocolate/sô-cô-la đăng đắng. Dành cho các tín đồ hảo ngọt. Lựa chọn hàng đầu nếu bạn đang cần chút năng lượng tinh thần.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP5",
    nodot: 5,
    name: "Chocolate Đá",
    image:
      "https://minio.thecoffeehouse.com/image/admin/chocolate-da_877186.jpg",
    desc: "Bột chocolate nguyên chất hoà cùng sữa tươi béo ngậy. Vị ngọt tự nhiên, không gắt cổ, để lại một chút đắng nhẹ, cay cay trên đầu lưỡi.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP6",
    nodot: 6,
    name: "Hi-Tea Yuzu",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1649132466_new-hi-tea-yuzu.jpeg",
    desc: "Không chỉ nổi bật với sắc đỏ đặc trưng từ trà hoa Hibiscus, Hi-Tea Yuzu còn gây ấn tượng với topping Yuzu (quýt Nhật) lạ miệng, kết hợp cùng trân châu trắng dai giòn sần sật, nhai vui vui.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP7",
    nodot: 7,
    name: "Hi-Tea Vải",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1649132236_new-hi-tea-vai.jpeg",
    desc: "Chút ngọt ngào của Vải, mix cùng vị chua thanh tao từ trà hoa Hibiscus, mang đến cho bạn thức uống đúng chuẩn vừa ngon, vừa healthy.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP8",
    nodot: 8,
    name: "Gà Xé Lá Chanh",
    image:
      "https://minio.thecoffeehouse.com/image/admin/kho-ga-la-chanh_995862.jpg",
    desc: "Thịt gà được xé tơi, mang hương vị mặn, ngọt, cay cay quyện nhau vừa chuẩn, thêm chút thơm thơm thơm từ lá chanh sấy khô giòn giòn xua tan ngay cơn buồn miệng.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP9",
    nodot: 9,
    name: "Mousse Red Velvet",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1645982378_87178784-2593055164301827-6100428679446265856-n.jpg",
    desc: "Bánh nhiều lớp được phủ lớp kem bên trên bằng Cream cheese.",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
  {
    id: "SP10",
    nodot: 10,
    name: "Bánh Mì VN Thịt Nguội",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1638440015_banh-mi-vietnam.jpg",
    desc: "Gói gọn trong ổ bánh mì Việt Nam là từng lớp chả, từng lớp jambon hòa quyện cùng bơ và pate thơm lừng, thêm dưa rau cho bữa sáng đầy năng lượng. ",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
];
export default function TableProduct() {
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
            {console.log("DataTable", DataProduct)}
            {DataProduct.map((row) => (
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
