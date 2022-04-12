import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

import { Fragment } from "react";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}
        style={{ marginRight: "10px" }}
      >
        Thêm
      </Button>
      <Button
        variant="outlined"
        style={{ marginRight: "10px" }}
        color="secondary"
        onClick={handleClickOpen}
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
          />
          <TextField
            id="Sửa"
            label="Miêu tả sản phẩm"
            variant="filled"
            fullWidth={true}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            id="Xóa"
            label="Số lượng"
            variant="outlined"
            fullWidth={true}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            id="Thoát"
            label="Mục khác"
            variant="outlined"
            fullWidth={true}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Thêm
          </Button>
          <Button onClick={handleClose} color="primary">
            Xóa
          </Button>
          <Button onClick={handleClose} color="primary">
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
