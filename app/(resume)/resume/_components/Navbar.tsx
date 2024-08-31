"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@/providers/ThemeContext";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isDarkMode } = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const generatePDF = async () => {
    const input = document.getElementById("resume-viewer");
    if (!input) return;

    const scale = 2;
    const canvas = await html2canvas(input, {
      scale: scale,
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
      windowWidth: 794,
      windowHeight: 1123,
    });

    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  const handleExportPDF = () => {
    generatePDF();
    handleClose();
  };

  const handleExportWord = () => {
    console.log("Export as Word Document");
    handleClose();
  };

  const handleDelete = () => {
    console.log("Delete Resume");
    handleClose();
  };

  return (
    <AppBar position="static" color={isDarkMode ? "primary" : "default"}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleExportPDF}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PictureAsPdfIcon sx={{ mr: 1 }} />
              Export as PDF
            </Box>
          </MenuItem>
          <MenuItem onClick={handleExportWord}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <DescriptionIcon sx={{ mr: 1 }} />
              Export as Word Document
            </Box>
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <DeleteIcon sx={{ mr: 1 }} />
              Delete
            </Box>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
