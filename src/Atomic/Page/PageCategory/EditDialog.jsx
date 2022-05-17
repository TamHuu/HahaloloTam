import React, { useState } from "react";

// import ComboBox from "./ComboBox";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { Avatar, DialogTitle, TextField } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";

export default function CustomizedDialogs(props) {
  const [name, setName] = useState(props.row.name || "");
  const [image, setImage] = useState(props.row.image || "");
  const [desc, setDesc] = useState(props.row.desc || "");

  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    imageError: "",
    descError: "",
  });

  const [isNameValid, setIsNameValid] = useState(false);
  const [isImageValid, setIsImageValid] = useState(false);
  const [isDescValid, setIsDescValid] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameValid = (value) => {
    if (value !== "") {
      setIsNameValid(false);
      setErrorMessage({
        ...errorMessage,
        nameError: "",
      });
    } else {
      setIsNameValid(true);
      setErrorMessage({
        ...errorMessage,
        nameError: "Please input name",
      });
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleImageValid = (value) => {
    if (value !== "") {
      setIsImageValid(false);
      setErrorMessage({
        ...errorMessage,
        imageError: "",
      });
    } else {
      setIsImageValid(true);
      setErrorMessage({
        ...errorMessage,
        imageError: "Please input image url",
      });
    }
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const handleDescValid = (value) => {
    if (value !== "") {
      setIsDescValid(false);
      setErrorMessage({
        ...errorMessage,
        descError: "",
      });
    } else {
      setIsDescValid(true);
      setErrorMessage({
        ...errorMessage,
        descError: "Please input desc",
      });
    }
  };
  // const [money, setMoney] = useState(props.row.money || "");
  // const [status, setStatus] = useState(props.row.status || "");

  const handleClose = () => {
    props.setShowDialog(false);
  };

  const handleExit = () => {
    props.setShowDialog(false);
    props.setEditDialog(true);
  };

  const handleSave = () => {
    handleNameValid(name);
    handleImageValid(image);
    handleDescValid(desc);
    if (isNameValid && isImageValid && isDescValid) {
      props.updateData({
        nodot: props.row.nodot,
        id: props.row.id,
        name: name,
        image,
        desc,
        // money,
        // status,
      });
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={true}
    >
      <DialogTitle onClose={handleClose}>Danh mục</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          {props.row.image !== undefined && (
            <Avatar
              alt="Cindy Baker"
              variant="square"
              src={props.row.image}
              style={{
                width: "250px",
                height: "250px",
                marginBottom: "16px",
                marginLeft: "94px",
              }}
            />
          )}
          <TextField
            id="TenSp"
            error={isNameValid}
            helperText={errorMessage.nameError}
            style={{ marginBottom: "16px" }}
            label="Tên Sản Phẩm"
            variant="outlined"
            fullWidth={true}
            value={name}
            InputProps={{
              readOnly: props.editDialog,
            }}
            onChange={handleNameChange}
          />
          {!props.editDialog && (
            <TextField
              id="TenSp"
              error={isImageValid}
              helperText={errorMessage.imageError}
              style={{ marginBottom: "16px" }}
              label="Url Image"
              variant="outlined"
              fullWidth={true}
              value={image}
              InputProps={{
                readOnly: props.editDialog,
              }}
              onChange={handleImageChange}
            />
          )}
          <TextField
            id="desc"
            error={isDescValid}
            helperText={errorMessage.descError}
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
            onChange={handleDescChange}
          />
        </Typography>
      </DialogContent>
      <DialogActions>
        {!props.editDialog && (
          <Button
            autoFocus
            color="green"
            onClick={handleSave}
            variant="contained"
          >
            Lưu
          </Button>
        )}
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
