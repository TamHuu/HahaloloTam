import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Button, TextField } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";

export default function CustomizedDialogs(props) {
  const [name, setName] = useState(props.row.name || "");
  const [image, setImage] = useState(props.row.image || "");
  const [desc, setDesc] = useState(props.row.desc || "");
  const [money, setMoney] = useState(props.row.money || "");

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
      name: name,
      image,
      desc,
      money,
    });
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={true}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Sản phẩm
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          <TextField
            id="TenSp"
            style={{ marginBottom: "16px" }}
            label="Tên Danh mục"
            variant="outlined"
            fullWidth={true}
            value={name}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setName(e.target.value)}
          />
          <img
            src={image}
            alt="bg"
            onChange={(e) => setImage(e.target.value)}
          />
          <TextField
            id="desc"
            style={{ marginBottom: "16px" }}
            label="Miêu tả"
            variant="outlined"
            fullWidth={true}
            rows={4}
            multiline
            value={desc}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setDesc(e.target.value)}
          />
          <TextField
            id="money"
            style={{ marginBottom: "16px" }}
            label="Thành tiền"
            variant="outlined"
            fullWidth={true}
            value={money}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={(e) => setMoney(e.target.value)}
          />
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          color="secondary"
          onClick={handleExit}
          variant="contained"
        >
          Thoát
        </Button>
      </DialogActions>
    </Dialog>
  );
}
