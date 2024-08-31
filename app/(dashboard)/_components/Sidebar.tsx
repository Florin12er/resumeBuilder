import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

interface StyledListItemProps {
  active: boolean;
}

const StyledListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "active",
})<StyledListItemProps>(({ theme, active }) => ({
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  ...(active && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.contrastText,
    },
  }),
}));

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { text: "Overview", icon: <DashboardIcon />, href: "/dashboard" },
    { text: "My Resumes", icon: <DescriptionIcon />, href: "/resume" },
    {
      text: "Create Resume",
      icon: <AddCircleOutlineIcon />,
      href: "/resume/create",
    },
  ];

  return (
    <StyledPaper elevation={0} sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" fontWeight="bold" color="primary">
          Dashboard
        </Typography>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        {menuItems.map((item) => (
          <Link
            href={item.href}
            key={item.text}
            passHref
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <StyledListItem active={pathname === item.href}>
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </StyledListItem>
          </Link>
        ))}
      </List>
    </StyledPaper>
  );
};

export default Sidebar;
