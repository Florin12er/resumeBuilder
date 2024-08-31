"use client";

import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AlgoliaSearch from "./AngoliaSearch";
import { useTheme } from "@mui/material/styles";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}
const SearchModal: React.FC<SearchModalProps> = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="search-modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 600,
          maxHeight: "80vh",
          overflow: "auto",
          bgcolor: theme.palette.background.paper,
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <AlgoliaSearch onClose={onClose} />
      </Box>
    </Modal>
  );
};

export default SearchModal;
