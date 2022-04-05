import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Thêm
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Products</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-basic"
            label="Standard"
            fullWidth={true}
            style={{ marginBottom: "2rem" }}
          />
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            fullWidth={true}
            style={{ marginBottom: "2rem" }}
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            fullWidth={true}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            submit
          </Button>
          <Button onClick={handleClose} color="primary">
            Exit
          </Button>
        </DialogActions>
      </Dialog>

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Xóa
      </Button>

      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Sửa
      </Button>
    </div>
  );
}
