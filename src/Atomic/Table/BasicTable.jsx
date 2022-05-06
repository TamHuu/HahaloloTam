import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormDialog from "./FormDialog";
import { Avatar, Button, Grid } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

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
    desc: "Macchiato lôi cuốn các tín đồ yêu ẩm thực bằng vị béo béo, thơm thơm, mằn mặn đầy mê hoặc. Sự kết hợp hoàn hảo giữa trà đen, trà sữa hay cà phê cùng lớp kem sữa béo ngậy đã khiến cho các tín đồ phải mê mệt, đắm mình trong vị ngon ngây ngất, hương thơm thoang thoảng, vị béo ngậy nhưng không ngán cuốn hút của trà macchiato.",
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
    name: "Trà chanh",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVtb24lMjBqdWljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    desc: "rất ư là ngon",
    money: "50.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP6",
    nodot: 6,
    name: "Trà dâu",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "rất ư là ngon",
    money: "55.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP7",
    nodot: 7,
    name: "Nước ép cherry",
    image:
      "https://images.unsplash.com/photo-1560526860-1f0e56046c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "rất ư là ngon",
    money: "60.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP8",
    nodot: 8,
    name: "Nước ép xoài",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "rất ư là ngon",
    money: "65.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP9",
    nodot: 9,
    name: "dâu tằm cocktail",
    image:
      "https://images.unsplash.com/photo-1571950006418-f226dc106482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "rất ư là ngon",
    money: "70.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP10",
    nodot: 10,
    name: "Soda chanh",
    image:
      "https://images.unsplash.com/photo-1567671899076-51a64ddb7c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "rất ư là ngon",
    money: "75.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP10",
    nodot: 10,
    name: "Soda chanh",
    image:
      "https://images.unsplash.com/photo-1567671899076-51a64ddb7c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "rất ư là ngon",
    money: "75.000Đ",
    status: "hết hàng",
  },
  {
    id: "SP10",
    nodot: 10,
    name: "Soda chanh",
    image:
      "https://images.unsplash.com/photo-1567671899076-51a64ddb7c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    desc: "rất ư là ngon",
    money: "75.000Đ",
    status: "hết hàng",
  },
];
export default function BasicTable({ clickHandler }) {
  const classes = useStyles();
  const [toggle, setToggle] = React.useState(false);
  const [DataTable, setDataTable] = useState(rows);
  const [showDialog, setShowDialog] = useState(false);
  const [dataDialog, setDataDialog] = useState({});
  const [editDialog, setEditDialog] = useState(true);

  const handleDelete = (id) => {
    setDataTable(DataTable.filter((item) => item.id !== id));
  };
  const toggleIt = () => {
    setToggle(!toggle);
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
      <FormControlLabel
        className={toggle && "body-color"}
        variant="contained"
        color="secondary"
        style={{
          color: "white",
          borderRadius: "71px",
        }}
        control={
          <Switch
            style={{ Color: "white", padding: "10px", BackgroundColor: "red" }}
            color="secondary"
            bgcolor="secondary.main"
            onChange={toggleIt}
          />
        }
        label="Đổi màu giao diện"
      />
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
