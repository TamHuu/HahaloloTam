import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Fragment } from "react";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //
  const productHandler = (e) => {
    setProduct(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };

  //event onClick
  const handleAdd = () => {
    props.onAdd({ product, description, quantity });
  };

  const handleUpdate = () => {
    console.log({ product, quantity, description });
  };
  return (
    <Fragment>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}
        style={{ marginRight: "10px" }}
      >
        Xem
      </Button>
      <Button
        variant="outlined"
        style={{ marginRight: "10px" }}
        color="secondary"
        onClick={() => props.onDelete(props.row.id)}
      >
        Xóa
      </Button>

      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Sửa
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sản phẩm</DialogTitle>
        <DialogContent>
          <TextField
            id="Thêm"
            label="Tên sản phẩm"
            fullWidth={true}
            style={{ marginBottom: "2rem" }}
            value={product}
            onChange={productHandler}
          />
          <TextField
            id="Sửa"
            label="Miêu tả sản phẩm"
            variant="filled"
            fullWidth={true}
            style={{ marginBottom: "1rem" }}
            value={description}
            onChange={descriptionHandler}
          />
          <TextField
            id="Xóa"
            label="Số lượng"
            variant="outlined"
            fullWidth={true}
            style={{ marginBottom: "1rem" }}
            value={quantity}
            onChange={quantityHandler}
          />
          <TextField
            id="Thoát"
            label="Mục khác"
            variant="outlined"
            fullWidth={true}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleAdd} color="primary">
            Thêm
          </Button>

          <Button onClick={handleUpdate} color="primary">
            Sửa
          </Button>
          <Button onClick={handleClose} color="primary">
            Thoát
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
