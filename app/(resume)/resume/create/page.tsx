"use client";

import React, { useState, useCallback } from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TwoColumnResumeBuilder from "../_components/TwoColumnResumeBuilder";
import SingleColumnResumeBuilder from "../_components/SingleColumnResumeBuilder";
import TwoColumnResumeViewer from "../_components/TwoColumnResumeViewer";
import SingleColumnResumeViewer from "../_components/SingleColumnResumeViewer";
import Navbar from "../_components/Navbar";
import { useTheme } from "@/providers/ThemeContext";
import { useSearchParams } from "next/navigation";

interface Category {
  id: string;
  title: string;
  items: string[];
  column: "left" | "right";
}

interface ResumeData {
  name: string;
  title: string;
  categories: Category[];
  summary: string;
  experience?: string;
  education?: string;
  skills?: string;
  location: string;
  email: string;
  phone: string;
}

const NewResumePage = () => {
  const { isDarkMode } = useTheme();
  const searchParams = useSearchParams();
  const layout = searchParams.get("layout") || "twoColumn";

  const [resumeData, setResumeData] = useState<ResumeData>({
    name: "",
    title: "",
    categories: [],
    summary: "",
    experience: "",
    education: "",
    skills: "",
    location: "",
    email: "",
    phone: "",
  });

  const handleResumeDataChange = useCallback((data: ResumeData) => {
    setResumeData(data);
  }, []);

  const ResumeBuilder =
    layout === "twoColumn" ? TwoColumnResumeBuilder : SingleColumnResumeBuilder;
  const ResumeViewer =
    layout === "twoColumn" ? TwoColumnResumeViewer : SingleColumnResumeViewer;

  return (
    <>
      <Navbar title="Create New Resume" />
      <Container maxWidth="lg">
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            color={isDarkMode ? "white" : "black"}
            component="h1"
            gutterBottom
          >
            New Resume (
            {layout === "twoColumn" ? "Two Column" : "Single Column"})
          </Typography>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <ResumeBuilder
                onDataChange={handleResumeDataChange}
                initialData={resumeData}
                key={layout}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ width: "210mm", margin: "auto" }}>
                <Box id="resume-viewer">
                  <ResumeViewer {...resumeData} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default NewResumePage;
