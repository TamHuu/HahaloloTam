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
import { Avatar, Button, Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    width: "100%",
    height: "400px",
    overflow: "auto",
  },
});

const rows = [
  {
    id: "SP1",
    nodot: 1,
    name: "Coffee",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.",
    money: "20.000Đ",
    status: "còn hàng",
  },
  {
    id: "SP2",
    nodot: 2,
    name: " Matcha đá xay",
    image:
      "https://media.istockphoto.com/photos/matcha-latte-green-milk-foam-cup-on-wood-table-at-cafe-trendy-powered-picture-id1325991061?b=1&k=20&m=1325991061&s=170667a&w=0&h=Aa3JVRJG_PMP8YCogu65x7qqC5y0q93VvNxEYw_jxZk=",
    desc: "Màu xanh mát mắt của bột trà Matcha, vị ngọt nhẹ nhàng, pha trộn cùng sữa tươi, Matcha Latte sẽ khiến bạn yêu ngay từ lần đầu tiên.",
    money: "30.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP3",
    nodot: 3,
    name: "Trà machiato",
    image:
      "https://media.istockphoto.com/photos/coffee-latte-caramel-machiato-picture-id1340692101?b=1&k=20&m=1340692101&s=170667a&w=0&h=rJD9nSyYbnwe3MtKCxBFUPXAQ2aqTMIuG5tYoQKaWdg=",
    desc: "Macchiato lôi cuốn các tín đồ yêu ẩm thực bằng vị béo béo, thơm thơm, mằn mặn đầy mê hoặc. Sự kết hợp hoàn hảo giữa trà đen, trà sữa hay cà phê.",
    money: "40.000Đ",
    status: "còn hàng",
  },
  {
    id: "SP4",
    nodot: 4,
    name: "Orange juice cocktail",
    image:
      "https://images.unsplash.com/photo-1598994580656-33ae4481138d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwanVpY2UlMjBjb2NrdGFpbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Thức uống đỉnh cao mang một diện mạo tươi mới, tiện lợi, phù hợp với bình thường mới và vẫn giữ nguyên vị thanh ngọt của đào, vị chua dịu của cam vàng nguyên vỏ và vị trà đen thơm lừng ly Trà đào cam sả nguyên bản. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
    money: "45.000Đ",
    status: "còn hàng",
  },
  {
    id: "SP5",
    nodot: 5,
    name: "Trà Đào Cam Sả - Đá",
    image:
      "https://minio.thecoffeehouse.com/image/admin/tra-dao-cam-xa_668678.jpg",
    desc: "Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.",
    money: "50.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP6",
    nodot: 6,
    name: "Trà Hạt Sen - Đá",
    image: "https://minio.thecoffeehouse.com/image/admin/tra-sen_905594.jpg",
    desc: "Nền trà oolong hảo hạng kết hợp cùng hạt sen tươi, bùi bùi và lớp foam cheese béo ngậy. Trà hạt sen là thức uống thanh mát, nhẹ nhàng phù hợp cho cả buổi sáng và chiều tối.",
    money: "55.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP7",
    nodot: 7,
    name: "Hồng Trà Sữa Trân Châu",
    image:
      "https://minio.thecoffeehouse.com/image/admin/hong-tra-sua-tran-chau_326977.jpg",
    desc: "Thêm chút ngọt ngào cho ngày mới với hồng trà nguyên lá, sữa thơm ngậy được cân chỉnh với tỉ lệ hoàn hảo, cùng trân châu trắng dai giòn có sẵn để bạn tận hưởng từng ngụm trà sữa ngọt ngào thơm ngậy thiệt đã.",
    money: "60.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP8",
    nodot: 8,
    name: "Hi-Tea Đá Tuyết Yuzu Vải",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1649132566_new-da-tuyet-vai.jpeg",
    desc: "Vị trà hoa Hibiscus chua chua, kết hợp cùng đá tuyết Yuzu mát lạnh tái tê, thêm miếng vải căng mọng, ngọt ngào sẽ khiến bạn thích thú ngay từ lần thử đầu tiên.",
    money: "65.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP9",
    nodot: 9,
    name: "Hi-Tea Đào",
    image:
      "https://minio.thecoffeehouse.com/image/admin/1649132519_new-hi-tea-dao.jpeg",
    desc: "Sự kết hợp ăn ý giữa Đào cùng trà hoa Hibiscus, tạo nên tổng thể hài hoà dễ gây “thương nhớ” cho team thích món thanh mát, có vị chua nhẹ.",
    money: "70.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP10",
    nodot: 10,
    name: "Trà Sữa Oolong Nướng Nóng",
    image:
      "https://images.unsplash.com/photo-1567671899076-51a64ddb7c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "Đậm đà chuẩn gu và ấm nóng - bởi lớp trà oolong nướng đậm vị hoà cùng lớp sữa thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được  (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho từng ngụm ấm áp, lưu luyến vị trà sữa đậm đà mãi nơi cuống họng.",
    money: "75.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP11",
    nodot: 11,
    name: "Trà Sữa Oolong Nướng Trân Châu",
    image:
      "https://minio.thecoffeehouse.com/image/admin/Bottle_oolong_285082.jpg",
    desc: "Phiên bản chai fresh 500ml mới, The Coffee House tin rằng với diện mạo mới: tiện lợi và phù hợp với bình thường mới này, các tín đồ trà sữa sẽ được thưởng thức hương vị đậm đà, hòa quyện với sữa thơm béo mang đến cảm giác mát lạnh ở bất cứ nơi đâu. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.",
    money: "75.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP12",
    nodot: 12,
    name: "Hồng Trà Latte Macchiato",
    image:
      "https://minio.thecoffeehouse.com/image/admin/hong-tra-latte_618293.jpg",
    desc: "Sự kết hợp hoàn hảo bởi hồng trà dịu nhẹ và sữa tươi, nhấn nhá thêm lớp macchiato trứ danh của The Coffee House mang đến cho bạn hương vị trà sữa đúng gu tinh tế và healthy.",
    money: "75.000Đ",
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
        <TextField>Sản Phẩm</TextField>
        <Button variant="contained" color="secondary" onClick={handleCreate}>
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
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="center">
                  <Grid container spacing={[20, 20]}>
                    <Grid xxl={4} xl={4} lg={4} md={12} xs={12}>
                      <Button
                        onClick={() => handleRead(row.id)}
                        variant="contained"
                        color="secondary"
                        style={{ margin: 5 }}
                      >
                        Xem
                      </Button>
                    </Grid>

                    <Grid xxl={4} xl={4} lg={4} md={12} xs={12}>
                      <Button
                        onClick={() => handleDelete(row.id)}
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
