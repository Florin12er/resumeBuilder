"use client";

import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@/providers/ThemeContext";

const MainContent = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useTheme();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        overflow: "auto",
        bgcolor: isDarkMode ? "silver" : "lightgray",
      }}
    >
      {children}
    </Box>
  );
};

export default MainContent;
