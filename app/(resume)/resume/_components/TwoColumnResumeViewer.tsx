"use client";
import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface ResumeViewerProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  categories: {
    id: string;
    title: string;
    items: string[];
    column: "left" | "right";
  }[];
}

const TwoColumnResumeViewer: React.FC<ResumeViewerProps> = ({
  name,
  title,
  email,
  phone,
  location,
  summary,
  categories,
}) => {
  return (
    <Box
      sx={{
        width: "210mm",
        minHeight: "297mm",
        backgroundColor: "white",
        color: "black",
        padding: "20mm",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontSize: "24pt", fontWeight: "bold", mb: 1 }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "16pt", color: "text.secondary", mb: 2 }}
        >
          {title}
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid size={{ xs: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <EmailIcon sx={{ mr: 1, fontSize: "small" }} />
              <Typography variant="body2">{email}</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PhoneIcon sx={{ mr: 1, fontSize: "small" }} />
              <Typography variant="body2">{phone}</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: "small" }} />
              <Typography variant="body2">{location}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {summary}
        </Typography>
        <Divider />
      </Box>
      <Grid container spacing={4}>
        <Grid size={{ xs: 6 }}>
          {categories
            .filter((cat) => cat.column === "left")
            .map((category) => (
              <Box key={category.id} sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    borderBottom: "1px solid #000",
                    paddingBottom: "5px",
                    fontSize: "14pt",
                    fontWeight: "bold",
                  }}
                >
                  {category.title}
                </Typography>
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  {category.items.map((item, index) => (
                    <li key={index} style={{ marginBottom: "8px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Box>
            ))}
        </Grid>
        <Grid size={{ xs: 6 }}>
          {categories
            .filter((cat) => cat.column === "right")
            .map((category) => (
              <Box key={category.id} sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    borderBottom: "1px solid #000",
                    paddingBottom: "5px",
                    fontSize: "14pt",
                    fontWeight: "bold",
                  }}
                >
                  {category.title}
                </Typography>
                <ul style={{ paddingLeft: "20px", margin: 0 }}>
                  {category.items.map((item, index) => (
                    <li key={index} style={{ marginBottom: "8px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </Box>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoColumnResumeViewer;
