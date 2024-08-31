import {
  Paper,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const features = [
  "Easy-to-use interface",
  "Multiple professional templates",
  "Real-time preview",
  "Export to PDF, Word, or HTML",
  "Customizable resume builder",
  "Privacy and data security",
  "Collaborative editing",
];

const KeyFeatures = () => (
  <Paper
    elevation={3}
    sx={{
      p: 4,
      borderRadius: 2,
      mb: 4,
      bgcolor: "#f8fafc", // Light blue background
    }}
  >
    <Typography
      variant="h5"
      gutterBottom
      color="primary"
      sx={{ mb: 3, fontWeight: "bold" }}
    >
      Key Features
    </Typography>
    <Grid container spacing={2}>
      {features.map((text) => (
        <Grid size={{ xs: 6, md: 3, sm: 4 }} key={text}>
          <ListItem sx={{ py: 2 }}>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="primary" fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                variant: "body1",
                fontWeight: "medium",
                color: "text.primary",
              }}
            />
          </ListItem>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

export default KeyFeatures;
