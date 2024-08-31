// components/Sidebar.tsx
"use client";
import React, { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  IconButton,
  Divider,
} from "@mui/material";
import { UserButton } from "@clerk/nextjs";
import CreateResumeModal from "./CreateResumeModal";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from "@mui/icons-material/Description";
import { Resizable } from "re-resizable";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useTheme as useCustomTheme } from "@/providers/ThemeContext";
import SearchModal from "./SearchModal";
import { useRouter } from "next/navigation";

const mockResumes = [
  { id: 1, name: "Software Engineer Resume" },
  { id: 2, name: "Product Manager Resume" },
  { id: 3, name: "Data Analyst Resume" },
];

const Sidebar = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [width, setWidth] = useState(240);
  const { isDarkMode } = useCustomTheme();
  const router = useRouter();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setWidth(isCollapsed ? 240 : 60);
  };
  const handleOpenSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };
  const handleSelectLayout = (layout: "twoColumn" | "singleColumn") => {
    // Here you can handle the layout selection, e.g., by navigating to a create page with the selected layout
    router.push(`/resume/create?layout=${layout}`);
    handleCloseCreateModal();
  };

  return (
    <Resizable
      size={{ width, height: "100%" }}
      enable={{ right: true }}
      onResizeStop={(e, direction, ref, d) => {
        setWidth(width + d.width);
      }}
      minWidth={60}
      maxWidth={400}
    >
      <Box
        sx={{
          height: "100%",
          bgcolor: isDarkMode ? "grey.900" : "background.paper",
          color: isDarkMode ? "grey.300" : "text.primary",
          overflow: "hidden",
          transition: "width 0.3s",
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: 2,
            justifyContent: "space-between",
          }}
        >
          <IconButton onClick={toggleSidebar}>
            <MenuIcon color={isDarkMode ? "primary" : "inherit"} />
          </IconButton>
          {!isCollapsed && <UserButton />}
        </Box>
        <Divider />
        <ListItem>
          <IconButton onClick={handleOpenSearchModal}>
            <SearchIcon
              sx={{
                color: isDarkMode ? "white" : "primary",
              }}
            />
          </IconButton>
          <ListItemText primary="Search" />
        </ListItem>
        <Divider />
        <List>
          <ListItemButton onClick={handleOpenCreateModal}>
            <ListItemIcon>
              <AddIcon color={isDarkMode ? "primary" : "inherit"} />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Create Resume" />}
          </ListItemButton>
        </List>
        <Divider />
        <List>
          {mockResumes.map((resume) => (
            <ListItemButton key={resume.id}>
              <ListItemIcon>
                <DescriptionIcon color={isDarkMode ? "primary" : "inherit"} />
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary={resume.name} />}
            </ListItemButton>
          ))}
        </List>
        {!isCollapsed && (
          <Box sx={{ position: "absolute", bottom: 16, left: 16 }}>
            <ThemeSwitch />
          </Box>
        )}
      </Box>

      <SearchModal open={isSearchModalOpen} onClose={handleCloseSearchModal} />
      <CreateResumeModal
        open={isCreateModalOpen}
        onClose={handleCloseCreateModal}
        onSelectLayout={handleSelectLayout}
      />
    </Resizable>
  );
};

export default Sidebar;
