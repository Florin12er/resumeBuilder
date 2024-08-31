// components/ThemeSwitch.tsx
import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { useTheme } from "@/providers/ThemeContext";

const ThemeSwitch: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <FormControlLabel
      control={<Switch checked={isDarkMode} onChange={toggleTheme} />}
      label={isDarkMode ? "Dark Mode" : "Light Mode"}
    />
  );
};

export default ThemeSwitch;
