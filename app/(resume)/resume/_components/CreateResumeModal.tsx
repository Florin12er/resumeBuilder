"use client";
import React from "react";
import { Modal, Box, Typography, Button, Paper, useTheme } from "@mui/material";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import Grid from "@mui/material/Grid2";

interface CreateResumeModalProps {
  open: boolean;
  onClose: () => void;
  onSelectLayout: (layout: "twoColumn" | "singleColumn") => void;
}

const CreateResumeModal: React.FC<CreateResumeModalProps> = ({
  open,
  onClose,
  onSelectLayout,
}) => {
  const theme = useTheme();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="create-resume-modal-title"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 600,
          bgcolor: theme.palette.background.paper,
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography
          id="create-resume-modal-title"
          variant="h6"
          component="h2"
          gutterBottom
        >
          Choose Resume Layout
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": { bgcolor: theme.palette.action.hover },
              }}
              onClick={() => onSelectLayout("twoColumn")}
            >
              <ViewColumnIcon sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="subtitle1">Two Column Layout</Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Personal data on one side, job data on the other
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                "&:hover": { bgcolor: theme.palette.action.hover },
              }}
              onClick={() => onSelectLayout("singleColumn")}
            >
              <ViewStreamIcon sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="subtitle1">Single Column Layout</Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Data organized into multiple rows
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClose}>Cancel</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateResumeModal;
