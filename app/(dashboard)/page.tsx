"use client";
import { UserButton } from "@clerk/nextjs";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Stack,
} from "@mui/material";
import Sidebar from "./_components/Sidebar";
import KeyFeatures from "./_components/KeyFeatures";
import Footer from "./_components/Footer";
import ActionCards from "./_components/ActionCards";

export default function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#F3F4F6",
      }}
    >
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid #E5E7EB" }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "#4338CA", fontWeight: "bold" }}
          >
            Resume Builder
          </Typography>
          <UserButton />
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Stack direction="row" spacing={5}>
          <Box sx={{ width: "20%" }}>
            <Sidebar />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h2"
              className="text-blue-500"
              gutterBottom
              sx={{ mb: 3 }}
            >
              Welcome to Your Dashboard
            </Typography>
            <Typography variant="h5" sx={{ mb: 3 }} color="text.secondary">
              Create, manage, and export your professional resumes with ease.
            </Typography>
            <div className="grid gap-4">
              <ActionCards />
              <KeyFeatures />
            </div>
          </Box>
        </Stack>
      </Container>
      <Footer />
    </Box>
  );
}
