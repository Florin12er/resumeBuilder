import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./_components/Sidebar";
import MainContent from "./_components/MainContent";

const ResumeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <MainContent>{children}</MainContent>
    </Box>
  );
};

export default ResumeLayout;
