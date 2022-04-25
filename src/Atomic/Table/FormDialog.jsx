import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import { TextField } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";

  
  
function SimpleDialog(props) {

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <TextField id="TenSp" label="Tên Sản Phẩm" />
      <TextField id="Img" label="IMG" variant="filled" />
      <TextField id="amount" label="Số lượng" variant="outlined" />
      <TextField id="weight" label="Khối lượng" variant="outlined" />
      <TextField id="status" label="Tình trạng" variant="outlined" />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function CustomizedDialogs(props) {
  const [name, setName] = useState(props.row.nameProduct || "");
  const [image, setImage] = useState(props.row.image || "");
  const [amount, setAmount] = useState(props.row.amount || "");
  const [weight, setWeight] = useState(props.row.weight || "");
  const [status, setStatus] = useState(props.row.status || "");

  const handleClose = () => {
    props.setShowDialog(false);
  };

  const handleExit = () => {
    props.setShowDialog(false);
    props.setEditDialog(true);
  };

  const handleSave = () => {
    props.updateData({
      nodot: props.row.nodot,
      id: props.row.id,
      nameProduct: name,
      image,
      amount,
      weight,
      status,
    });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={true}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Products
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          <TextField
            id="TenSp"
            style={{ marginBottom: "16px" }}
            label="Tên Sản Phẩm"
            variant="outlined"
            fullWidth={true}
            value={name}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="Img"
            style={{ marginBottom: "16px" }}
            label="IMG"
            variant="outlined"
            fullWidth={true}
            value={image}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setImage(e.target.value)}
          />
          <TextField
            id="amount"
            style={{ marginBottom: "16px" }}
            label="Số lượng"
            variant="outlined"
            fullWidth={true}
            value={amount}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setAmount(e.target.value)}
          />
          <TextField
            id="weight"
            style={{ marginBottom: "16px" }}
            label="Khối lượng"
            variant="outlined"
            fullWidth={true}
            value={weight}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setWeight(e.target.value)}
          />
          <TextField
            id="status"
            label="Tình trạng"
            variant="outlined"
            fullWidth={true}
            value={status}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus color="primary" onClick={handleExit}>
          Thoát
        </Button>
        {!props.editDialog && (
          <Button autoFocus color="primary" onClick={handleSave}>
            Lưu
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
