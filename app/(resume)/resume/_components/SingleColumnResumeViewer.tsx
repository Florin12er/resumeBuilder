import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface SingleColumnResumeViewerProps {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  categories: Array<{
    id: string;
    title: string;
    items: string[];
  }>;
}

const SingleColumnResumeViewer: React.FC<SingleColumnResumeViewerProps> = ({
  name,
  title,
  summary,
  email,
  phone,
  location,
  categories,
}) => {
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "white",
        color: "black",
        minHeight: "297mm",
        width: "210mm",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Box sx={{ backgroundColor: "#f0f0f0", p: 3, mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
          {name}
        </Typography>
        <Typography variant="h6" sx={{ color: "#555" }}>
          {title}
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid size={{ xs: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailIcon sx={{ mr: 1, color: "#555" }} />
            <Typography>{email}</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PhoneIcon sx={{ mr: 1, color: "#555" }} />
            <Typography>{phone}</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ mr: 1, color: "#555" }} />
            <Typography>{location}</Typography>
          </Box>
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Summary
      </Typography>
      <Typography sx={{ mb: 3 }}>{summary}</Typography>

      {categories.map((category) => (
        <Box key={category.id} sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1, color: "#333" }}
          >
            {category.title}
          </Typography>
          <Divider sx={{ mb: 2, backgroundColor: "#333" }} />
          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            {category.items.map((item, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {item}
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
};

export default SingleColumnResumeViewer;
