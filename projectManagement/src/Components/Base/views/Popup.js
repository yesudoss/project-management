import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
  } from "@mui/material";
  import React from "react";
  // import ActionButton from "./ActionButton";
  import CloseIcon from '@mui/icons-material/Close';
  
  export default function Popup(props) {
    const { title, children, openPopup, setOpenPopup, isMasterProduct, fullWidth } = props;
  
    return (
      <Dialog
        sx={{ ".MuiDialog-paper": { borderRadius: "10px" } }}
        open={openPopup}
        maxWidth={isMasterProduct ? "md" : "sm"}
        fullWidth={fullWidth}
        classes={{
          paper: {
            padding: "2px",
            position: "absolute",
            top: "5px",
          },
        }}
        id={title}
      >
        <DialogTitle sx={{ paddingBottom: "0px", paddingTop: "7px" }}>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <IconButton
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              <CloseIcon color="action" />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    );
  }
  