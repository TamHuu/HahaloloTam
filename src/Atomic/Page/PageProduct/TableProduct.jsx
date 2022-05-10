import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Avatar, CardContent, Grid, Card, Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useState } from "react";
import Search from "../../Search/Search";
import FormDialog from "../PageCategory/FormDialog";
import Sort from "../../Sort/Sort";

const useStyles = makeStyles({
  table: {
    minWidth: "650px",
    overflow: "auto",
  },
});
const DataProduct = [
  {
    id: "SP1",
    nodot: 1,
    name: "Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G",
    image:
      "https://images.unsplash.com/photo-1500631195312-e3a9a5819f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTV8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1606767341197-2de041e9ad9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1572590016064-3e6ae9c04947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1575596510825-f748919a2bf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
      "https:minio.thecoffeehouse.com/image/admin/1649132466_new-hi-tea-yuzu.jpeg",
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
      "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1563312416-c604403c02e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1581343945411-50dca0f4b13e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHxkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1603471431201-a526d16e4569?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA1fHxkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Gói gọn trong ổ bánh mì Việt Nam là từng lớp chả, từng lớp jambon hòa quyện cùng bơ và pate thơm lừng, thêm dưa rau cho bữa sáng đầy năng lượng. ",
    size: 50,
    money: "200000Đ",
    status: "còn hàng",
  },
];
export default function TableProduct() {
  const classes = useStyles();
  const [DataTable, setDataTable] = useState(DataProduct);
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
    const idRow = DataTable.findIndex((item) => item.id === id);
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
      <div>
        <div
          style={{
            marginTop: "79px",
            color: "red",
            backgoundColor: "white",
            fontSize: "xx-large",
          }}
        >
          Danh sách sản phẩm
        </div>

        <Card>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={2}>
                <Sort />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Search />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br />
        <Box display="flex" justifyContent="flex-end" p={1}>
          {" "}
          <Button variant="contained" color="secondary" onClick={handleCreate}>
            Thêm Sản Phẩm
          </Button>{" "}
        </Box>
      </div>

      <TableContainer
        component={Paper}
        style={{
          maxHeight: "440px",
          overflowX: "auto",
          width: "100%",
        }}
      >
        <Table
          style={{ margin: "1px" }}
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
              <TableCell
                align="left"
                style={{ fontWeight: "bold", width: "10px" }}
              >
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
                style={{ fontWeight: "bold", width: "70px" }}
              >
                Thành tiền
              </TableCell>
              <TableCell
                align="left"
                style={{ fontWeight: "bold", width: "75px" }}
              >
                Tình trạng
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: "bold", width: "217px" }}
              >
                Thao tác
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log("DataTable", DataTable)}
            {DataTable.map((row) => (
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
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left">
                  <Grid container spacing={[20, 20]}>
                    <Grid xs=" auto ">
                      <Button
                        onClick={() => handleRead(row.id)}
                        variant="contained"
                        color="secondary"
                        style={{ margin: 5 }}
                      >
                        Xem
                      </Button>
                    </Grid>

                    <Grid xs="auto">
                      <Button
                        onClick={() => handleDelete(row.id)}
                        variant="contained"
                        style={{ margin: 5 }}
                        color="secondary"
                      >
                        Xóa
                      </Button>
                    </Grid>

                    <Grid xs="auto">
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ margin: 5 }}
                        onClick={() => handleUpdate(row.id)}
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
