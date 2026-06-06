import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import "./styles.css";

const HeaderComponent = () => {
  return (
    <AppBar position="fixed" className="topbar-appBar">
      <Toolbar disableGutters>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", px: 2 }}>
          <Typography variant="h5" component="div">
            Nguyễn Quý Tuấn - B23DCVT440
          </Typography>

          <Typography variant="h6" component="div">
            Photo Sharing App
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;