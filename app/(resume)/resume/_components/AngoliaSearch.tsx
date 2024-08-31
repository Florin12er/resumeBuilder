"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import algoliasearch from "algoliasearch";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  InputBase,
  Paper,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import "@algolia/autocomplete-theme-classic";

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID as string,
  process.env.ALGOLIA_ADMIN_KEY as string,
);

const mockResults = [
  { id: 1, title: "Software Engineer Resume", lastModified: "2024-03-15" },
  { id: 2, title: "Product Manager CV", lastModified: "2024-03-10" },
  { id: 3, title: "Data Analyst Resume", lastModified: "2024-03-05" },
  { id: 4, title: "UX Designer Portfolio", lastModified: "2024-02-28" },
  { id: 5, title: "Marketing Specialist Resume", lastModified: "2024-02-20" },
];

interface AlgoliaSearchProps {
  onClose: () => void;
}

const AlgoliaSearch: React.FC<AlgoliaSearchProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(mockResults);
  const theme = useTheme();

  useEffect(() => {
    const filteredResults = mockResults.filter((result) =>
      result.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setResults(filteredResults);
  }, [searchTerm]);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h6" gutterBottom color="text.primary">
        Search Resumes
      </Typography>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          mb: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <SearchIcon
          sx={{
            p: "10px",
            color: "text.primary",
          }}
        />
        <InputBase
          sx={{ ml: 1, flex: 1, color: "text.primary" }}
          placeholder="Type to search resumes..."
          inputProps={{ "aria-label": "search resumes" }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Paper>
      <List>
        {results.map((result: any) => (
          <ListItem
            key={result.id}
            sx={{
              mb: 1,
              bgcolor:
                theme.palette.mode === "dark" ? "background.paper" : "grey.100",
              borderRadius: 1,
              "&:hover": {
                bgcolor: theme.palette.action.hover,
              },
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                <DescriptionIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" color="text.primary">
                  {result.title}
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="text.secondary">
                  Last modified: {result.lastModified}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AlgoliaSearch;
