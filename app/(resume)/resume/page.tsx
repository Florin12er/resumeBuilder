"use client";

import React from "react";
import {
  Typography,
  Button,
  Box,
  Paper,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { useTheme as useCustomTheme } from "@/providers/ThemeContext";

const Resume = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  const { isDarkMode } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCreateResume = () => {
    if (!isLoaded) return;
    if (isSignedIn) {
      router.push("/resume/create");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: isMobile ? "calc(100vh - 56px)" : "calc(100vh - 64px)", // Adjust for AppBar height
          textAlign: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            backgroundColor: isDarkMode ? "grey.800" : "background.paper",
            borderRadius: 2,
            width: "100%",
            maxWidth: 600,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            color={isDarkMode ? "grey.100" : "text.primary"}
          >
            Welcome to Resume Builder
          </Typography>
          <Typography
            variant="body1"
            paragraph
            color={isDarkMode ? "grey.300" : "text.secondary"}
          >
            Create professional resumes with ease. Start building your career
            today!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<AddIcon />}
            onClick={handleCreateResume}
            sx={{
              mt: 2,
              backgroundColor: isDarkMode ? "#6366F1" : "#4338CA",
              "&:hover": {
                backgroundColor: isDarkMode ? "#4F46E5" : "#3730A3",
              },
            }}
          >
            Create New Resume
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Resume;
